import { describe, expect, it } from "vitest";
import {
  createRand,
  randEmphasis,
  randParagraph,
  randStrongEmphasis,
  randText,
} from "./markdown";

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

  it('returns a code span node with string value in snake_case when the given convention was "snake-case"', () => {
    const rand = createRand();

    expect(randCodeSpan({ convention: "snake-case", rand }))
      .toMatchInlineSnapshot(`
      {
        "type": "inlineCode",
        "value": "aliqua_amet_dolore_veniam",
      }
    `);
  });
});

describe("randEmphasis()", () => {
  it("returns a emphasis node with random string value", () => {
    const rand = createRand();

    expect(randEmphasis({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "dolore veniam",
          },
        ],
        "type": "emphasis",
      }
    `);
  });

  it("continuously returns emphasis nodes with random string value when you call it more than once", () => {
    const rand = createRand();

    expect(randEmphasis({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "dolore veniam",
          },
        ],
        "type": "emphasis",
      }
    `);
    expect(randEmphasis({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "ullamco",
          },
        ],
        "type": "emphasis",
      }
    `);
    expect(randEmphasis({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "sint",
          },
        ],
        "type": "emphasis",
      }
    `);
  });
});

describe("randStrongEmphasis()", () => {
  it("returns a strong emphasis node with random string value", () => {
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

  it("continuously returns strong emphasis nodes with random string value when you call it more than once", () => {
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
