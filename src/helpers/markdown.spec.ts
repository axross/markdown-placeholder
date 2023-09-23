import { describe, expect, it } from "vitest";
import { createRand, randParagraph } from "./markdown";

describe("randParagraph()", () => {
  it("returns a paragraph node with random string value", () => {
    const rand = createRand();

    expect(randParagraph({ rand })).toMatchSnapshot();
  });

  it("continuously returns paragraph nodes with random string value when you call it more than once", () => {
    const rand = createRand();

    expect(randParagraph({ rand })).toMatchSnapshot();
    expect(randParagraph({ rand })).toMatchSnapshot();
    expect(randParagraph({ rand })).toMatchSnapshot();
  });
});
