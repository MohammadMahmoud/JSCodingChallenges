"use strict";

const maxSubarraySum = num => {
    if (num === 1) return 1;
    return num * maxSubarraySum(num - 1)
};

console.log(
    maxSubarraySum(2)
);
