"use strict";

function arraySlasher(array, slash) {
    if (!array || typeof array !== "object" || !slash || typeof slash !== "number") {
        throw new Error("Please Provide A Valid Arguments");
    }
    return array.splice(slash, array.length);
}
console.log(arraySlasher(["1", "2", "3", "4", "5", "6", "7"], 5));