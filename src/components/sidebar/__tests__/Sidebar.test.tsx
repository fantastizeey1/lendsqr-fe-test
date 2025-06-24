import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Mock } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { MemoryRouter, useNavigate } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("Sidebar component", () => {
  const mockNavigate = vi.fn();
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as unknown as Mock).mockReturnValue(mockNavigate);
  });

  it("renders sidebar when open", () => {
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Sidebar isOpen={true} onClose={mockOnClose} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/Lendsqr/i)).toBeInTheDocument();
    expect(screen.getByText(/Switch Organization/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    expect(screen.getByText(/v1.2.0/i)).toBeInTheDocument();
  });

  it("does not have 'open' class when isOpen is false", () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar isOpen={false} onClose={mockOnClose} />
      </MemoryRouter>
    );

    expect(container.querySelector(".sidebar")?.className).not.toContain(
      "open"
    );
  });

  it("calls onClose when close button is clicked", () => {
    render(
      <MemoryRouter>
        <Sidebar isOpen={true} onClose={mockOnClose} />
      </MemoryRouter>
    );

    const closeBtn = screen.getByRole("button");
    fireEvent.click(closeBtn);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("navigates to correct route when menu item is clicked", () => {
    render(
      <MemoryRouter>
        <Sidebar isOpen={true} onClose={mockOnClose} />
      </MemoryRouter>
    );

    const dashboardItem = screen.getByText("Dashboard");
    fireEvent.click(dashboardItem);
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");

    const usersItem = screen.getByText("Users");
    fireEvent.click(usersItem);
    expect(mockNavigate).toHaveBeenCalledWith("/users");
  });

  it("highlights active menu item", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/users"]}>
        <Sidebar isOpen={true} onClose={mockOnClose} />
      </MemoryRouter>
    );

    const usersMenuItem = container.querySelector(".menu-item.active");
    expect(usersMenuItem?.textContent).toMatch(/Users/i);
  });
});
