let {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
  } = require('./calculator');

test('Add 2 and 3 equals 5', () => {
    expect(add(2, 3)).toBe(5);
});  

test('Add 4 and 3 not equals 6', () => {
    expect(add(4, 3)).not.toBe(6);
});  

test('Subtract 2 from 5 equals 3', () => {
    expect(subtract(5, 2)).toBe(3);
});  

test('Subtact 3 from 5 not equals 3', () => {
    expect(subtract(5, 3)).not.toBe(3);
});  

test('Sum 5 and 5 equals 10', () => {
    expect(sum(5, 5)).toBe(10);
});  

test('Sum 3 and 4 not equals 8', () => {
    expect(sum(3, 4)).not.toBe(8);
});  

test('Multiply 3 and 4 equals 12', () => {
    expect(multiply(3, 4)).toBe(12);
});  

test('Multiply 2 and 3 not equals 7', () => {
    expect(multiply(2, 3)).not.toBe(7);
}); 

test('2 to power 3 equals 8', () => {
    expect(power(2, 3)).toBe(8);
});  

test('3 to power 2 not equals 8', () => {
    expect(power(3, 2)).not.toBe(8);
});  

test('3 factorial equals 6', () => {
    expect(factorial(3)).toBe(6);
});  

test('4 factorial not equals 8', () => {
    expect(factorial(4)).not.toBe(8);
}); 