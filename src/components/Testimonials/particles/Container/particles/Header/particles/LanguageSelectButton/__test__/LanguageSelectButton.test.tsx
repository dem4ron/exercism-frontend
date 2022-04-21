import {vi} from 'vitest';
import { render, fireEvent } from "@testing-library/react";
import { LanguageSelectButton } from "../index";

const testFn = vi.fn(()=>console.log('cb is called'))
describe("LanguageSelectButton", () => {
  it("should render the langSelectButton", () => {
    const { getByLabelText } = render(
      <LanguageSelectButton isOpen={true} toggleIsOpen={testFn} />
    );
    expect(getByLabelText("lang-select-button")).toBeInTheDocument();
  });

  it("call cb", () => {
    const { getByLabelText } = render(
      <LanguageSelectButton isOpen={true} toggleIsOpen={testFn} />
    );
    fireEvent.click(getByLabelText("lang-select-button"));
    expect(testFn).toHaveBeenCalled();
  });
});
