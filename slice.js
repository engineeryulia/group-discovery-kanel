/* .slice(start), (end) возващает  массив копируя элементы 
с сущест начина from start to end (index end is not included)*/
let str = 'Hello world!';
const arr = str.split('')
// .slice(start), (end) 
const newArr = arr.slice(2, 5)
const newArr1 = arr.slice() // copy array


console.log(newArr);