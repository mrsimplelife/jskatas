// 5: Type conversion - to boolean
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

import assert from "assert";

describe("Type conversion - to boolean", () => {
  it("`undefined` converts to `false`", () => {
    const toBoolean = !!undefined;
    assert.equal(toBoolean, false);
  });
  it("`null` converts to `false`", () => {
    const toBoolean = !!null;
    assert.equal(toBoolean, false);
  });
  describe("`Boolean`", () => {
    it("`new Boolean(true)` equals `true`", () => {
      const toBoolean = new Boolean(true) ? true : false;
      assert.deepEqual(toBoolean, true);
    });
    it("`Boolean(false)` converts to `false`", () => {
      const toBoolean = Boolean(false) ? true : false;
      assert.equal(toBoolean, false);
    });
  });
  describe("`Number`", () => {
    it("`+0` converts to `false`", () => {
      const toBoolean = +0 ? true : false;
      assert.deepEqual(toBoolean, false);
    });
    it("`-0` converts to `false`", () => {
      const toBoolean = -0 ? true : false;
      assert.deepEqual(toBoolean, false);
    });
    it("`NaN` converts to `false`", () => {
      const toBoolean = NaN ? true : false;
      assert.deepEqual(toBoolean, false);
    });
    it("`42` converts to `true`", () => {
      const toBoolean = 42 ? true : false;
      assert.deepEqual(toBoolean, true);
    });
    it("`-23` converts to `true`", () => {
      const toBoolean = -23 ? true : false;
      assert.deepEqual(toBoolean, true);
    });
  });
  describe("`String`", () => {
    it("an empty string converts to `false`", () => {
      const toBoolean = "" ? true : false;
      assert.deepEqual(toBoolean, false);
    });
    it("an NOT-empty string converts to `true`", () => {
      const toBoolean = " " ? true : false;
      assert.deepEqual(toBoolean, true);
    });
  });
  describe("`Object`", () => {
    it("an empty Object converts to `true`", () => {
      const toBoolean = {} ? true : false;
      assert.deepEqual(toBoolean, true);
    });
    it("any other Object converts to `true`", () => {
      const toBoolean = { x:'' } ? true : false;
      assert.deepEqual(toBoolean, true);
    });
  });
});
