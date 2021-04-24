/* eslint-disable no-alert */
const cat = 'cat';
console.log(cat);

/* ********** Code1 ********** */
// var a = 10;

/* ***** Refactor ***** */
const a = 10;
console.log(a);

/* ********** Code2 ********** */
// const item = new Object();

/* ***** Refactor ***** */
const item = {};
console.log(item);

/* ********** Code3 ********** */
// const atom = {
//   value: 1,

//   addValue: function (value) {
//       return atom.value + value;
//   },
// };

/* ***** Refactor ***** */
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};

/* ********** Code4 ********** */
const lukeSkywalker = 'Luke Skywalker';

// bad
// const obj = {
//   lukeSkywalker: lukeSkywalker,
// };

/* ***** Refactor ***** */
const obj1 = {
  lukeSkywalker,
};
console.log(obj1);

/* ********** Code5 **********  */
const anakinSkywalker = 'Anakin Skywalker';

// bad
// const ob = {
//   episodeOne: 1,
//   twoJediWalkIntoACantina: 2,
//   lukeSkywalker,
//   episodeThree: 3,
//   mayTheFourth: 4,
//   anakinSkywalker,
// };
// console.log(ob);

/* ***** Refactor ***** */
const ob = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
console.log(ob);

/* ********** Code6 **********  */
// const bad = {
//   'foo': 3,
//   'bar': 4,
//   'data-blah': 5,
// };
// console.log(bad);

/* ***** Refactor ***** */
const bad = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
console.log(bad);

/* ********** Code7 **********  */
const someStack = [];

// bad
// someStack[someStack.length] = 'abracadabra';
/* ***** Refactor ***** */
someStack.push('abracadabra');

/* ********** Code8 **********  */
const items = [1, 2, 3];
// const len = items.length;
let itemsCopy = [];
// let i;

// for (i = 0; i < len; i += 1) {
//   itemsCopy[i] = items[i];
// }
/* ***** Refactor ***** */
itemsCopy = [...items];
console.log(itemsCopy);
/* ********** Code9 **********  */
// function getFullName(user) {
//     const firstName = user.firstName;
//     const lastName = user.lastName;
//     return `${firstName} ${lastName}`;
//   }
/* ***** Refactor ***** */
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
getFullName('Arya', 'Stark');
/* ********** Code10 **********  */
// bad
// const name = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
// const name = `Capt. Janeway`;
/* ***** Refactor ***** */
const captName = 'Capt. Janeway';
console.log(captName);
