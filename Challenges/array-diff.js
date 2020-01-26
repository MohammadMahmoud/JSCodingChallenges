"use strict";

function diffArray(array1, array2) {
    if (!array1 || typeof array1 !== "object" || !array2 || typeof array2 !== "object") {
        throw new Error("Please Provide A Valid Arguments");
    }

    let temp = {};
    let result = [];
    let tempArray = array1.concat(array2);
    for (let i = 0; i < tempArray.length; i++) {
        let string = tempArray[i];
        temp[string] ? (temp[string] += 1) : (temp[string] = 1);
    }
    for (let [key, value] of Object.entries(temp)) {
        if (value === 1) {
            result.push(key);
        }
    }
    return result;
}

// function diffArray(array1, array2) {
//   return array1
//     .concat(array2)
//     .filter(item => !array1.includes(item) || !array2.includes(item));
// }

console.log(
    diffArray(
        [1, "calf", 3, "piglet"], [7, "filly"]
    )
);

