const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();
//=> 'Spider-Ham'

console.log(mySuperheroName);
console.log(mySupervillainName);
