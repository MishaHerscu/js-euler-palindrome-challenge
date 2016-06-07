'use strict';

const checkString = function(stringArray){

  let answer = true;

    for(let i = 0; i < stringArray.length; i++){
      if(stringArray[i] !== stringArray[stringArray.length-1-i]){
        answer = false;
      }
    }

  return answer;
};

const check = function(number, bases){

  let baseArrays = [];
  for(let i = 0; i < bases.length; i++){
    baseArrays[i] = number.toString(bases[i]).split('');
  }

  let baseChecks = [];
  for(let i = 0; i < bases.length; i++){
    baseChecks[i] = checkString(baseArrays[i]);
  }

  let answer = true;
  for(let i = 0; i < bases.length; i++){
    if(baseChecks[i] === false){
      answer = false;
    }
  }

  return answer;
};

const findSumOfPalindromes = function(limit, bases) {

  // for true answers
  let palindromes = [];

  // loop through numbers to check them
  for(let i = 1; i <= limit; i++){
    if(check(i, bases) === true){
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

let answer = findSumOfPalindromes(1000000, [2,8,10]);
console.log(answer);

module.exports = () => {
  return true;
};
