'use strict';

const checkString = function(string){

  let answer = true;

    for(let i = 0; i < string.length; i++){
      if(string[i] !== string[string.length-1-i]){
        answer = false;
      }
    }

  return answer;
};

const check = function(number){
  let baseTen = number.toString(10).split('');
  let baseTwo = number.toString(2).split('');

  // check baseTwo
  let baseTwoPalindrome = checkString(baseTwo);
  let baseTenPalindrome = checkString(baseTen);

  if(baseTenPalindrome === true && baseTwoPalindrome === true){
    return true;
  } else{
    return false;
  }
};

const findSumOfPalindromes = function(limit) {

  // for true answers
  let palindromes = [];

  // loop through numbers to check them
  for(let i = 1; i <= limit; i++){
    if(check(i) === true){
      palindromes.push(i);
    }
  }

  // sum and return palindromes
  let sum = 0;
  console.log(palindromes);
  for (let i = 0; i < palindromes.length; i++){
    sum += palindromes[i];
  }
  return sum;
};

let answer = findSumOfPalindromes(1000000);
console.log(answer);

module.exports = () => {
  return true;
};
