let moment = require('moment');
let lodash = require('lodash');

 /********************** Moment **********************/

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

let d = moment('2020-01-01');
console.log(d.isValid());

d = moment('2020-14-01');
console.log(d.isValid());

console.log('After 7 days the date will be: ' + moment().add(7, 'days').calendar());
console.log('After 7 monthss the date will be: ' + moment().add(7, 'months').calendar());
console.log('After 7 years the date will be: ' + moment().add(7, 'years').calendar());
console.log('7 days before the date was: ' + moment().subtract(7, 'days').calendar());
console.log('7 months before the date was: ' + moment().subtract(7, 'months').calendar());
console.log('7 years before the date was: ' + moment().subtract(7, 'years').calendar());

var a = moment('2014-11-11');
var b = moment('2015-09-11');

console.log(b.diff(a, 'days'));

var a = moment('2014-11-27');
var b = moment('2015-09-16');

console.log(b.diff(a, 'days'));

console.log(moment('2020-01-01').isAfter('2018-01-01'));
console.log(moment('2010-01-01').isAfter('2018-01-01'));

console.log(moment('2019').isLeapYear());
console.log(moment('2020').isLeapYear());

/************************ Lodash ************************/

let alphaOne = ['a', 'b', 'c', 'd', 'e'];
let alphaTwo = ['f', 'g', 'h', 'd', 'e'];

/* Arrray methods */
let concat = lodash.concat(alphaOne, alphaTwo, 1, 2, 3, 'p', 'q');
console.log(concat);

let fill = lodash.fill(alphaOne, 1, 1, 3);
console.log(fill);

let obj = lodash.fromPairs([['name','Arya'], ['house', 'Starks']]);
console.log(obj);

let pairs = lodash.toPairs({name:'John', age: '20'});
console.log(pairs);

let intersection = lodash.intersection(alphaOne, alphaTwo);
console.log(intersection);


/* Collection methods */
let numOne = [1.33, 1.2, 4.53, 3.6, 2.43, 3.2];

let countBy = lodash.countBy(numOne, Math.floor);
console.log(countBy);

let lastLessThanThree = lodash.findLast(numOne, function(n) {
    return n < 3;
} );
console.log(lastLessThanThree);

let length = lodash.groupBy(numOne.map(elm => elm.toString()), 'length');
console.log(length);

let includes = lodash.includes(numOne, 3.5);
console.log(includes);

let partition = lodash.partition (numOne, n => n>2);
console.log(partition);