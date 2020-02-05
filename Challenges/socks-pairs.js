'use strict'

// Complete the socksPairs function below.
function socksPairs(n, ar) {
    //declare empty object 
    let uniquePairNumber = {}
    //declare empty pair number
    let pairs = 0;
    //loop through array by n
    for(let i=0;i < n; i++){
        let pair = ar[i]
        // if object is new to result add it
        if(!uniquePairNumber[pair]) {
            uniquePairNumber[pair] =+ 1
        }
       // if object is exist remove it and increase count number
        else {
            delete uniquePairNumber[pair]
            pairs++;
        }
    }
     //return pair number
     return pairs;

}

console.log(socksPairs(6 , [10 ,10 ,20, 20 , 30 , 30,50] ) )