const uniqueKey: symbol = Symbol();
let obj: object = {};

obj[uniqueKey] = 1234;
console.log(obj[uniqueKey]);
console.log(obj);
