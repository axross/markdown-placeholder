import { loremIpsum } from "lorem-ipsum";
import { Emphasis, Paragraph, PhrasingContent, Strong, Text } from "mdast";
import prand from "pure-rand";

// eslint-disable-next-line no-unused-vars
type Rand = (min: number, max: number) => number;

const defaultSeed = 256;

function createRand({ seed }: { seed?: number } = {}): Rand {
  let rng = prand.xoroshiro128plus(seed ?? defaultSeed);

  function rand(min: number, max: number) {
    const [value, nextRng] = prand.uniformIntDistribution(min, max, rng);

    rng = nextRng;

    return value;
  }

  return rand;
}

const textDefaultMinWords = 1;
const textDefaultMaxWords = 8;
const floatRandGranularity = 4294967296;

function randText({
  value,
  minWords = textDefaultMinWords,
  maxWords = textDefaultMaxWords,
  rand,
}: {
  value?: string;
  minWords?: number;
  maxWords?: number;
  rand: Rand;
}): Text {
  const resolvedValue =
    value ??
    loremIpsum({
      count: rand(minWords, maxWords),
      units: "words",
      suffix: "",
      // eslint-disable-next-line no-magic-numbers
      random: () => rand(0, floatRandGranularity) / floatRandGranularity,
    });

  return {
    type: "text",
    value: resolvedValue.toLowerCase(),
  };
}

function randEmphasis({
  children,
  rand,
}: {
  children?: PhrasingContent[];
  rand: Rand;
}): Emphasis {
  return {
    type: "emphasis",
    children: children ?? [
      randText({
        minWords: textDefaultMinWords,
        maxWords: Math.min(
          rand(textDefaultMinWords, textDefaultMaxWords),
          rand(textDefaultMinWords, textDefaultMaxWords),
        ),
        rand,
      }),
    ],
  };
}

function randStrongEmphasis({
  children,
  rand,
}: {
  children?: PhrasingContent[];
  rand: Rand;
}): Strong {
  return {
    type: "strong",
    children: children ?? [
      randText({
        minWords: textDefaultMinWords,
        maxWords: Math.min(
          rand(textDefaultMinWords, textDefaultMaxWords),
          rand(textDefaultMinWords, textDefaultMaxWords),
        ),
        rand,
      }),
    ],
  };
}

const paragraphDefaultMinChildLength = 1;
const paragraphDefaultMaxChildLength = 32;
const paragraphChildrenFunctions = [
  randText,
  randText,
  randText,
  randText,
  randEmphasis,
  randStrongEmphasis,
];

function randParagraph({
  children,
  childLength,
  rand,
}: {
  children?: PhrasingContent[];
  childLength?: number;
  rand: Rand;
}): Paragraph {
  const resolvedChildren =
    children ??
    Array.from(
      {
        length:
          childLength ??
          rand(paragraphDefaultMinChildLength, paragraphDefaultMaxChildLength),
      },
      () =>
        paragraphChildrenFunctions[
          rand(0, paragraphChildrenFunctions.length - 1)
        ]({ rand }),
    );

  return {
    type: "paragraph",
    children: resolvedChildren,
  };
}

export {
  createRand,
  randEmphasis,
  randParagraph,
  randStrongEmphasis,
  randText,
};
