'use strict'

function minimumBribes(q) {
    let counter = 0;
    let currentPosition = q.length - 1;
    let log = '';
    let bribes;
  
    while (currentPosition >= 0) {
      const current = q[currentPosition];
      const orderPosition = currentPosition + 1;
  
      bribes = current - orderPosition;
  
      if (bribes >= 3) {
        console.log("Too chaotic")
        return;
      }
  
      const briberPosition = current - 2;
  
      for (let comparePosition = Math.max(0, briberPosition); comparePosition < currentPosition; comparePosition++) {
        const compare = q[comparePosition];
        
        if (compare > current) {
          counter++;
        }
      }
  
      currentPosition--;
    }
  
    console.log(counter);
  }