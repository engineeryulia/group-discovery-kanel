//Array.from - создает массив из определенных элементов

// const arr1 = Array.from('JavaScript');
// console.log(arr1)

//___________________________

// const arr2 = Array.from();
// console.log(arr2);
// //___________________________
// const arr3 = Array.from(Array(20).keys()); //создаем массив из 20 элементов
// console.log(arr3);
// //___________________________
let start = 10;
let finish = 25;
let step = 3;

const arr4 = Array.from(Array(finish - start + 1).fill(start), (el, i) => el + i);
//-создаем массив из n элементов начиная со start to finish, step 1
/*[
  10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21,
  22, 23, 24, 25
]*/
const arr5 = Array.from({length: (finish - start) / step + 1}, (_, i) => start + (i * step))
 // создаем массив из n элементов начиная со start to finish with step = 3
 //[ 10, 13, 16, 19, 22, 25 ]
// console.log(arr4);
// console.log(arr5);

//Array.of() - создает массив из определенных элементов
// const arr6 = Array.of(10, 15, 34, 'Anna', null, NaN)
// console.log(arr6);
//[ 10, 15, 34, 'Anna', null, NaN ]
