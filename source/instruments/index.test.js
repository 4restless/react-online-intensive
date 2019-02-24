//Core
import { sum, delay, getUniqueID, getFullApiUrl } from './';

//jest.setTimeout(10000);

//sum
test('sum function should be a function', () => {
    expect(sum).toBeInstanceOf(Function);
});

test('sum function should throw, when called with non number type as second argument', () => {
    expect(()=> sum(2, true)).toThrow();
});

test('sum function should throw, when called with non number type as first argument', () => {
    expect(()=> sum(true, 1)).toThrow();
});

test('sum function should return an addition of two arguments passed', () => {
    expect(sum(2, 1)).toBe(3);
    expect(sum(2, 3)).toMatchSnapshot();
});

//delay
test('delay function should return a resolved promise', async () => {
    await expect(delay()).resolves.toBeUndefined();
});

//getUniqueID
test('getUniqueID function should be a function', () => {
    expect(getUniqueID).toBeInstanceOf(Function);
});

test('getUniqueID function should throw, when called with non number type as argument', () => {
    expect(()=> getUniqueID(true)).toThrow();
});

test('getUniqueID function should return a string of a desired given length ', () => {
    expect(typeof getUniqueID()).toBe('string');
    expect(getUniqueID(5)).toHaveLength(5);
    expect(getUniqueID(15)).toHaveLength(15);
});

//getFullApiUrl
test('getFullApiUrl function should throw, when called with non string type as arguments', () => {
    expect(()=> getFullApiUrl(true, '')).toThrow();
    expect(()=> getFullApiUrl('', true)).toThrow();
});

test('getFullApiUrl function should return a string like argument1/argument2', () => {
    expect(typeof getFullApiUrl('api', 'GROUP_ID')).toBe('string');
    expect(getFullApiUrl('api', 'GROUP_ID')).toBe('api/GROUP_ID');
});
