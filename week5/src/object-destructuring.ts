// #1 Object Destructuring
export const object = { name: "elvis", title: "hip swinger" };

// deconstruct here
export let { name: person, title: job } = object;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: "elvis",
  address: {
    city: "denver",
    state: "colorado",
  },
  id: 1,
};

// deconstruct here

export let { user, address, id } = nestedObject;

// expected results:
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

// #3 Create a new object given the destructed values above

// reconstruct here

export let newObject = {
  user: user,
  address: address,
  id: id,
};

// #4 Object with key value pairs: construct a statement
export const greetObj = { greeting: "hello", name: "taylor" };

// construct statement here
export const greeting = `${greetObj.greeting}, ${greetObj.name}!`;

// expected result: 'hello, taylor!'
