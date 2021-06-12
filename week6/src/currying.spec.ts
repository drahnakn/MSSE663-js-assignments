import { expect } from 'chai';
import 'mocha';
import { curryMe, curried, doMath, finalCalculation } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(curryMe("Hi", "there", "Nick")).to.equal(curried("Hi")("there")("Nick"));
  });

  it('#2 should output the same result as the original function', () => {
    expect(doMath(1)(2)(3)).to.equal(finalCalculation(1)(2)(3));
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {});

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {});
});
