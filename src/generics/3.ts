function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: 'Petro', age: 30 };
const obj2 = { hobbies: ['Sports', 'Gaming'] };

const mergedObj = merge(obj1, obj2);

console.log(mergedObj); 
