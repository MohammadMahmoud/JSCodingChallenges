"use strict";

function sumTillHighestNumber(array) {
    if (!array || typeof array !== "object") {
        throw new Error("Please Provide A Valid Arguments");
    }
    const maxNumber = Math.max(...array);
    const minNumber = Math.min(...array);
    let result = 0;
    for (let i = minNumber; i < maxNumber + 1; i++) {
        result += i;
    }
    return result;
}
console.log(sumTillHighestNumber([1, 4]));