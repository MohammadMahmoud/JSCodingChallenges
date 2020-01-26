"use strict";

const factorial = num => {
    if (typeof num !== "number") {
        throw new Error(`Please provide a vaild number`);
    }
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
        return num * factorial(num - 1);
    }
};

console.log(factorial(15));