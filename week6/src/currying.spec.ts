import { expect } from 'chai';
import 'mocha';
import { curryMe, curried, doMath, finalCalculation, ninjasOne, ninjasTwo, blackBeltNinjas, newStatusNinjasAll } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(curryMe("Hi", "there", "Nick")).to.equal(curried("Hi")("there")("Nick"));
  });

  it('#2 should output the same result as the original function', () => {
    expect(doMath(1)(2)(3)).to.equal(finalCalculation(1)(2)(3));
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    expect([...ninjasOne, ...ninjasTwo].filter(ninja => ninja.belt === 'black')).to.eql(blackBeltNinjas);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    expect(newStatusNinjasAll).to.be.an('array');
    expect(newStatusNinjasAll.map(ninja => ({ status: ninja.status, gamerStatus: ninja.gamerStatus })))
      .to.have.deep.members([
        { status: 'grasshopper', gamerStatus: 'Noob' },
        { status: 'grasshopper', gamerStatus: 'Noob' },
        { status: 'grasshopper', gamerStatus: 'Noob' },
        { status: 'grasshopper', gamerStatus: 'Noob' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'sensei', gamerStatus: 'Legend' },
        { status: 'warrior', gamerStatus: 'Choob' },
        { status: 'warrior', gamerStatus: 'Choob' },
        { status: 'warrior', gamerStatus: 'Choob' },
        { status: 'warrior', gamerStatus: 'Choob' }
    ]);        
  });
});
