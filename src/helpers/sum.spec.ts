import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("sum()", () => {
  it("returns the sum of the given two values", () => {
    // eslint-disable-next-line no-magic-numbers
    expect(sum(2, 5)).toBe(7);
  });

  it("matches with the result snapshot", () => {
    // eslint-disable-next-line no-magic-numbers
    expect(sum(3, 8)).toMatchSnapshot();
  });
});
