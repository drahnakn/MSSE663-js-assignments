import { expect } from "chai";
import "mocha";
import {
  greeting,
  nestedObject,
  newObject,
  object,
  job as job,
  person as person,
  user as user,
  id as id,
  address as address,
} from "./object-destructuring";

describe("Object destructuring tests", () => {
  it("#1 should have a variable for every property in the given object", () => {
    expect(object.title).to.equal(job);
    expect(object.name).to.equal(person);
  });

  it("#2 should have a variable for every property in the given nested object", () => {
    expect(nestedObject.user).to.equal(user);
    expect(nestedObject.address).to.eql(address);
    expect(nestedObject.id).to.equal(id);
  });

  it("#3 should create a new object given the destructed variables from the nested object", () => {
    expect(newObject).to.eql(nestedObject);
  });

  it("#4 should construct a statement from the given object", () => {
    expect(greeting).to.equal("hello, taylor!");
  });
});
