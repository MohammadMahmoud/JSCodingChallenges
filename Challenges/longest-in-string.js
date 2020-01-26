"use strict";

const longestWordInString = string => {
    if (!string || typeof string !== "string") {
        throw new Error("Please Provide A Valid Arguments");
    }
    return string.split(" ").reduce((a, b) => a.length > b.length ? a : b).length;
};

console.log(
    longestWordInString("the quick brown fox jumped over the lazy dog")
);
