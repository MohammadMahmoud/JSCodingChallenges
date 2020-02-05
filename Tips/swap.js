'use strict'

function swapArrayElement(ar) {
    let temp = ar[0]
    ar[0] = ar[2]
    ar[2] = temp;
    return ar;
}

console.log(swapArrayElement([1,3,4,5,2]))