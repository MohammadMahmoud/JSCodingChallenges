"use strict";

function ChunkArrayInGroups(array, size) {
    if (!array || typeof array !== "object" || !size || typeof size !== "number") {
        throw new Error("Please Provide A Valid Arguments");
    }
    let groupedArray = [];
    for (let i = 0; i < array.length; i += size) {
        groupedArray.push(array.slice(i, i + size));
    }
    return groupedArray;
}
console.log(ChunkArrayInGroups(["1", "2", "3" , "4" , "5" ,"6" , "7"], 2));