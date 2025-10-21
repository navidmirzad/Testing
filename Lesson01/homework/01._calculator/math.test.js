import Math from "./math.js";
import { describe, test, expect } from "vitest";

const math = new Math();

describe("Math functions", () => {
  test("Addition of two numbers", () => {
    // Arrange
    const a = 2;
    const b = 4;
    const expectedResult = 6;

    // Act
    const result = math.sumOfTwoNumbers(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });

  test("Subtraction of two numbers", () => {
    // arrange
    const a = 10;
    const b = 6;
    const expectedResult = 4;

    // act
    const result = math.subtraction(a, b);

    // assert
    expect(result).toBe(expectedResult);
  });

  test("multiplication", () => {
    // arrange
    const a = 2;
    const b = 7;
    const expectedResult = 14;

    // act
    const result = math.multiply(a, b);

    // assert
    expect(result).toBe(expectedResult);
  });

  test("divition", () => {
    // arrange
    const a = 10;
    const b = 2;
    const expectedResult = 5;

    // act
    const result = math.division(a, b);

    // assert
    expect(result).toBe(expectedResult);
  });
});
