'use strict';
const {linearSearch} = require('../../ProblemSolvingPatterns/linear-search');

describe('testing count unique values', () => {
    it('should output 4 as unique values', () => {
        expect(linearSearch([1, 1, 1, 2, 3, 5] , 3)).toBe(4);
    });

    it('should output 4 as unique values', () => {
        expect(linearSearch([100] , 100)).toBe(0);
    });

    it('should output 4 as unique values', () => {
        expect(linearSearch([10 , 50, 60 ,80] , 50)).toBe(1);
    });
});