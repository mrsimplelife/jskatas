// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

import assert from "assert";

describe("Rest parameters in functions", () => {
  it("must be the last parameter", () => {
    const fn = (...rest: number[]) => {
      assert.deepEqual(rest, [1, 2]);
    };
    fn(1, 2);
  });
  it("can be used to get all other parameters", () => {
    const fn = (firstParam: null, secondParam: number, ...rest: number[]) => {
      assert.deepEqual(rest, [3, 4]);
    };
    fn(null, 2, 3, 4);
  });
  it("makes `arguments` obsolete", () => {
    const fn = (...args: (string | number)[]) => {
      assert.deepEqual(args, [42, "twenty three", "win"]);
    };
    fn(42, "twenty three", "win");
  });
  it("eliminate `arguments`!!!", () => {
    const fn = (...args: number[]) => args;
    const [firstArg, ...rest] = fn(1, 2, 3);
    assert.deepEqual(rest, [2, 3]);
  });
});
