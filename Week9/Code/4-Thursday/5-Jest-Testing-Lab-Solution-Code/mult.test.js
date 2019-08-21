const mult = require('./mult');

test('it should multiply 2 and 3', () => {
  expect(mult(2, 3)).toBe(6);
});

test('it should multiple 5 and 4', () => {
    expect(mult(5, 4)).toBe(20);
});

test('it should multiple 5 and 6', () => {
    expect(mult(5, 6)).toBe(30);
});

test('it should multiple 2 and 0', () => {
    expect(mult(2, 0)).toBe(0);
});
