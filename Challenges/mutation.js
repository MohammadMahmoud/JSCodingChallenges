"use strict";

function mutation(array) {
    if (!array || typeof array !== "object") {
        throw new Error("Please Provide A Valid Arguments");
    }
    let word1 = {};
    let result;
    for(let i=0; i < array[0].length; i++){
        let letter = array[0][i]
        word1[letter] ? word1[letter] += 1 : word1[letter] = 1;
    };

    for(let i=0; i < array[1].length; i++){
        let letter = array[1][i]
        result = !!word1[letter];
    }

    return result
}
console.log(mutation(["hello" , "hey"]));