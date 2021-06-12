import { expect } from "chai";
import "mocha";
import { food, fruits, a, b, others, greeting } from "./array-destructuring";

describe("Array destructuring tests", () => {
  it("#1 should have a variable for every element in the given array", () => {
    expect(fruits).to.include(a);
    expect(fruits).to.include(b);
  });

  it("#2 should have a variable for the first 2 elements then spread the rest", () => {
    let [, , ...othersTest] = food;
    expect(food[0]).to.equal(a);
    expect(food[1]).to.equal(b);
    expect(othersTest).to.eql(others);
  });

  it("#3 should construct a statement from the given objarrayect", () => {
    expect(greeting).to.equal("hello, taylor!");
  });
});
