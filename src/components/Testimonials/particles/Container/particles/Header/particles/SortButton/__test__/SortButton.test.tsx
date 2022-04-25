import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { SortButton } from "../index";

const testFn = vi.fn(() => console.log("cb is called"));
describe("SortButton", () => {
  it("should render the SortButton", () => {
    const { getByLabelText } = render(
      <SortButton
        onBlur={testFn}
        isOpen={true}
        sortObj={{ label: "Newest first", value: "newest_first" }}
        toggleIsOpen={testFn}
      />
    );
    expect(getByLabelText("sort-button")).toBeInTheDocument();
  });

  it("should call cb", () => {
    const { getByLabelText } = render(
      <SortButton
        onBlur={testFn}
        isOpen={true}
        sortObj={{ label: "Newest first", value: "newest_first" }}
        toggleIsOpen={testFn}
      />
    );
    fireEvent.click(getByLabelText("sort-button"));
    expect(testFn).toHaveBeenCalled();
  });
});
