// #1 Variable swapping
export const fruits = ['apple', 'banana'];

// deconstruct here
export let [a,b] = fruits;

// Currently, I would get the following:
console.log(a); // 'apple'
console.log(b); // 'banana'

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):

[a,b] = fruits.reverse();
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
export let others: Array<string>;
[a,b,...others] = food;

// expected result:
console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
['hello', 'taylor'];
export let [greet, name] = ['hello', 'taylor'];

// construct statement here
export let greeting = `${greet}, ${name}!`;
console.log(greeting);

// expected result: 'hello, taylor!'
