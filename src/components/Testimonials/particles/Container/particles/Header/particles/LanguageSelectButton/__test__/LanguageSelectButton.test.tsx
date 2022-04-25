import { vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { LanguageSelectButton } from "../index";

const testFn = vi.fn(() => console.log("cb is called"));
describe("LanguageSelectButton", () => {
  it("should render the langSelectButton", () => {
    const { getByLabelText } = render(
      <LanguageSelectButton
        onBlur={testFn}
        isOpen={true}
        toggleIsOpen={testFn}
      />
    );
    expect(getByLabelText("filter by language")).toBeInTheDocument();
  });

  it("call cb", () => {
    const { getByLabelText } = render(
      <LanguageSelectButton
        onBlur={testFn}
        isOpen={true}
        toggleIsOpen={testFn}
      />
    );
    fireEvent.click(getByLabelText("filter by language"));
    expect(testFn).toHaveBeenCalled();
  });
});
