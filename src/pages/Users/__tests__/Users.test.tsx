import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, beforeEach, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Users from "../Users";
import * as useUsersHook from "../../../hooks/useUsers";
import "@testing-library/jest-dom";

// Mock components
vi.mock("../../../components/statCard/StatCard", () => ({
  default: ({ title, value }: { title: string; value: string }) => (
    <div data-testid="stat-card">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  ),
}));

vi.mock("../../../components/Loading/Loading", () => ({
  default: () => <div>Loading...</div>,
}));

vi.mock("../../../components/UserNotFound/UserNotFound", () => ({
  default: () => <div>No users found</div>,
}));

vi.mock("../../../components/table/Table", () => ({
  default: () => <div data-testid="users-table">Mocked Table</div>,
}));

// Helper for rendering with router
const renderWithRouter = (ui: React.ReactNode) =>
  render(<BrowserRouter>{ui}</BrowserRouter>);

const mockUsers = [
  {
    id: "1",
    orgName: "TestOrg",
    userName: "JohnDoe",
    email: "john@example.com",
    phoneNumber: "08012345678",
    dateJoined: "2023-01-01T00:00:00.000Z",
    status: "Active" as const,
    profile: {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "08012345678",
      avatar: "",
      gender: "Male",
      bvn: "12345678901",
      address: "123 Main St",
      currency: "NGN",
    },
    guarantor: {
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "08098765432",
      gender: "Female",
      address: "456 Side St",
    },
    accountBalance: "10000",
    accountNumber: "1234567890",
    createdAt: "2023-01-01T00:00:00.000Z",
    lastActiveDate: "2023-01-02T00:00:00.000Z",
    socials: {
      facebook: "john.doe",
      instagram: "john.doe",
      twitter: "john_doe",
    },
    education: {
      level: "B.Sc",
      employmentStatus: "Employed",
      sector: "Technology",
      duration: "2 years",
      officeEmail: "john.doe@company.com",
      monthlyIncome: ["5000", "10000"],
      loanRepayment: "1000",
    },
  },
  {
    id: "2",
    orgName: "AnotherOrg",
    userName: "JaneSmith",
    email: "jane@example.com",
    phoneNumber: "08087654321",
    dateJoined: "2023-02-01T00:00:00.000Z",
    status: "Inactive" as const,
    profile: {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "08087654321",
      avatar: "",
      gender: "Female",
      bvn: "10987654321",
      address: "789 Other St",
      currency: "NGN",
    },
    guarantor: {
      firstName: "John",
      lastName: "Smith",
      phoneNumber: "08011223344",
      gender: "Male",
      address: "321 Back St",
    },
    accountBalance: "5000",
    accountNumber: "0987654321",
    createdAt: "2023-02-01T00:00:00.000Z",
    lastActiveDate: "2023-02-02T00:00:00.000Z",
    socials: {
      facebook: "jane.smith",
      instagram: "jane.smith",
      twitter: "jane_smith",
    },
    education: {
      level: "M.Sc",
      employmentStatus: "Self-Employed",
      sector: "Finance",
      duration: "5 years",
      officeEmail: "jane.smith@business.com",
      monthlyIncome: ["7000", "12000"],
      loanRepayment: "1500",
    },
  },
];

describe("Users Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows loading state", () => {
    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: [],
      loading: true,
      error: null,
      refreshUsers: vi.fn(),
    });

    renderWithRouter(<Users />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("shows error state", () => {
    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: [],
      loading: false,
      error: "Failed to fetch users",
      refreshUsers: vi.fn(),
    });

    renderWithRouter(<Users />);
    expect(screen.getByText(/error loading users/i)).toBeInTheDocument();
  });

  it("shows no users found", () => {
    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: [],
      loading: false,
      error: null,
      refreshUsers: vi.fn(),
    });

    renderWithRouter(<Users />);
    expect(screen.getByText(/no users found/i)).toBeInTheDocument();
  });

  it("renders users table and stat cards when users are available", () => {
    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
      refreshUsers: vi.fn(),
    });

    renderWithRouter(<Users />);

    expect(screen.getAllByText(/users/i).length).toBeGreaterThanOrEqual(1);

    expect(screen.getAllByTestId("stat-card").length).toBeGreaterThanOrEqual(4);
    expect(screen.getByTestId("users-table")).toBeInTheDocument();
  });

  it("handles pagination controls", () => {
    const manyUsers = Array.from({ length: 25 }, (_, i) => ({
      ...mockUsers[0],
      id: `${i}`,
      userName: `User${i}`,
      status: "Active" as const,
    }));

    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: manyUsers,
      loading: false,
      error: null,
      refreshUsers: vi.fn(),
    });

    renderWithRouter(<Users />);
    const nextButton = screen.getByRole("button", { name: /next page/i });

    fireEvent.click(nextButton);
    expect(screen.getByText(/page 2 of/i)).toBeInTheDocument();

    const prevButton = screen.getByRole("button", { name: /previous page/i });
    fireEvent.click(prevButton);
    expect(screen.getByText(/page 1 of/i)).toBeInTheDocument();
  });
});
