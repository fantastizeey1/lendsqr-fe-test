import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../Dashboard";
import * as useUsersHook from "../../../hooks/useUsers";

// Mock the navigate function
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock useUsers hook
vi.mock("../../../hooks/useUsers");

describe("Dashboard", () => {
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

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state", () => {
    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: [],
      loading: true,
      error: null,
      refreshUsers: vi.fn(),
    });

    render(<Dashboard />, { wrapper: MemoryRouter });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: [],
      loading: false,
      error: "Failed to fetch",
      refreshUsers: vi.fn(),
    });

    render(<Dashboard />, { wrapper: MemoryRouter });
    expect(screen.getByText(/error loading users/i)).toBeInTheDocument();
  });

  it("renders dashboard stats and user table", () => {
    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
      refreshUsers: vi.fn(),
    });

    render(<Dashboard />, { wrapper: MemoryRouter });

    expect(screen.getAllByText(/USERS/i).length).toBeGreaterThan(0);
    expect(screen.getByText("2")).toBeInTheDocument(); // Total users
    expect(screen.getByText("JohnDoe")).toBeInTheDocument();
    expect(screen.getByText("JaneSmith")).toBeInTheDocument();
  });

  it("navigates when a user is clicked", async () => {
    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
      refreshUsers: vi.fn(),
    });

    render(<Dashboard />, { wrapper: MemoryRouter });

    const userRow = screen.getByText("JohnDoe");
    fireEvent.click(userRow);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/users/1");
    });
  });

  it("paginates through user data", async () => {
    const users = Array.from({ length: 25 }, (_, i) => ({
      id: String(i + 1),
      userName: `User${i + 1}`,
      orgName: "TestOrg",
      email: `user${i + 1}@test.com`,
      phoneNumber: `12345678${i}`,
      dateJoined: "2023-01-01T00:00:00Z",
      status: "Active" as const,
      profile: {
        firstName: `First${i + 1}`,
        lastName: `Last${i + 1}`,
        phoneNumber: `12345678${i}`,
        avatar: "",
        gender: "Other",
        bvn: "00000000000",
        address: "Some Address",
        currency: "NGN",
      },
      guarantor: {
        firstName: `GuarantorFirst${i + 1}`,
        lastName: `GuarantorLast${i + 1}`,
        phoneNumber: `87654321${i}`,
        gender: "Other",
        address: "Guarantor Address",
      },
      accountBalance: "1000",
      accountNumber: `00000000${i + 1}`,
      createdAt: "2023-01-01T00:00:00Z",
      lastActiveDate: "2023-01-02T00:00:00Z",
      socials: {
        facebook: `user${i + 1}.fb`,
        instagram: `user${i + 1}.ig`,
        twitter: `user${i + 1}.tw`,
      },
      education: {
        level: "B.Sc",
        employmentStatus: "Employed",
        sector: "Tech",
        duration: "1 year",
        officeEmail: `user${i + 1}@office.com`,
        monthlyIncome: ["1000", "2000"],
        loanRepayment: "100",
      },
    }));

    vi.spyOn(useUsersHook, "useUsers").mockReturnValue({
      users,
      loading: false,
      error: null,
      refreshUsers: vi.fn(),
    });

    render(<Dashboard />, { wrapper: MemoryRouter });

    expect(screen.getByText("User1")).toBeInTheDocument();
    expect(screen.queryByText("User11")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /next page/i }));

    await waitFor(() => {
      expect(screen.getByText("User11")).toBeInTheDocument();
    });
  });
});
