"use strict";

// count valleys up and down
function countingValleys(n, s) {
  //count total up and down
  let total = 0;
  let traversedValleys = 0;
  //loop through string
  for (let i = 0; i < s.length; i++) {
    //if char of string = U increase total
    if (s[i] == "U") {
      if (++total === 0) traversedValleys++;
    } else {
      //else decrease total
      total--;
    }
  }
  //return total
  return traversedValleys;
}

console.log(countingValleys(6, "DDUUDD"));
