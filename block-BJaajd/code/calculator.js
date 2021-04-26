function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function power(a, b) {
  return Math.pow(a,b);
}

function factorial(num) {
  let fact = 1;
  for(let i=1; i<= num; i++){
      fact *= i;
  }
  return fact;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
