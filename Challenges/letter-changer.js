"use strict";

/**
 * @return {string}
 */
function LetterChanges(string) {
    if (!string || typeof string !== "string") {
        throw new Error("Please Provide A Valid Arguments");
    }
    string = string.replace(/[a-zA-Z]/g, function(ch) {
        if (ch === "z") return "a";
        else if (ch === "Z") return "A";
        else return String.fromCharCode(ch.charCodeAt(0) + 1);
    });
    return string.replace(/[aeiou]/g, function(ch) {
        return ch.toUpperCase();
    });
}
console.log(LetterChanges("hhhhhhey"));