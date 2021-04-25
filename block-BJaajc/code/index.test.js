const {getFullName, isPalindrome, Circle} = require('./index');

test('first name: "Arya"  last name: "Starks" returns Arya Starks',() => {
    expect(getFullName('Arya', 'Starks')).toBe('Arya Starks');
});

test('first name: "Arya"  last name: "Starks" does not return Starks Arya',() => {
    expect(getFullName('Arya', 'Starks')).not.toBe('Starks Arya');
});

test('first name: "Arya"  last name: "Starks" does not return Ary Stark',() => {
    expect(getFullName('Arya', 'Starks')).not.toBe('Ary Stark');
});

test('malayalam is a palindrome',() => {
    expect(isPalindrome('malayalam')).toBeTruthy();
});

test('english is not a palindrome',() => {
    expect(isPalindrome('english')).toBeFalsy();
});

test('Madam is a palindrome',() => {
    expect(isPalindrome('Madam')).toBeTruthy();
});

test('Area of circle with radius 1 is 3.14',() => {
    const circle = new Circle(1);
    expect(circle.getArea()).toBe("The area is " + Math.PI);
});

test('Area of circle with radius 2 is not 3.14',() => {
    const circle = new Circle(2);
    expect(circle.getArea()).not.toBe("The area is " + Math.PI);
});

test('Area of circle with radius 2.5 is not 6.28',() => {
    const circle = new Circle(2.5);
    expect(circle.getArea()).not.toBe("The area is " + 6.28);
});

test('Circumference of circle with radius 1 is 6.28',() => {
    const circle = new Circle(1);
    expect(circle.getCircumference()).toBe("The circumference is " + Math.PI * 2);
});

test('Circumference of circle with radius 3 is not 6.28',() => {
    const circle = new Circle(3);
    expect(circle.getCircumference()).not.toBe("The circumference is " + Math.PI * 2 );
});

test('Circumference of circle with radius 1.5 is 6.28',() => {
    const circle = new Circle(1.5);
    expect(circle.getCircumference()).not.toBe("The circumference is " + Math.PI * 2);
});


