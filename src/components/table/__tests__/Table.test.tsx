import { describe, it, vi, beforeEach, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import UsersTable from "../Table";
import type { User, FilterState } from "../../../types/index";

const mockUser: User = {
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

describe("UsersTable", () => {
  const onUserClick = vi.fn();
  const resetFilters = vi.fn();
  const setFilters = vi.fn();

  const defaultFilters: FilterState = {
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    date: "",
    status: "",
  };

  beforeEach(() => {
    onUserClick.mockClear();
    resetFilters.mockClear();
    setFilters.mockClear();
  });

  it("renders user data correctly", () => {
    render(
      <UsersTable
        users={[mockUser]}
        onUserClick={onUserClick}
        filters={defaultFilters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        allOrganizations={["TestOrg"]}
      />
    );

    expect(screen.getByText("TestOrg")).toBeInTheDocument();
    expect(screen.getByText("JohnDoe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("08012345678")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("opens and closes filter popover", () => {
    render(
      <UsersTable
        users={[mockUser]}
        onUserClick={onUserClick}
        filters={defaultFilters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        allOrganizations={["TestOrg"]}
      />
    );

    const filterButtons = screen.getAllByRole("button", { name: /filter/i });
    fireEvent.click(filterButtons[0]); // Open filter
    expect(screen.getByText("Organization")).toBeInTheDocument();

    fireEvent.mouseDown(document); // Simulate outside click
    expect(screen.queryByText("Organization")).not.toBeInTheDocument();
  });

  it("updates filters when input is changed", () => {
    render(
      <UsersTable
        users={[mockUser]}
        onUserClick={onUserClick}
        filters={defaultFilters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        allOrganizations={["TestOrg"]}
      />
    );

    const filterButtons = screen.getAllByRole("button", { name: /filter/i });
    fireEvent.click(filterButtons[0]);

    const orgSelect = screen.getByRole("combobox", { name: /organization/i });

    fireEvent.change(orgSelect, { target: { value: "TestOrg" } });

    expect(setFilters).toHaveBeenCalledWith(expect.any(Function));
  });

  it("resets filters when 'Reset' button is clicked", () => {
    render(
      <UsersTable
        users={[mockUser]}
        onUserClick={onUserClick}
        filters={defaultFilters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        allOrganizations={["TestOrg"]}
      />
    );

    fireEvent.click(screen.getAllByRole("button", { name: /filter/i })[0]);
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    expect(resetFilters).toHaveBeenCalled();
  });

  it("opens action popover and calls onUserClick", () => {
    render(
      <UsersTable
        users={[mockUser]}
        onUserClick={onUserClick}
        filters={defaultFilters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        allOrganizations={["TestOrg"]}
      />
    );

    const actionButton = screen.getByText("⋮");
    fireEvent.click(actionButton);
    expect(screen.getByText("View Details")).toBeInTheDocument();

    const viewDetails = screen.getByText("View Details");
    fireEvent.click(viewDetails);

    expect(onUserClick).toHaveBeenCalledWith(mockUser);
  });
});
