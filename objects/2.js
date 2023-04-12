const person = {
  name: 'Sasha',
  age: 33, 
  city: 'Seattle',
  Country: 'USA'
}

//Assignments

//1.Assign a new proporty to the object
person.lastName = 'Khoroshilov';
console.log(person);

//2.Update the value of an existiong property
person.age = 31;
console.log(person);

//3. Delete a proporty from the object
delete person.city;
console.log(person);

//Methods

//1. Object.key():  Return  an array of the object's keys
const objectKeys = Object.keys(person);
//console.log(objectKeys);

//2. Object.values():  Return  an array of the object's keys
const objectValues = Object.values(person);
//console.log(objectValues); //[ 'Sasha', 31, 'USA', 'Khoroshilov' ]

//3. Object.entries():  Return  an array of the object's keys
const objectEntries = Object.entries(person);
console.log(objectEntries); /*[
  [ 'name', 'Sasha' ],
  [ 'age', 31 ],
  [ 'Country', 'USA' ],
  [ 'lastName', 'Khoroshilov' ]
]
*/
console.log(objectEntries[0]); //[ 'name', 'Sasha' ]
console.log(objectEntries[0][1]); //Sasha

//Loop types
//1. 
for (const property in person) {
  //console.log(`${property}: ${person[property]}`);
} /*name: Sasha
age: 31
Country: USA
lastName: Khoroshilov */
//OR
//2. Object.key():  Return  an array of the object's keys
const keys = Object.keys(person)
for (const key of keys) {
  console.log(`${key}: ${person[key]}`);
}/*name: Sasha
age: 31
Country: USA
lastName: Khoroshilov */
//OR
//2. Object.key():  Return  an array of the object's keys
const entries = Object.entries(person)
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}/*name: Sasha
age: 31
Country: USA
lastName: Khoroshilov */
