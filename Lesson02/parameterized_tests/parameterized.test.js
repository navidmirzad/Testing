import { describe, it, test, expect, beforeEach } from "vitest";
import { Calculator } from "./parameterized.js";

describe("Calculator Class Tests", () => {
  let calculator;

  // Setup before each test
  beforeEach(() => {
    calculator = new Calculator();
  });

  // APPROACH 1: Using it.each() for parameterized tests (DRY - Don't Repeat Yourself)
  describe("Addition - Using it.each() parameterized approach", () => {
    it.each([
      // [input1, input2, expected]
      [1, 2, 3],
      [0, 0, 0],
      [-1, 1, 0],
      [10, -5, 5],
      [100, 200, 300],
      [-10, -20, -30],
    ])("should return %i when adding %i and %i", (a, b, expected) => {
      // Arrange & Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(expected);
    });
  });

  // APPROACH 2: Using individual test() cases (more verbose but explicit)
  describe("Addition - Using individual test() cases", () => {
    test("should add positive numbers correctly", () => {
      // Arrange
      const a = 5;
      const b = 3;
      const expected = 8;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(expected);
    });

    test("should add negative numbers correctly", () => {
      // Arrange
      const a = -5;
      const b = -3;
      const expected = -8;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(expected);
    });

    test("should handle zero correctly", () => {
      // Arrange
      const a = 0;
      const b = 5;
      const expected = 5;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(expected);
    });
  });

  // Parameterized tests for other operations
  describe("Subtraction - Parameterized", () => {
    it.each([
      [10, 5, 5],
      [0, 0, 0],
      [5, 10, -5],
      [-5, -3, -2],
      [100, 50, 50],
    ])("should return %i when subtracting %i from %i", (a, b, expected) => {
      const result = calculator.subtract(a, b);
      expect(result).toBe(expected);
    });
  });

  describe("Multiplication - Parameterized", () => {
    it.each([
      [2, 3, 6],
      [0, 5, 0],
      [-2, 3, -6],
      [-2, -3, 6],
      [10, 10, 100],
    ])("should return %i when multiplying %i and %i", (a, b, expected) => {
      const result = calculator.multiply(a, b);
      expect(result).toBe(expected);
    });
  });

  describe("Division - Parameterized", () => {
    it.each([
      [6, 2, 3],
      [10, 5, 2],
      [-6, 2, -3],
      [0, 5, 0],
      [7, 2, 3.5],
    ])("should return %i when dividing %i by %i", (a, b, expected) => {
      const result = calculator.divide(a, b);
      expect(result).toBe(expected);
    });

    test("should throw error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow(
        "Division by zero is not allowed"
      );
    });
  });

  describe("isEven - Parameterized", () => {
    it.each([
      [2, true],
      [4, true],
      [0, true],
      [1, false],
      [3, false],
      [7, false],
      [-2, true],
      [-3, false],
    ])("should return %s when checking if %i is even", (num, expected) => {
      const result = calculator.isEven(num);
      expect(result).toBe(expected);
    });
  });

  describe("Grade calculation - Parameterized", () => {
    it.each([
      [95, "A"],
      [90, "A"],
      [85, "B"],
      [80, "B"],
      [75, "C"],
      [70, "C"],
      [65, "D"],
      [60, "D"],
      [55, "F"],
      [0, "F"],
    ])('should return grade "%s" for score %i', (score, expectedGrade) => {
      const result = calculator.getGrade(score);
      expect(result).toBe(expectedGrade);
    });

    // Individual test for error case
    test("should throw error for invalid scores", () => {
      expect(() => calculator.getGrade(-1)).toThrow(
        "Score must be between 0 and 100"
      );
      expect(() => calculator.getGrade(101)).toThrow(
        "Score must be between 0 and 100"
      );
    });
  });

  describe("Power calculation - Parameterized", () => {
    it.each([
      [2, 3, 8],
      [5, 2, 25],
      [10, 0, 1],
      [3, 1, 3],
      [2, -2, 0.25],
    ])(
      "should return %i when calculating %i to the power of %i",
      (base, exponent, expected) => {
        const result = calculator.power(base, exponent);
        expect(result).toBe(expected);
      }
    );
  });

  // Complex parameterized test with objects
  describe("Multiple operations combined - Object-based parameterization", () => {
    it.each([
      {
        description: "positive numbers operations",
        a: 6,
        b: 2,
        expectedAdd: 8,
        expectedSubtract: 4,
        expectedMultiply: 12,
        expectedDivide: 3,
      },
      {
        description: "negative and positive mix",
        a: -10,
        b: 5,
        expectedAdd: -5,
        expectedSubtract: -15,
        expectedMultiply: -50,
        expectedDivide: -2,
      },
      {
        description: "zero operations",
        a: 0,
        b: 7,
        expectedAdd: 7,
        expectedSubtract: -7,
        expectedMultiply: 0,
        expectedDivide: 0,
      },
    ])(
      "should handle $description correctly",
      ({
        a,
        b,
        expectedAdd,
        expectedSubtract,
        expectedMultiply,
        expectedDivide,
      }) => {
        expect(calculator.add(a, b)).toBe(expectedAdd);
        expect(calculator.subtract(a, b)).toBe(expectedSubtract);
        expect(calculator.multiply(a, b)).toBe(expectedMultiply);
        expect(calculator.divide(a, b)).toBe(expectedDivide);
      }
    );
  });
});
