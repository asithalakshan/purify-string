import purify from '../../index';

describe('isIdentical', () => {
  it('should return true for given two identical string', () => {
    expect(purify.isIdentical('test', 'test')).toBeTruthy;
  });

  it('should return false for given two different string', () => {
    expect(purify.isIdentical('test', 'test2')).toBeFalsy;
  });
});

describe('isEmail', () => {
  it('should return true, if given string is a valid email address', () => {
    expect(purify.isEmail('test@example.com')).toBeTruthy;
  });

  it('should return false, if given string is not a valid email address', () => {
    expect(purify.isEmail('test.com')).toBeFalsy;
  });
});