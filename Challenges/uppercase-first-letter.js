"use strict";

const uppercaseFirstLetter = string => {
    if (!string || typeof string !== "string" ) {
        throw new Error("Please Provide A Valid Arguments");
    }
    const capsWords = string.split(" ").map(element => {
        return element[0].toUpperCase() + element.substr(1).toLowerCase() + " ";
    });
    return capsWords.join("");
};

console.log(
    uppercaseFirstLetter("the quick brown fox jumped over the lazy dog")
);
