"use strict";

function bubbleSort(ar) {
  //if no Swaps done we stop from going over and over
  let noSwaps;
  //loop through array in order to compare it times of array length
  for (let i = ar.length; i > 0; i--) {
    noSwaps = true;
    //nested loop in order to compare every element with next element
    for (let j = 0; j < i - 1; j++) {
      //swap element if it is left > right
      if (ar[j] > ar[j + 1]) {
        let temp = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = temp;
        noSwaps = false;
      }
    }
    //stop it from going over and over without
    if (noSwaps == true) break;
  }
  //return sorted array
  return ar;
}

console.log(bubbleSort([1, 4, 3, 5, 1000]));
