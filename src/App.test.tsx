import { describe, expect, it } from "vitest";
import App from "./App";
import { render } from "../test-utils";
import { generatePageButtons } from "./hooks";

describe("If app works at all", () => {
  it("renders", () => {
     render(<App/>);
     
  });
});


describe("Pagination",()=>{
   it("generates pages properly", ()=>{
     expect(generatePageButtons(1, 100, 1)).toEqual([2, 3]) 
     expect(generatePageButtons(1, 100, 5)).toEqual([3, 4, 5, 6, 7]) 
     expect(generatePageButtons(1, 1, 1)).toEqual([]) 
   })
})

