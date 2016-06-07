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
    baseArrays[i] = number.toString(bases[Number(i)]).split('');
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

  let basesArray = bases;

  // if you don't give it an array of bases, it defaults to [10, 2]
  if(basesArray === null || basesArray === undefined){
    basesArray = [10, 2];
  }

  // for true answers
  let palindromes = [];

  // loop through numbers to check them
  for(let i = 1; i <= limit; i++){
    if(check(i, basesArray) === true){
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

let answer = findSumOfPalindromes(1000000, [10, 8, 2]);
console.log(answer);

let testNoBases = findSumOfPalindromes(1000000);
console.log(testNoBases);

module.exports = () => {
  return true;
};
