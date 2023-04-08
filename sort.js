const arr = [2, 5, 100, 53, 1034, 90, 3]
arr.sort((num1, num2) => num2 - num1)
console.log(arr); /*[
  1034, 100, 90,
    53,   5,  3,
     2
] */
arr.sort((a, b) => a - b)
console.log(arr);
/*[
     2,  3,   5,
    53, 90, 100,
  1034
] */