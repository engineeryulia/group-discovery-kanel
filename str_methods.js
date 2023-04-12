const str1 = 'Potato white';
const str2 = 'blueberries';
const str3 = '(06)123-4458';

console.log(str1.substring(0, 5)); //Potat - с 0 до 5 не включительно
console.log(str1.substring(7)); //white - с 7 до конца

console.log(str1.substring(5, 3).split('').reverse().join('')); // ta

console.log(str1.slice())

console.log(str1.replace(/o/ig, '##')) //PWtatW white   c js bin не работает
//console.log(str3.replace(/[0-9], '*'))//[a-z] 

console.log(str1.split("", 4))  //[ 'P', 'o', 't', 'a' ]

console.log(str1.charCodeAt(0)) //80

const arr = [];
for (let i = 0; i < str1.length; i++) {
  arr.push(str1.charCodeAt(i)) 
}
console.log(arr);/*[
  80, 111, 116,  97,
 116, 111,  32, 119,
 104, 105, 116, 101
] */
const strRes = ''
console.log('------------charCodeAt------------');
console.log(str1.charCodeAt(0));
let arrCode = [];
for(let i=0; i<=str1.length; i++){
    arrCode.push(str1.charCodeAt(i));
}
console.log(arrCode);


/*console.log(str.contact(' ', str1, ' ', str2));

console.log('------------pad------------');

console.log('------------indexOf------------');
console.log(str.indexOf('o', 2))
console.log(str.indexOf('ta'))
console.log(str.indexOf('tag'))

const arr = [];
let count = 0;
let pos = str.indexOf('o');

while (pos !=-1){
    arr.push(pos);
    pos = str.indexOf('o', pos+1);
}
console.log(arr, count);

console.log('------------lastIndexOf------------');
console.log(str.lastIndexOf('o', 2))

while (pos !=-1){
    arr.push(pos);
    pos = str.lastIndexOf('o', pos-1);
}
console.log(arr, count);

console.log('------------startsWith------------');
console.log(str.startsWith('po'));
console.log(str.startsWith('whi', 7));

console.log('------------endsWith------------');
console.log(str.endsWith('te'));

console.log('------------substring------------');
console.log(str.substring(5, 3));
console.log(str.substring(5, 3).split('').reverse().join(""));

console.log('------------slice------------');
console.log(str.slice(-10, -4));
console.log(str.slice(-10, -4).split('').reverse().join(""));

console.log('------------replaceAll------------');
console.log(str.replaceAll('o',"<X>"));

console.log('------------replace+RegExp------------');
console.log(str.replace(/o/i, '<X>'));
console.log(str.replace(/o/ig, '<X>'));
console.log(str.replace(/[a-z]/ig, '<X>'));
let telephoneNumber = '8-(924)-348-34-21'
console.log(telephoneNumber.replace(/[0-9]/g, '*'));

console.log('------------split + EDGE------------');
console.log(str.split('', 4));

console.log('------------charCodeAt------------');
console.log(str.charCodeAt(0));
let arrCode = [];
for(let i=0; i<=str.length; i++){
    arrCode.push(str.charCodeAt(i));
}
console.log(arrCode);

console.log('------------fromCharCode------------');
console.log(String.fromCharCode(189, 43, 190, 61)); */