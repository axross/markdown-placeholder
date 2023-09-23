import { camelCase, sentenceCase } from "change-case";
import { loremIpsum } from "lorem-ipsum";
import { type Paragraph, type PhrasingContent, type Text } from "mdast";
import prand from "pure-rand";

// eslint-disable-next-line no-unused-vars
type Rand = (min: number, max: number) => number;

const defaultSeed = 256;

function createRand({ seed }: { seed?: number } = {}): Rand {
  let rng = prand.xoroshiro128plus(seed ?? defaultSeed);

  function rand(min: number, max: number): number {
    const [value, nextRng] = prand.uniformIntDistribution(min, max, rng);

    rng = nextRng;

    return value;
  }

  return rand;
}

const floatRandGranularity = 4294967296;

function randSentence({ rand }: { rand: Rand }): string {
  const text = loremIpsum({
    count: 1,
    units: "sentence",
    suffix: "",
    random: () => rand(0, floatRandGranularity) / floatRandGranularity,
  });

  return `${sentenceCase(text)}.`;
}

const wrapperDefaultMaxLength = 3;

function wrapPartOfTextNodeWith(
  {
    text,
    start,
    end,
    rand,
  }: {
    text: Text;
    start?: number;
    end?: number;
    rand: Rand;
  },
  wrapper: (text: Text) => PhrasingContent,
): PhrasingContent[] {
  const words = text.value.split(" ");
  const resolvedStart = start ?? rand(0, words.length - 1);
  const resolvedEnd =
    end ??
    Math.min(resolvedStart + rand(1, wrapperDefaultMaxLength), words.length);
  const wordsBefore = words.slice(0, resolvedStart);
  const wordsToWrap = words.slice(resolvedStart, resolvedEnd);
  const wordsAfter = words.slice(resolvedEnd);
  const contents: PhrasingContent[] = [];

  if (wordsBefore.length > 0) {
    contents.push({
      type: "text",
      value: `${wordsBefore.join(" ")} `,
    });
  }

  contents.push(
    wrapper({
      type: "text",
      value: wordsToWrap.join(" "),
    }),
  );

  if (wordsAfter.length > 0) {
    contents.push({
      type: "text",
      value: ` ${wordsAfter.join(" ")}`,
    });
  }

  return contents;
}

const paragraphDefaultMinSentences = 1;
const paragraphDefaultMaxSentences = 8;
const paragraphChildOptionLength = 5;

function randParagraph({
  sentences,
  rand,
}: {
  sentences?: number;
  rand: Rand;
}): Paragraph {
  const resolvedSentences =
    sentences ??
    rand(paragraphDefaultMinSentences, paragraphDefaultMaxSentences);
  const contents: PhrasingContent[] = [];

  for (let index = 0; index < resolvedSentences; index += 1) {
    const sentence = randSentence({ rand });
    const text: Text = { type: "text", value: sentence };
    const chosen = rand(0, paragraphChildOptionLength);

    switch (chosen) {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      case 1: {
        contents.push(
          ...wrapPartOfTextNodeWith({ text, rand }, (node) => ({
            type: "strong",
            children: [node],
          })),
        );

        break;
      }
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      case 2: {
        contents.push(
          ...wrapPartOfTextNodeWith({ text, rand }, (node) => ({
            type: "emphasis",
            children: [node],
          })),
        );

        break;
      }
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      case 3: {
        contents.push(
          ...wrapPartOfTextNodeWith({ text, rand }, (node) => ({
            type: "inlineCode",
            value: camelCase(node.value),
          })),
        );

        break;
      }
      default: {
        contents.push(text);
      }
    }
  }

  return {
    type: "paragraph",
    children: contents,
  };
}

export { createRand, randParagraph };
