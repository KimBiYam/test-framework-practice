function describe(name, testFn) {
  testFn();
}

function it(name, testFn) {
  testFn();
}

function expect(received) {
  return {
    toBe(expected) {
      return received === expected;
    },
  };
}

module.exports = {
  describe,
  it,
  expect,
};
