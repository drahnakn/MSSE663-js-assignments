// #1 Convert this javascript function to a curried function
export function curryMe(string1: string, string2: string, string3: string): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here

function curry(func: any) {
  return function(string1: string) {
    return function(string2: string) {
      return function(string3: string) {
        return func(string1, string2, string3);
      }
    }
  }
}

export const curried = curry(curryMe);

// #2 Hoist and convert nested functions to curried functions
export function doMath(a: number) {
  return function add(b: number) {
    return function subtract(c: number) {
      return a + b - c;
    };
  };
}

// source code here
const subtract = (a: number) => (b: number) => (c: number) => a + b - c;
const add = (a: number) => (b: number) => subtract(a)(b);
const arithmatic = (a: number) => add(a);
export const finalCalculation = arithmatic;


// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
type ninja = {
  name: string,
  belt: string
}

function ninjaCombineAndFilter(belt: string) {
  return function(ninjaArray1: ninja[]) {
    return function(ninjaArray2: ninja[]){
      return [...ninjaArray1, ...ninjaArray2].filter(ninja => ninja.belt === belt);
    }     
  }
}

const blackBeltOnly = ninjaCombineAndFilter('black');
export const blackBeltNinjas = blackBeltOnly(ninjasOne)(ninjasTwo);


/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

const statusTypes: {[index: string]:any} = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

const gamerStatusTypes: {[index: string]:any} = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here

function addNinjaStatus(ninjaArray1: ninja[]) {
    return function(ninjaArray2: ninja[]) {
      return [...ninjaArray1, ...ninjaArray2].map(ninja => ({ ...ninja, status: statusTypes[ninja.belt], gamerStatus: gamerStatusTypes[ninja.belt] }));
    }
  }

const newStatusNinjasOne = addNinjaStatus(ninjasOne);
export const newStatusNinjasAll = newStatusNinjasOne(ninjasTwo);
console.log(newStatusNinjasAll);


