import { render, screen } from "@testing-library/react";
import { describe, it, vi, beforeEach, afterEach, expect } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import UserDetailsPage from "../UserDetails";

// Mock sub-components
vi.mock("../../../components/Loading/Loading", () => ({
  default: function Loading() {
    return <div>Loading...</div>;
  },
}));

vi.mock("../../../components/UserNotFound/UserNotFound", () => ({
  default: () => <div>User not found</div>,
}));

const mockUser = {
  id: "1",
  orgName: "TestOrg",
  userName: "JohnDoe",
  email: "john@example.com",
  phoneNumber: "08012345678",
  dateJoined: "2023-01-01T00:00:00.000Z",
  status: "Active",
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
  accountBalance: "₦10,000",
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
};

describe("UserDetailsPage", () => {
  beforeEach(() => {
    localStorage.setItem("users", JSON.stringify([mockUser]));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("shows 'User not found' if ID is missing", async () => {
    render(
      <MemoryRouter initialEntries={["/users/9999"]}>
        <Routes>
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText(/user not found/i)).toBeInTheDocument();
  });

  it("shows 'User not found' if ID does not match any user", () => {
    render(
      <MemoryRouter initialEntries={["/users/999"]}>
        <Routes>
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/user not found/i)).toBeInTheDocument();
  });

  it("renders user details when ID matches", () => {
    render(
      <MemoryRouter initialEntries={["/users/1"]}>
        <Routes>
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/user details/i)).toBeInTheDocument();
    expect(screen.getAllByText(/john doe/i).length).toBeGreaterThan(0); // Name
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument(); // Email
    expect(screen.getByText(/employed/i)).toBeInTheDocument(); // Employment status
    expect(screen.getByText(/technology/i)).toBeInTheDocument(); // Sector
    expect(screen.getByText(/john_doe/i)).toBeInTheDocument(); // Twitter
    expect(screen.getByText(/jane doe/i)).toBeInTheDocument(); // Guarantor name
  });
});
