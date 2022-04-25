import { vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { PaginationButton } from "../index";

const testFn = vi.fn(() => console.log("cb is called"));
describe("PaginationButton", () => {
  it("should render the PaginationButton", () => {
    const { getByLabelText } = render(<PaginationButton onClick={testFn} />);

    expect(getByLabelText("pagination-button")).toBeInTheDocument();
  });

  it("should call cb", () => {
    const { getByLabelText } = render(<PaginationButton onClick={testFn} />);
    fireEvent.click(getByLabelText("pagination-button"));
    expect(testFn).toHaveBeenCalled();
  });
});
