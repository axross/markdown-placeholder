import { loremIpsum } from "lorem-ipsum";
import { Text } from "mdast";
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

const minWordsInText = 1;
const maxWordsInText = 8;
const floatRandGranularity = 4294967296;

function randText({
  value,
  length,
  rand,
}: {
  value?: string;
  length?: number;
  rand: Rand;
}): Text {
  const resolvedValue =
    value ??
    loremIpsum({
      count: length ?? rand(minWordsInText, maxWordsInText),
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

export { createRand, randText };
