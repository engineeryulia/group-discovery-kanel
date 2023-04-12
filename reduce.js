const arr = [2, 6, 3, 5, 9]
const result = arr.reduce((acc, el, i, arr) => acc + el)
/*
acc = 0
el = 2, acc = 0 + 2 = 2
el = 6, acc = 2 + 2 = 8
el = 3, acc = 8 + 2 = 11
 */
console.log(result);