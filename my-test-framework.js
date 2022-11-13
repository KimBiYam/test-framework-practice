let succeed = 0;
let failed = 0;

const countResult = (passed) => {
  if (passed) succeed++;
  if (!passed) failed++;
};

const displayResult = () => {
  console.log(`성공 ${succeed}개, 실패 ${failed}개`);
};

const describe = (name, testFn) => {
  testFn();
  displayResult();
};

const it = (name, testFn) => {
  testFn();
};

const expect = (received) => {
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
      const passed = received === expected;
      countResult(passed);
      return passed;
    },
    toEqual(expected) {
      const passed = deepEqual(received, expected);
      countResult(passed);
      return passed;
    },
  };
};

module.exports = {
  describe,
  it,
  expect,
};
