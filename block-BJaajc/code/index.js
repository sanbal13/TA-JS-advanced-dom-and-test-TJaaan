/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(str) {
  const arr = str.split('');
  const arrRev = arr.reverse();
  const strRev = arrRev.join('');
  return str.toLowerCase() === strRev.toLowerCase();
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getCircumference() {
    return `The circumference is ${2 * Math.PI * this.radius}`;
  }

  getArea() {
    return `The area is ${Math.PI * this.radius * this.radius}`;
  }
}

module.exports = {
  getFullName,
  isPalindrome,
  Circle,
};
