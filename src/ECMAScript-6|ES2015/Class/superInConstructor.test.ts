// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

import assert from "assert";

describe("Inside a class`s constructor `super()` can be used", () => {
  it("`extend` a class and use `super()` to call the parent constructor", () => {
    class A {
      levels: number = 0;
      constructor() {
        this.levels = 1;
      }
    }
    class B extends A {
      constructor() {
        super();
        this.levels++;
      }
    }
    assert.equal(new B().levels, 2);
  });
  it("`super()` may also take params", () => {
    class A {
      counter: number = 0;
      constructor(startValue = 1, addTo = 1) {
        this.counter = startValue + addTo;
      }
    }
    class B extends A {
      constructor(...args: number[]) {
        super(...args);
        this.counter++;
      }
    }
    assert.equal(new B(42, 2).counter, 45);
  });
  it("it is important where you place your `super()` call!", () => {
    class A {
      countUp: number = 0;
      inc() {
        this.countUp = 1;
      }
    }
    class B extends A {
      inc() {
        this.countUp = 2;
        super.inc();

        return this.countUp;
      }
    }
    assert.equal(new B().inc(), 1);
  });
  it("use `super.constructor` to find out if there is a parent constructor", () => {
    class ParentClassA {
      constructor() {
        "parent";
      }
    }
    class B extends ParentClassA {
      isTop: string;
      constructor() {
        super();
        this.isTop = "" + super.constructor;
      }
    }
    assert(new B().isTop.includes("ParentClassA"), new B().isTop);
  });
});
