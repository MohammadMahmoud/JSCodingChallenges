"use strict";

exports.validAnagram = ((string1, string2) => {
    if (!string1 || typeof string1 !== "string" || !string2 || typeof string2 !== "string") {
        throw new Error("Please Provide A Valid Arguments");
    }
    const arr1 = string1.toLowerCase().split('');
    const arr2 = string2.toLowerCase().split('');
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    arr1.map((val) => {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    });
    arr2.map((val) => {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    });
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
});

//Short Answer O(n^2)
exports.ShortValidAnagram = ((string1, string2) => {
    if (!string1 || typeof string1 !== "string" || !string2 || typeof string2 !== "string") {
        throw new Error("Please Provide A Valid Arguments");
    }
    const isTrue = (currentValue) => currentValue === true;
    const result = string1.split('').map((element) => string2.indexOf(element) !== -1);
    return result.every(isTrue)
});

console.log(validAnagram('SSA', 'ASS'));
console.log(ShortValidAnagram('SSA', 'ASS'));