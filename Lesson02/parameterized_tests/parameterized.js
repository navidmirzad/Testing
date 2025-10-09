/**
 * Calculator class with various mathematical operations
 */
export class Calculator {
  /**
   * Adds two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts second number from first
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides first number by second
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Quotient of a and b
   * @throws {Error} If divisor is zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  /**
   * Checks if a number is even
   * @param {number} num - Number to check
   * @returns {boolean} True if even, false if odd
   */
  isEven(num) {
    return num % 2 === 0;
  }

  /**
   * Calculates the absolute value of a number
   * @param {number} num - Input number
   * @returns {number} Absolute value
   */
  absoluteValue(num) {
    return Math.abs(num);
  }

  /**
   * Determines the grade based on score
   * @param {number} score - Score between 0-100
   * @returns {string} Letter grade
   */
  getGrade(score) {
    if (score < 0 || score > 100) {
      throw new Error("Score must be between 0 and 100");
    }
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  }

  /**
   * Calculates the power of a number
   * @param {number} base - Base number
   * @param {number} exponent - Exponent
   * @returns {number} Result of base raised to exponent
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}
