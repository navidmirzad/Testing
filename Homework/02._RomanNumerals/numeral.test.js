import Numeral from "./numeral";
import { describe, test, expect } from "vitest";

const numeral = new Numeral();

describe("Testing my RomanNumeralsToDecimals function", () => {
  test("Testing positive outcome #1", () => {
    // arrange
    const twoThousand = 2000;

    // act
    const mm = numeral.RomanToDecimalNumerals("MM");

    // assert
    expect(mm).toBe(twoThousand);
  });

  test("Testing positive outcome #2", () => {
    // arrange
    const eighteenSixtySeven = 1867;

    // act
    const MDCCCLXVII = numeral.RomanToDecimalNumerals("MDCCCLXVII");

    // assert
    expect(MDCCCLXVII).toBe(eighteenSixtySeven);
  });

  test("When a value precedes a larger one, it should subtract", () => {
    // arrange
    const ninetyFour = 94;

    // act
    const XCIV = numeral.RomanToDecimalNumerals("XCIV");

    // assert
    expect(XCIV).toBe(ninetyFour);
  });
  test("I, X, C, M can be repeated up to 3 times consecutively", () => {
    // arrange - testing valid repetitions
    const three = 3;
    const thirty = 30;
    const threeHundred = 300;
    const threeThousand = 3000;

    // act - valid repetitions (up to 3 times)
    const III = numeral.RomanToDecimalNumerals("III");
    const XXX = numeral.RomanToDecimalNumerals("XXX");
    const CCC = numeral.RomanToDecimalNumerals("CCC");
    const MMM = numeral.RomanToDecimalNumerals("MMM");

    // assert - valid repetitions should work
    expect(III).toBe(three);
    expect(XXX).toBe(thirty);
    expect(CCC).toBe(threeHundred);
    expect(MMM).toBe(threeThousand);
  });

  test("Invalid repetitions should throw errors", () => {
    // Testing invalid repetitions (more than 3 times)
    expect(() => numeral.RomanToDecimalNumerals("IIII")).toThrow();
    expect(() => numeral.RomanToDecimalNumerals("XXXX")).toThrow();
    expect(() => numeral.RomanToDecimalNumerals("CCCC")).toThrow();
    expect(() => numeral.RomanToDecimalNumerals("MMMM")).toThrow();
  });
});
