// 6: Type conversion - to number
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

import assert from "assert";

describe("Type conversion - to number", () => {
  it("`undefined` converts to `NaN`", () => {
    const toNumber = Number(undefined);
    assert(isNaN(toNumber));
  });
  it("`null` converts to `+0`", () => {
    const toNumber = +null!;
    assert.equal(toNumber, +0);
  });
});
