test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
    for(let a = 1; a < 10; a++) {
        for(let b = 1; b < 10; b++) {
          expect(a + b).not.toBe(0);
        }    
    }
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
});

test('null', () => {
    const value = null;
    expect(value).not.toBeUndefined();
});

test('There is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

test('the shopping list has beer on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
      ];
      expect(shoppingList).toContain('beer');
});

test('zer0', () => {
    const value = 0;
    expect(value).not.toBeNull();
});

test('undefined', () => {
    const num = 9;
    expect(num).not.toBeUndefined();
});

test('PI', () => {
    expect(Math.PI * 2).toBeCloseTo(6.28);
});