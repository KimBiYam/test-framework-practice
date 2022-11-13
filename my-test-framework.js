function describe(name, testFn) {
  testFn();
}

function it(name, testFn) {
  testFn();
}

function expect(received) {
  const isPrimitive = (value) =>
    (typeof value !== "object" && typeof value !== "function") ||
    value === null;

  const deepEqual = (obj1, obj2) => {
    if (isPrimitive(obj1) && isPrimitive(obj2)) {
      return obj1 === obj2;
      // 둘 중 하나만 원시 값이라면 false
    } else if (isPrimitive(obj1) || isPrimitive(obj2)) {
      return false;
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let prop in obj1) {
      if (obj2.hasOwnProperty(prop)) {
        return deepEqual(obj1[prop], obj2[prop]);
      } else {
        return false;
      }
    }

    return true;
  };

  return {
    toBe(expected) {
      return received === expected;
    },
    toEqual(expected) {
      return deepEqual(received, expected);
    },
  };
}

module.exports = {
  describe,
  it,
  expect,
};
