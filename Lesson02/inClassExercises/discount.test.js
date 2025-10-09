import { describe, it, expect } from "vitest";
import { calculateDiscount } from "./discount";

describe("calculate discount on cartridges.", () => {
  it("throws an error for orders below minimum", () => {
    expect(() =>
      calculateDiscount(4, 100).toThrow("Minimum order is 5 cartridges")
    );
  });

  it("calculates total correctly without discount (5 - 99).", () => {
    expect(calculateDiscount(5, 100)).toBe(500);
    expect(calculateDiscount(50, 10)).toBe(500);
    expect(calculateDiscount(99, 2)).toBe(198);
  });

  it("applies the 20% discount on order quantity is 100 or more.", () => {
    expect(calculateDiscount(100, 10)).toBe(800);
    expect(calculateDiscount(101, 5)).toBe(404);
    expect(calculateDiscount(150, 2)).toBe(240);
    expect(calculateDiscount(1000, 1)).toBe(800);
  });
});
