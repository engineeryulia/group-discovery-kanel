const str = 'Hello: Today, is Tuesday';

const separator = /[;,|\s]+/; //\s- пробелы, n-переносы строки
const result = str.toLowerCase().split(separator)
console.log(result);


