"use strict";

function arrayElementDestroyer(array, ...destroyer) {
    if (!array || typeof array !== "object" || !destroyer || typeof destroyer !== "object") {
        throw new Error("Please Provide A Valid Arguments");
    }
    return array.filter(value => {
        return destroyer.indexOf(value) >= 0 ? null : value;
    });
}
console.log(arrayElementDestroyer([1, 2, 3, 4, 5, 6], 1, 5));