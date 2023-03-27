const items = [
      {name: 'Bike',     price: 100},
      {name: 'TV',       price: 200},
      {name: 'Album',    price: 10},
      {name: 'Book',     price: 5},
      {name: 'Phone',    price: 100},
      {name: 'PC',       price: 1000},
      {name: 'Keyboard', price: 25},
      1,
      2,
      3,
      4,
      5
];
//==============FILTER
// const filteredItems = items.filter((item) => {
//   return item.price <= 100;
// });
// console.log(filteredItems);
//==============MAP=====new Arr
// const itemNames = items.map((item) => {
//   return item.name;
// });
// console.log(itemNames);
//==============FIND
// const findItem = items.find((item) => {
//   return item.name === 'Book';
// });
// console.log(findItem);
//==============SOME=====true/false======has or not?
// const hasExpensiveItems = items.some((item) => {
//   return item.price === 1000;
// });
// console.log(hasExpensiveItems);
//==============EVERY=====true/false======oposite SOME
// const hasExpensiveItems = items.every((item) => {
//   return item.price === 1000;
// });
// console.log(hasExpensiveItems);

//==============REDUCE
// const total = items.reduce((accumulator, item) => {
//   return accumulator + item.price;
// }, 0);
// console.log(total);

//==============INCLUDES==== проверяем массив (!обект)вклчается ли цифра 2===true/false
// const includes = items.includes(2) 
// console.log(includes);

//==============forEach=====перебирает, ничего не возвращает===========
// items.forEach((item) => {
// console.log(item.price)
// console.log(item.name)
// })


const friends = [
  {passport: '03005988', name: 'Joseph Fransice Tribbiany Jr',  age: 32, sex: 'm'   },
  {passport: '03257898', name: 'Aoseph Fransice Tribb ',  age: 39, sex: 'f'   },
  {passport: '15785230', name: 'Boseph Fransice Tribbi J',  age: 31, sex: 'm'   },
  {passport: '59880300', name: 'Roseph Fransice Trany ',  age: 34, sex: 'm'   },
  {passport: '03080598', name: 'Eoseph Fransice Tbiany ',  age: 30, sex: 'm'   },
];

const passwordsNumbers = friends.map((friend) => {
  return friend.passport;
});
console.log(passwordsNumbers);

const totalBoysYears = friends.filter(friend => friend.sex === 'm')
                              .reduce((accumulator, friend) => accumulator + friend.age, 0);

  console.log('Total years:', totalBoysYears);                           