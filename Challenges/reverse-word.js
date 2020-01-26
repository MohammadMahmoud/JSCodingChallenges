"use strict";

const reverseWord = word => {
    if (typeof word !== "string") {
        throw new Error(
            `Please provide a vaild string instead of ${typeof word}`
        );
    }
    return word
        .split("")
        .reverse()
        .join("");
};
console.log(reverseWord("blahblahbla"));