"use strict";

const palindrome = string => {
    if(typeof string !== "string") {
        throw new Error(`Please provide a string instead of ${typeof string}`)
    }
    const reversed = string.toLocaleLowerCase().replace(/[\W_]/g, "").split("").reverse().join("");
    return string.toLocaleLowerCase() === reversed ? "Yes it is palindrome" : "It is not a palindrome";
};

const withoutSymbolsPalindrome = string => {
    if(typeof string !== "string") {
        throw new Error(`Please provide a string instead of ${typeof string}`)
    }
    const reversed = string.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("");
    return string.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "") === reversed ? "Yes it is palindrome" : "It is not a palindrome";
};

console.log(palindrome("racecar"));
console.log(withoutSymbolsPalindrome("racecar?"));