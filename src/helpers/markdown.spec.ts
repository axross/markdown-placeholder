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

describe("randEmphasis()", () => {
  it("returns a text node with random string value", () => {
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

  it("continuously returns text nodes with random string value when you call it more than once", () => {
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

describe("randParagraph()", () => {
  it("returns a text node with random string value", () => {
    const rand = createRand();

    expect(randParagraph({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "dolore veniam",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "magna sint aliqua",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "aliqua",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "excepteur consectetur labore dolor id ullamco nostrud in",
          },
          {
            "type": "text",
            "value": "aute dolore consectetur anim occaecat commodo minim",
          },
          {
            "type": "text",
            "value": "sunt lorem ullamco lorem proident",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "sunt",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "lorem",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "laborum",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "non reprehenderit eu do",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "pariatur excepteur eiusmod ipsum laborum aliqua dolor dolor",
          },
          {
            "type": "text",
            "value": "non reprehenderit eiusmod ex",
          },
          {
            "type": "text",
            "value": "proident est ut sint",
          },
          {
            "type": "text",
            "value": "labore pariatur",
          },
          {
            "type": "text",
            "value": "eiusmod sint ipsum voluptate veniam",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "incididunt",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "officia id duis non laboris nulla",
          },
          {
            "type": "text",
            "value": "fugiat consectetur exercitation lorem voluptate",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "commodo consequat",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "laboris in est ipsum",
          },
          {
            "type": "text",
            "value": "quis irure sint",
          },
          {
            "type": "text",
            "value": "eu adipisicing elit commodo",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "et",
              },
            ],
            "type": "emphasis",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "lorem labore ex",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "incididunt sunt mollit eu excepteur",
          },
          {
            "type": "text",
            "value": "sit",
          },
          {
            "type": "text",
            "value": "et dolor ipsum sit laborum elit",
          },
          {
            "type": "text",
            "value": "occaecat id fugiat deserunt duis sunt aliqua incididunt",
          },
          {
            "type": "text",
            "value": "ut tempor est est ex id",
          },
          {
            "type": "text",
            "value": "esse dolore id anim esse incididunt eu",
          },
          {
            "type": "text",
            "value": "ex velit enim reprehenderit amet magna occaecat laboris",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "non",
              },
            ],
            "type": "strong",
          },
        ],
        "type": "paragraph",
      }
    `);
  });

  it("continuously returns text nodes with random string value when you call it more than once", () => {
    const rand = createRand();

    expect(randParagraph({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "type": "text",
            "value": "dolore veniam",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "magna sint aliqua",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "aliqua",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "excepteur consectetur labore dolor id ullamco nostrud in",
          },
          {
            "type": "text",
            "value": "aute dolore consectetur anim occaecat commodo minim",
          },
          {
            "type": "text",
            "value": "sunt lorem ullamco lorem proident",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "sunt",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "lorem",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "laborum",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "non reprehenderit eu do",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "pariatur excepteur eiusmod ipsum laborum aliqua dolor dolor",
          },
          {
            "type": "text",
            "value": "non reprehenderit eiusmod ex",
          },
          {
            "type": "text",
            "value": "proident est ut sint",
          },
          {
            "type": "text",
            "value": "labore pariatur",
          },
          {
            "type": "text",
            "value": "eiusmod sint ipsum voluptate veniam",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "incididunt",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "officia id duis non laboris nulla",
          },
          {
            "type": "text",
            "value": "fugiat consectetur exercitation lorem voluptate",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "commodo consequat",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "laboris in est ipsum",
          },
          {
            "type": "text",
            "value": "quis irure sint",
          },
          {
            "type": "text",
            "value": "eu adipisicing elit commodo",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "et",
              },
            ],
            "type": "emphasis",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "lorem labore ex",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "incididunt sunt mollit eu excepteur",
          },
          {
            "type": "text",
            "value": "sit",
          },
          {
            "type": "text",
            "value": "et dolor ipsum sit laborum elit",
          },
          {
            "type": "text",
            "value": "occaecat id fugiat deserunt duis sunt aliqua incididunt",
          },
          {
            "type": "text",
            "value": "ut tempor est est ex id",
          },
          {
            "type": "text",
            "value": "esse dolore id anim esse incididunt eu",
          },
          {
            "type": "text",
            "value": "ex velit enim reprehenderit amet magna occaecat laboris",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "non",
              },
            ],
            "type": "strong",
          },
        ],
        "type": "paragraph",
      }
    `);
    expect(randParagraph({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "type": "text",
                "value": "anim commodo",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "duis officia lorem exercitation adipisicing ad pariatur",
          },
          {
            "type": "text",
            "value": "fugiat ea excepteur",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "nulla eiusmod",
              },
            ],
            "type": "emphasis",
          },
          {
            "type": "text",
            "value": "reprehenderit voluptate quis labore duis dolor officia",
          },
          {
            "type": "text",
            "value": "sunt sunt velit lorem mollit sint ad",
          },
        ],
        "type": "paragraph",
      }
    `);
    expect(randParagraph({ rand })).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "type": "text",
                "value": "quis",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "reprehenderit ut",
              },
            ],
            "type": "emphasis",
          },
          {
            "type": "text",
            "value": "nostrud nulla",
          },
          {
            "type": "text",
            "value": "do sit id et aute consectetur dolore",
          },
          {
            "type": "text",
            "value": "esse id anim esse irure dolore labore",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "commodo",
              },
            ],
            "type": "strong",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "proident reprehenderit est exercitation",
              },
            ],
            "type": "emphasis",
          },
          {
            "type": "text",
            "value": "minim ut anim laborum est",
          },
          {
            "type": "text",
            "value": "culpa et sint cupidatat cupidatat ipsum reprehenderit",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "sit",
              },
            ],
            "type": "emphasis",
          },
          {
            "type": "text",
            "value": "quis",
          },
          {
            "type": "text",
            "value": "in dolor aute",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "cillum pariatur",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "aute nostrud adipisicing culpa incididunt",
          },
          {
            "type": "text",
            "value": "officia pariatur pariatur et officia labore",
          },
          {
            "type": "text",
            "value": "aliqua aliqua exercitation velit laboris laboris consequat aute",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "aliquip",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "ea sit do irure",
          },
          {
            "type": "text",
            "value": "occaecat pariatur nulla nulla enim",
          },
          {
            "type": "text",
            "value": "nostrud consectetur",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "amet",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "magna aute do reprehenderit aliqua occaecat",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "velit",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "dolor incididunt deserunt in tempor culpa laborum",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "reprehenderit",
              },
            ],
            "type": "emphasis",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "sint",
              },
            ],
            "type": "emphasis",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "ullamco nulla deserunt",
              },
            ],
            "type": "strong",
          },
          {
            "type": "text",
            "value": "esse cupidatat nulla velit ipsum",
          },
        ],
        "type": "paragraph",
      }
    `);
  });
});
