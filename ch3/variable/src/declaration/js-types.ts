let myBoolean = true;
let myNumber = 10;
let myString = 'hello';
let myUndefined;
let myNull = null;
let myObject = { name: 'happy' };
let myObject2 = [1, 2, 3];
let myFunction = function (a) {
	return a;
};

console.log('boolean : ', typeof myBoolean);
console.log('number : ', typeof myNumber);
console.log('string : ', typeof myString);
console.log('undefined : ', typeof myUndefined);
console.log('null : ', typeof myNull);
console.log('object : ', typeof myObject, typeof myObject2);
console.log('function : ', typeof myFunction);
console.log('undefined == null : ', undefined == null);
console.log('undefined === null : ', undefined === null);
