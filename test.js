const emptinessCheck = require("./index");

describe("emptinessCheck", () => {
  test("returns true for null input", () => {
    expect(emptinessCheck(null)).toBe(true);
  });

  test("returns true for undefined input", () => {
    expect(emptinessCheck(undefined)).toBe(true);
  });

  test("returns true for empty string input", () => {
    expect(emptinessCheck("")).toBe(true);
  });

  test("returns true for empty array input", () => {
    expect(emptinessCheck([])).toBe(true);
  });

  test("returns true for empty object input", () => {
    expect(emptinessCheck({})).toBe(true);
  });

  test("returns false for numbers", () => {
    expect(emptinessCheck(0)).toBe(false);
  });

  test("returns false for non-empty string input", () => {
    expect(emptinessCheck("Hello")).toBe(false);
  });

  test("returns false for non-empty array input", () => {
    expect(emptinessCheck([1, 2, 3])).toBe(false);
  });

  test("returns false for non-empty object input", () => {
    expect(emptinessCheck({ key: "value" })).toBe(false);
  });

  test("returns false for non-empty object with nested properties", () => {
    expect(
      emptinessCheck({ key1: "value1", key2: { nestedKey: "nestedValue" } })
    ).toBe(false);
  });
});
