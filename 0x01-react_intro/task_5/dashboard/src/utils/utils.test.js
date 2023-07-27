import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  it('should not return a hardcoded year', () => {
    const hardcodedYear = 2021;
    expect(getFullYear()).not.toBe(hardcodedYear);
  });
});

describe('getFooterCopy', () => {
  it('should return "Holberton School" when the argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('should return "Holberton School main dashboard" when the argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  it('should not return a hardcoded value for true or false argument', () => {
    const hardcodedValue = 'Some wrong value';
    expect(getFooterCopy(true)).not.toBe(hardcodedValue);
    expect(getFooterCopy(false)).not.toBe(hardcodedValue);
  });
});

describe('getLatestNotification', () => {
  it('should return the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });

  it('should not return a hardcoded value', () => {
    const hardcodedString = 'Some wrong value';
    expect(getLatestNotification()).not.toBe(hardcodedString);
  });
});