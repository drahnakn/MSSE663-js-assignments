/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
 const things = ['thing1', 'thing2'];

 type thing = {
    id: number,
    name: string
}

 // create callback here
 const mapCallback = (element: string, index: number) => ({ id: (index + 1), name: element.slice(0, -1) });
 
 // create map here
 export const results: thing[] = things.map(mapCallback);
 console.log(results);
 
 /**
  * #2 Higher order then curry.
  *
  * - Write a function that accepts a key as a string.
  * - Filter the results from #1 to return a single `thing` object.
  * - Hoist that filter callback and curry all functions.
  */
 
 // create function here
 
 const filterByKey = (key: string) => ((element: thing) => element.id === parseInt(key));
 const filteredByKey = filterByKey('1');
 export const filteredThings = results.filter(filteredByKey);