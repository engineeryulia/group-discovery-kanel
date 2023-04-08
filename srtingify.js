let arr = [1, 2, 3];
let arr1 = [1, 2, 3];

console.log(arr == arr1);
console.log(JSON.stringify(arr) == JSON.stringify(arr1)); //compare string

console.log(arr.toString() === arr1.toString());