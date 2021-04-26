let checkFive = require('./checkfive');

test('Check 5 gives equal ', () => {
    expect(checkFive(5)).toBe('5 is equal to 5.');
});

test('Check 10 gives greater', () => {
    expect(checkFive(10)).toBe('10 is greater than 5.');
});

test('Check 20 gives greater', () => {
    expect(checkFive(20)).toBe('20 is greater than 5.');
});

test('Check 3 gives less', () => {
    expect(checkFive(3)).toBe('3 is less than 5.');
});

test('Check 4 gives less', () => {
    expect(checkFive(4)).toBe('4 is less than 5.');
});
