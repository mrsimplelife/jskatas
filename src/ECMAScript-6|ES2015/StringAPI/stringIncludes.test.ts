// 63: String - `includes()`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

import assert from "assert";

describe("`string.includes()` determines if a string can be found inside another one", function () {
  describe("finding a single character", function () {
    it("can be done (a character is also a string, in JS)", function () {
      const searchString = "x";
      assert.equal("xyz".includes(searchString), true);
    });
    it("reports false if character was not found", function () {
      const actual = false;
      assert.equal(actual, "xyz".includes("abc"));
    });
  });
  describe("find a string", function () {
    it("that matches exactly", function () {
      const findSome = (findMe: string) => "xyz".includes(findMe);
      assert.equal(findSome("xyz"), true);
    });
  });
  describe("search for an empty string, is always true", function () {
    it("in an empty string", function () {
      const emptyString = "";
      assert.equal("".includes(emptyString), true);
    });
    it("in `abc`", function () {
      const actual = "abc".includes("");
      assert.equal(actual, true);
    });
  });
  describe("special/corner cases", function () {
    it("search for `undefined` in a string fails", function () {
      const findInAbc = (what: any) => "abc".includes(what);
      assert.equal(findInAbc(undefined), false);
    });
    it("searches are case-sensitive", function () {
      const findInAbc = (what: string) => "abc".includes(what);
      assert.equal(findInAbc("A"), false);
    });
    it("must NOT be a regular expression", function () {
      const regExp = /a/;
      assert.throws(() => {
        "".includes(regExp);
      });
    });
    describe('coerces the searched "thing" into a string', function () {
      it("e.g. from a number", function () {
        const actual = "123".includes(3 as unknown as string);
        assert.equal(actual, true);
      });
      it("e.g. from an array", function () {
        const actual = "123".includes([123] as unknown as string);
        assert.equal(actual, true);
      });
      it("e.g. from an object, with a `toString()` method", function () {
        const objWithToString = { toString: () => 1 };
        assert.equal(
          "123".includes(objWithToString as unknown as string),
          true
        );
      });
    });
  });
  describe("takes a position from where to start searching", function () {
    it("does not find `a` after position 1 in `abc`", function () {
      const position = 1;
      assert.equal("abc".includes("a", position), false);
    });
    it("even the position gets coerced", function () {
      const findAtPosition = (position: string) =>
        "xyz".includes("x", position as unknown as number);
      assert.equal(findAtPosition("2"), false);
    });
    describe("invalid positions get converted to 0", function () {
      it("e.g. `undefined`", function () {
        const findAtPosition = (pos: undefined) => "xyz".includes("x", pos);
        assert.equal(findAtPosition(undefined), true);
      });
      it("negative numbers", function () {
        const findAtPosition = (pos: number) => "xyz".includes("x", pos);
        assert.equal(findAtPosition(-2), true);
      });
      it("NaN", function () {
        const findAtPosition = (pos: number) => "xyz".includes("x", pos);
        assert.equal(findAtPosition(NaN), true);
      });
    });
  });
});
