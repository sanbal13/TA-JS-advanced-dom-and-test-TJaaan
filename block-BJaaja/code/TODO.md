## Using ESLint

- Create a folder with a `.js` file
- Install and setup the `eslint`
- Go through [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
- List 10 bad practices from the link above
- Check if you get error (red underline) in VSCode.
- Comment the bad code and fix it below that

Example:

```js
var count = 1;
if (true) {
  count += 1;
}

let count = 1;
if (true) {
  count += 1;
}
```

#### Fix the following code given below by following the rules of Airbnb Style Guide. Use ESLint to find the error

1.

```js
var num = 10;

var increaseNumber = () => num++;
var increasePassedNumber = (number) => number++;

var num1 = increaseNumber();
var num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```
```js
const num = 10;

const increaseNumber = () => num + 1;
const increasePassedNumber = (number) => number + 1;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

2.

```js
var animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    console.log(
      `I live in ${this.location} and I have ${this.numberOfLegs}`
    );
  },
};

function createAnimal(location, numberOfLegs) {
  let obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

function createDog(location, numberOfLegs, name, color) {
  let obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

var dogsMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(dogsMethods, animalMethods);

function createCat(
  location,
  numberOfLegs,
  name,
  colorOfEyes
) {
  let obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

let catsMethods = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(catsMethods, animalMethods);
```
```js
const animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary() {
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};

function createAnimal(location, numberOfLegs) {
  const obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

const dogsMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

function createDog(location, numberOfLegs, name, color) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}
Object.setPrototypeOf(dogsMethods, animalMethods);
createDog('India', 4, 'Dog', 'Yellow');

const catsMethods = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

function createCat(location, numberOfLegs, name, colorOfEyes) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

Object.setPrototypeOf(catsMethods, animalMethods);
createCat('India', 4, 'Cat', 'Pink');
```


3.

```js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
```

```js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,  
  episodeThree: 3,
  mayTheFourth: 4,  
};
```

4.

```js
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}
```
```js
function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}
```
