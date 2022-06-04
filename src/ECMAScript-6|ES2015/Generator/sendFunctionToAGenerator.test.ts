// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

import assert from "assert";

describe("Pass a function to a generator", () => {
  it("the generator can receive a function as a value", function () {
    let fn = function () {};
    function* generatorFunction() {
      assert.equal(yield null, fn); // remember, don't touch this line
    }
    let iterator = generatorFunction();
    iterator.next();
    iterator.next(fn);
  });
  it("pass a function to the iterator, which calls it", function () {
    function* generatorFunction(): Generator<number, void, () => number> {
      yield (yield 1)();
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(() => 2).value];
    assert.deepEqual(iteratedOver, [1, 2]);
  });
  it("nesting yielded function calls", function () {
    function* generatorFunction(): Generator<number, void, any> {
      yield yield (yield 1)();
    }
    var iterator = generatorFunction();
    var iteratedOver = [
      iterator.next().value,
      iterator.next(() => 2).value,
      iterator.next(3).value,
    ];
    assert.deepEqual(iteratedOver, [1, 2, 3]);
  });
});
