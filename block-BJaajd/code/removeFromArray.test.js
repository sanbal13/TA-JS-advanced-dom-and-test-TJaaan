const removeFromArray = require('./removeFromArray');

test('removeFromArray "[1, 2, 3, 4], 4 " equals [1, 2, 3, 4]', () => {
    expect(removeFromArray([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});

test('removeFromArray "[1, 2, 3, 4], 4 ,5 " equals [1, 2, 3, 4]', () => {
    expect(removeFromArray([1, 2, 3, 4], 4)).toBeTruthy();
});

test('removeFromArray "[1, 2, 3, 4], 4 ,5 " equals [1, 2, 3, 4]', () => {
    expect(removeFromArray([1, 2, 3, 4], 4)).not.toEqual([1, 2, 3]);
});