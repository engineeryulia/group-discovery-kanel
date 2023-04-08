// map возвращает новый массив
const arr = [2, 5, 100, 53, 1034, 90, 3]
let arrNew = arr.map(el => el ** 2)
console.log(arrNew); //[ 4, 25, 10000, 2809, 1069156, 8100, 9 ]

let arrNew1 = arr.map(el => el % 3 == 0 ? el / 3 : el)

console.log(arrNew1); /*[
  2,    5, 100,
 53, 1034,  30,
  1
] */

const callback = (el, i) => {
  if (i % 3 == 0 && el % 3 == 0){
    return el / 3;
  }
  return el;
}
let arrNew2 = arr.map(callback)
console.log(arrNew2); /*[
  2,    5, 100,
 53, 1034,  90,
  1
] */