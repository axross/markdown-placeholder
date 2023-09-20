import { describe, expect, it } from "vitest";
import { createRand, randStrongEmphasis, randText } from "./markdown";

describe("randText()", () => {
  it("returns a text node with random string value", () => {
    const rand = createRand();

    expect(randText({ rand })).toMatchInlineSnapshot(`
      {
        "type": "text",
        "value": "nulla aliqua magna sint aliqua amet dolore veniam",
      }
    `);
  });

  it("continuously returns text nodes with random string value when you call it more than once", () => {
    const rand = createRand();

    expect(randText({ rand })).toMatchInlineSnapshot(`
      {
        "type": "text",
        "value": "nulla aliqua magna sint aliqua amet dolore veniam",
      }
    `);
    expect(randText({ rand })).toMatchInlineSnapshot(`
      {
        "type": "text",
        "value": "ex veniam ipsum",
      }
    `);
    expect(randText({ rand })).toMatchInlineSnapshot(`
      {
        "type": "text",
        "value": "excepteur consectetur labore",
      }
    `);
  });
});

describe("randStrongEmphasis()", () => {
  it("returns a text node with random string value", () => {
    const rand = createRand();

    expect(randStrongEmphasis({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "dolore veniam",
          },
        ],
        "type": "strong",
      }
    `);
  });

  it("continuously returns text nodes with random string value when you call it more than once", () => {
    const rand = createRand();

    expect(randStrongEmphasis({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "dolore veniam",
          },
        ],
        "type": "strong",
      }
    `);
    expect(randStrongEmphasis({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "ullamco",
          },
        ],
        "type": "strong",
      }
    `);
    expect(randStrongEmphasis({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "sint",
          },
        ],
        "type": "strong",
      }
    `);
  });
});
