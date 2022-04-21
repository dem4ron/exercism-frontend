import { render } from "@testing-library/react";


//@ts-ignore
const customRender = (ui, options = {}) =>

  render(ui, {

    wrapper: ({ children }) => children,

    ...options,

  });


export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };