/* начинается с позиции индекс - удаляет указанное число элементов
и вставляет предлагаемые элементы*/
let str = 'Hello world!';
const arr = str.split('')
console.log(arr);
// .slice(inex, deliteCount, el1, el2, ... ,elN) 
//        start, delit Nel     insirt el
arr.splice(1, 3, '$', '$', '$', '$')
const arr1 = arr.slice() // copy array

console.log(arr1);


let arr2 = [1, 2, 3, 7];
arr2.splice(3, 0, 4, 5, 6) /*начиная с 3 индекса, 0 элементов, вставь 4, 5, 6*/ 
console.log(arr2);
