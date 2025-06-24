import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, vi, beforeEach, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../Login";

const renderWithRouter = (ui: React.ReactNode) =>
  render(<BrowserRouter>{ui}</BrowserRouter>);

describe("LoginPage", () => {
  const mockOnLogin = vi.fn();
  const validEmail = "admin@lendsqr.com";
  const validPassword = "password123";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the login form", () => {
    renderWithRouter(<LoginPage onLogin={mockOnLogin} />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    renderWithRouter(<LoginPage onLogin={mockOnLogin} />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const toggleButton = screen.getByRole("button", { name: /show/i });

    expect(passwordInput).toHaveAttribute("type", "password");
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("disables login button if email or password is empty", () => {
    renderWithRouter(<LoginPage onLogin={mockOnLogin} />);
    const loginButton = screen.getByRole("button", { name: /log in/i });

    expect(loginButton).toBeDisabled();

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: validEmail },
    });
    expect(loginButton).toBeDisabled();

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: validPassword },
    });
    expect(loginButton).not.toBeDisabled();
  });

  it("logs in successfully with correct credentials", async () => {
    renderWithRouter(<LoginPage onLogin={mockOnLogin} />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: validEmail },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: validPassword },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    await waitFor(() => {
      expect(mockOnLogin).toHaveBeenCalled();
    });
  });

  it("shows error on failed login", async () => {
    renderWithRouter(<LoginPage onLogin={mockOnLogin} />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "wrong@user.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "wrongpass" },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    const errorMessage = await screen.findByText(/invalid credentials/i);
    expect(errorMessage).toBeInTheDocument();
    expect(mockOnLogin).not.toHaveBeenCalled();
  });
});
