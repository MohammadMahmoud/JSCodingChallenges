"use strict";

const repeatString = (string, repeat) => {
    if (!string || typeof string !== "string" || !repeat || typeof repeat !== "number") {
        throw new Error("Please Provide A Valid Arguments");
    }
    return repeat > 0 ? string.repeat(repeat) : ""
};

console.log(repeatString("abc",3));