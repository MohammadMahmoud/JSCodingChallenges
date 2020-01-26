"use strict";

const biggestNumberInArray = array => {
    if (!array || typeof array !== "object") {
        throw new Error("Please Provide A Valid Arguments");
    }
    return array.map(Element => Math.max(...Element));
};

console.log(
    biggestNumberInArray([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ])
);
