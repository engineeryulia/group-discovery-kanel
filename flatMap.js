const str = 'Hello: Today, is Tuesday';

const result = str.toLowerCase().split(':')
.flatMap(part => part.split(' '))
.flatMap(part => part.split(','))
.filter(world => world)
console.log(result);