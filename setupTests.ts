import "@testing-library/jest-dom";

import { server } from "./src/__mock__/mockSetup";
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
