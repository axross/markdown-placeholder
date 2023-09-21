import { loremIpsum } from "lorem-ipsum";
import { Emphasis, PhrasingContent, Strong, Text } from "mdast";
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

const textDefaultMinLength = 1;
const textDefaultMaxLength = 8;
const floatRandGranularity = 4294967296;

function randText({
  value,
  minLength = textDefaultMinLength,
  maxLength = textDefaultMaxLength,
  rand,
}: {
  value?: string;
  minLength?: number;
  maxLength?: number;
  rand: Rand;
}): Text {
  const resolvedValue =
    value ??
    loremIpsum({
      count: rand(minLength, maxLength),
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
        minLength: 1,
        maxLength: Math.min(
          rand(textDefaultMinLength, textDefaultMaxLength),
          rand(textDefaultMinLength, textDefaultMaxLength),
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
        minLength: 1,
        maxLength: Math.min(
          rand(textDefaultMinLength, textDefaultMaxLength),
          rand(textDefaultMinLength, textDefaultMaxLength),
        ),
        rand,
      }),
    ],
  };
}

export { createRand, randEmphasis, randStrongEmphasis, randText };
