/*.find(item, index, array) {...}))
вернет первый найденный в массиве элемент
которое подходит под заданное условие передаваеой ф-й*/
const arr2 = [2, 3, 8, 10, 11]
const arr3 = [2, 4, 8, 10, 12]
//num % 2 != 0 
//.find(function(el, ind, arr) {..}))  ==== ВОЗВРАЩАЕТ ИНДЕКС
console.log(arr2.find(el => el % 2 != 0)) //3 возвращает первый элемент (нечетный)
console.log(arr3.find(el => el % 2 != 0)) //undefined

/*.findIndex(item, index, array) {...}))  ==== ВОЗВРАЩАЕТ ЭЛЕМЕНТ
вернет первый найденный в массиве элемент
которое подходит под заданное условие передаваеой ф-й*/
console.log(arr2.findIndex(el => el % 2 != 0)) //1 возвращает первый элемент (нечетный)
console.log(arr3.findIndex(el => el % 2 != 0)) //-1