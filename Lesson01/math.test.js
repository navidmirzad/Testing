import { add, minus, multiply, divide } from "./math.js";
import { describe, test, expect } from "vitest";

describe("Math functions", () => {
  test("add() returns the sum of two numbers", () => {
    // arrange
    const a = 5;
    const b = 3;

    // act
    const result = add(a, b);

    // assert
    expect(result).toBe(8);
  });

  test("minus() returns the difference between two numbers", () => {
    // arrange
    const a = 4;
    const b = 3;

    // act
    const result = minus(a, b);

    // assert
    expect(result).toBe(1);
  });

  test("mutiply()", () => {
    // arrange
    const a = 2;
    const b = 5;

    // act
    const result = multiply(a, b);

    // assert
    expect(result).toBe(10);
  });

  test("divide()", () => {
    // arrange
    const a = 9;
    const b = 3;

    // act
    const result = divide(a, b);

    // assert
    expect(result).toBe(3);
  });

  test("divide() throws exception when dividing by zero", () => {
    const a = 10;
    const b = 0;

    expect(() => divide(a, b)).toThrow("Cannot divide Zero");
  });
});
