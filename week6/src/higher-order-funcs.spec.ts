import { expect } from 'chai';
import 'mocha';
import { results } from './higher-order-funcs';

const expectedMapResult: Array<Object> = [{ id: 1, name: 'thing' }, { id: 2, name: 'thing' }];

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
    expect(results).to.eql(expectedMapResult);
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {});
});
