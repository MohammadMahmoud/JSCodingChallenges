"use strict";

function rot13(string) {
    if (!string || typeof string !== "string") {
        throw new Error("Please Provide A Valid Arguments");
    }
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let charCode = string[i].charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            charCode >= 65 && charCode <= 77
                ? (result += String.fromCharCode(charCode + 13))
                : (result += String.fromCharCode(charCode - 13));
        }
        else {
            result += string[i];
        }
    }
    return result;
}
console.log(rot13("N . G"));