/* .every (для каждого)-все элементы соотвутствуют TRUE не соответствубт FALSE */
const arr = [1, 8, 6, 9, -5, 0, 7]
console.log(arr.every(el => el>= 0));//false 
console.log(arr.some(el => el>= 0));//true 




/* .some -хоть один из  элемент соотвутств = TRUE не соответствует не один из элементов= FALSE */

