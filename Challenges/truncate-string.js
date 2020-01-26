"use strict";

function truncateString(string, num) {
    if (!string || typeof string !== "string" || !num || typeof num !== "number") {
        throw new Error("Please Provide A Valid Arguments");
    }
    return num <= 3 ? string.slice(0, num) + "..." : string.slice(0, num - 3) + "...";
}
console.log(truncateString("Hello it is me, i have wondering", 3));