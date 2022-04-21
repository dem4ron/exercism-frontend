import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "../index";

describe("SearchInput", () => {
  it("should render SearchInput", () => {
    render(<SearchInput />);
    const inputElement = screen.getByLabelText("search-input");
    expect(inputElement).toBeInTheDocument();
  });

  it("should change its value on input", () => {
    render(<SearchInput />);
    const inputElement = screen.getByLabelText("search-input");
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "ming" } });
    //@ts-ignore
    expect(inputElement.value).toBe("ming");
  });
});
