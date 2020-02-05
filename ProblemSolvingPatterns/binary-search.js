'use strict'

//THE ARRAY SHOULD BE SORTED OTHERWISE WON"T WORK
//the idea is divide and conquer , split (pick pivot point) the array and see 
//where is your result split again and again till you reach result
exports.binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}