/* In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

Objects are variablrs!
It is a common practice to declare objects with the const keyword.
 */
// let obj = new Object();
// let user = {};

// ключ может состоять из нескольких слов, но тогда он
// _обязательно_ должен быть заключен в кавычки:
let number
number = 9

let user = new Object()
let user1 = {
  name: "John",
  age: 30,
   highSchool: true,
}

console.log("original ", user1 );

//value of age и name изменено:
 user1.age = 20;
 user1.name = 'Bill';
 console.log("modified ", user1);
console.log(user1[0])