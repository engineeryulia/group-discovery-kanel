/**ищет элемент с заданного индекса и возвращает первый индекс найденного элемента
 * insexOf(item, fromIndex)
 */
const arr3 = "Hello World!".split('')
console.log(arr3);
let index = arr3.indexOf('l', 0)
console.log(index);
/*indexOf - бежит с начала  lastIndex бежит с конца */
let index1 = arr3.lastIndexOf('!', 2)
console.log(index1);
//includes(item)  ======true/false
console.log(arr3.includes('L')); //true
console.log(arr3.includes('l')); //false

console.log(NaN === NaN); //false

arr3.push(NaN)
console.log(arr3.includes(NaN)); //false


