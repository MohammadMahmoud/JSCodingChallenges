'use strict'

//looping through each element and return index of this element
exports.linearSearch = ((arr , val) => {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === val) return i
    }
    return -1
})