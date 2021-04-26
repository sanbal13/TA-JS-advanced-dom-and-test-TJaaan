let {map, reduce} = require('./mock');

const mockCallback = jest.fn(x => 42 + x);

map([5,3], mockCallback);

test('Callback length', () =>
expect(mockCallback.mock.calls.length).toBe(2));

test('First Argument', () =>
expect(mockCallback.mock.calls[0][0]).toBe(5));

test('Second Argument', () =>
expect(mockCallback.mock.calls[1][0]).toBe(3));

test('Return value of first call', () =>
expect(mockCallback.mock.results[0].value).toBe(47));


const mockCallbackReduce = jest.fn(x => 42 + x);
reduce([5,3], mockCallbackReduce);

test('Callback length', () =>
expect(mockCallbackReduce.mock.calls.length).toBe(2));

test('First Argument', () =>
expect(mockCallbackReduce.mock.calls[0][0]).toBe(5));

test('Return value of first call', () =>
expect(mockCallbackReduce.mock.results[0].value).toBe(47));


