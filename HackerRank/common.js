const anagram = (str, str2) => {
  const string = str.length > str2 ? str : str2;
  const string2 = str.length > str2 ? str2 : str;
  for (let value of string.toLowerCase()) {
    if (
      !(
        string2
          .toLowerCase()
          .split("")
          .indexOf(value) != -1
      )
    ) {
      console.log("Not Anagram");
      return false;
    }
  }
  for (let value of string2.toLowerCase()) {
    if (
      !(
        string
          .toLowerCase()
          .split("")
          .indexOf(value) != -1
      )
    ) {
      console.log("Not Anagram");
      return false;
    }
  }
  console.log("Anagram")
  return true;
};

const palindrome = str => {
    let string = str.toLowerCase().split("");
    return string.reverse().join("")
}

const fizzBuzz = num => {
    for(let i=1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }
        else if(i % 3 === 0){
            console.log('Fizz')
        }
        else if(i % 5 === 0){
            console.log('Buzz')
        }
        else {
            console.log(i)
        }
    }
}

const findVowels = str => {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for(let letter of str.toLowerCase()) {
        if(vowels.includes(letter)){
            count++
        }
    }
    return count;
}

const fib = num => {
    if(num < 2) return num

    return fib(num - 1) + fib(num - 2)
}

// console.log(anagram("123", "abc"));
// console.log(palindrome("welcome"));
// console.log(fizzBuzz(50));
// console.log(findVowels("hello"));
// console.log(fib(3));
