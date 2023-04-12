// // обьявление переменной 1 -iteral

// // 2 - new
// let objNew = new Object();
// console.log(obj, objNew);

// obj['1'] = 'JS'  // кладем в обьект  ключ и значение
//  console.log(obj); //{ type: 'JS' } - properteis



//----------------------------------------------------------
let obj = {};
let str = 'JavaScript'
for (let letter of str) {
  obj [letter] = letter;
}
console.log(obj); /*{
  J: 'J',
  a: 'a',
  v: 'v',
  S: 'S',
  c: 'c',
  r: 'r',
  i: 'i',
  p: 'p',
  t: 't'
} */
//----------------------------------------------------------
let o = {};
let s = 'JavaScript'
for (let i = 0; i < s.length; i++) {
  o[i] = s[i];
}
console.log(o);/* {
  '0': 'J',
  '1': 'a',
  '2': 'v',
  '3': 'a',
  '4': 'S',
  '5': 'c',
  '6': 'r',
  '7': 'i',
  '8': 'p',
  '9': 't'
}*/
//-------------------------------------------------------
let k = {};
let v = 'JavaScript'

k['lastName'] = 'P.';
k['firstName'] = 'Stan';
console.log(k['name']);

k['lastName'] = 'J.'
for (let i = 0; i < v.length; i++) {
  k[i] = v[i];
}
console.log(k);
