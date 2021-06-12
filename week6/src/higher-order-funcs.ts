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

 // create callback here
 const callback = (element: string, index: number) => ({ id: (index + 1), name: element.slice(0, -1) });
 
 // create map here
 export const results: Array<Object> = things.map(callback);
 console.log(results);
 
 /**
  * #2 Higher order then curry.
  *
  * - Write a function that accepts a key as a string.
  * - Filter the results from #1 to return a single `thing` object.
  * - Hoist that filter callback and curry all functions.
  */
 
 // create function here
 
 // function filterThings(key: string) {
 //     const parsed = parseInt(key);
 //     if (isNaN(parsed)) {
 //         return result.filter(element => element.id === 0);
 //     }
 //     return result.filter(element => element.id === parsed);
 // } 
 
 // function filterThingsByKey(key: string) {
 //     if(isNaN(parseInt(key))) {
 //         return results.filter(element => element.name === key);
 //     }
 //     return results.filter(element => element.id === parseInt(key));
 // }
 
 // console.log(filterThingsByKey("1"));
 // console.log(filterThingsByKey("thing"));