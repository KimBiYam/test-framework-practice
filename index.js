const { describe, it, expect } = require("./my-test-framework");

const sum = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

describe("describe", () => {
  it("should", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect({}).toEqual({});
  });
});
