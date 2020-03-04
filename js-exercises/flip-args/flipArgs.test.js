// write your own test cases
import { flipArgs } from "./flipArgs";

describe("flipArgs", () => {
  it("should return a function", () => {
    expect(typeof flipArgs()).toBe("function");
  });
  it("should reverse and change to uppercase", () => {
    const flipAndUpperCase = flipArgs(function() {
      return Array.from(arguments).map(m => m.toUpperCase());
    });
    expect(flipAndUpperCase("a", "b", "c", "d")).toMatchObject(["D", "C", "B", "A"]);
  });
});
