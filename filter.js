//.filter() ======ВОЗВРАЩАЕТ массив числел с прописанным условием
//.filter(function(el, ind, arr) => {})

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrOdd = arr.filter(el => el % 2 != 0)
console.log(arrOdd); //[ 1, 3, 5, 7, 9 ]

const arr1 = [1, 'str', null, 4, 5, NaN, 7, 8, true]
const newArr1 = arr1.filter(el => typeof el =='string')
console.log(newArr1); //[ 'str' ]
