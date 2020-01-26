"use strict";

const endingWith = (source, target) => {
    if (!source || typeof source !== "string" || !target || typeof target !== "string") {
        throw new Error("Please Provide A Valid Arguments");
    }
    return source.slice(-target.length) === target;
};

console.log(endingWith("Never give up do your best", "best"));