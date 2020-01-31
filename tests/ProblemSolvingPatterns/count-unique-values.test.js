'use strict';
const {countUniqueValues, shortCountUniqueValues} = require('../../ProblemSolvingPatterns/count-unique-values');

describe('testing count unique values', () => {
    it('should output 4 as unique values', () => {
        expect(countUniqueValues([1, 1, 1, 2, 3, 5])).toBe(4);
    });

    it('should output 1 as unique values', () => {
        expect(countUniqueValues([1])).toBe(1);
    });

    it('should output 1 as unique values for letter', () => {
        expect(countUniqueValues(['a'])).toBe(1);
    });

    it('should throw error if no input', () => {
        expect(countUniqueValues).toThrow()
    });
});

describe('should count unique values in array', () => {
    it('should output 4 as unique values', () => {
        expect(shortCountUniqueValues([1, 1, 1, 2, 3, 5])).toBe(4);
    });

    it('should output 1 as unique values', () => {
        expect(shortCountUniqueValues([1])).toBe(1);
    });

    it('should output 1 as unique values for letter', () => {
        expect(shortCountUniqueValues(['a'])).toBe(1);
    });

    it('should throw error if no input', () => {
        expect(countUniqueValues).toThrow()
    });
});
