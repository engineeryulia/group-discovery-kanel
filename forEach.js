//forEach((el, i, arr) => ())НИЧЕГО НЕ ВОЗВРАЩАЕТ
const arr = [-1, 8, -3];

const changeSign = function (el) {
  console.log(-el);
}
changeSign(arr[0]) //1
//forEach - callback вызов ф-ии внутри другой ф-ии
arr.forEach(changeSign) // 1 8 3

//равнозначо  работает через ===ИМЕННАЯ СТРЕЛОЧНАЯ
const changeSign1 = (el) => {console.log(-el)}
const changeSign2 = el => console.log(-el);

//равнозначо  работает через ===БЕЗЫМЯННУЮ ===== CAMAЯ ИСПОЛЬЗУМАЯ CALLBACK FUN
arr.forEach(function (el) {
  console.log(-el);
})
//пройдись по елементам массива и выведи мне четные индексы иначе пустоту
arr.forEach((el, i) => i % 2 == 0 ? console.log(-el): console.log (" "))
arr.forEach(el => console.log(el ** 3))

//ничего не возвращает
const newArr = [];
arr.forEach(el => el > 3 ? newArr.push(el) : console.log(el));
console.log(newArr);