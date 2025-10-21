class Numeral {
  RomanToDecimalNumerals(romanNumeral) {
    // Validate input
    if (!romanNumeral || typeof romanNumeral !== "string") {
      throw new Error(
        "Invalid input: Roman numeral must be a non-empty string"
      );
    }

    const roman = romanNumeral.toUpperCase().trim();

    // Validate Roman numeral format
    if (!this.isValidRomanNumeral(roman)) {
      throw new Error("Invalid Roman numeral format");
    }

    // Map of Roman numerals to their decimal values
    const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;
    let i = 0;

    while (i < roman.length) {
      const current = romanMap[roman[i]];
      const next = romanMap[roman[i + 1]];

      // Handle subtractive cases (IV, IX, XL, XC, CD, CM)
      if (current < next) {
        // Validate subtractive combinations
        if (!this.isValidSubtractiveCase(roman[i], roman[i + 1])) {
          throw new Error(
            `Invalid subtractive combination: ${roman[i]}${roman[i + 1]}`
          );
        }
        result += next - current;
        i += 2; // Skip both characters
      } else {
        result += current;
        i += 1;
      }
    }

    // Check if result exceeds maximum value (3999)
    if (result > 3999) {
      throw new Error("Roman numeral exceeds maximum value of 3999");
    }

    return result;
  }

  isValidRomanNumeral(roman) {
    // Check for valid characters only
    if (!/^[IVXLCDM]+$/.test(roman)) {
      return false;
    }

    // Check repetition rules:
    // I, X, C, M can be repeated up to 3 times consecutively
    if (/IIII|XXXX|CCCC|MMMM/.test(roman)) {
      return false;
    }

    // V, L, D cannot be repeated
    if (/VV|LL|DD/.test(roman)) {
      return false;
    }

    // Check for invalid subtractive patterns
    // Only I, X, C can be used as subtractive numerals
    if (/VX|VL|VC|VD|VM|LC|LD|LM|DM/.test(roman)) {
      return false;
    }

    // Check for invalid multiple subtractions
    if (/IIV|IIX|XXL|XXC|CCD|CCM/.test(roman)) {
      return false;
    }

    return true;
  }

  isValidSubtractiveCase(first, second) {
    const validCombinations = {
      I: ["V", "X"], // IV = 4, IX = 9
      X: ["L", "C"], // XL = 40, XC = 90
      C: ["D", "M"], // CD = 400, CM = 900
    };

    return (
      validCombinations[first] && validCombinations[first].includes(second)
    );
  }
}

export default Numeral;
