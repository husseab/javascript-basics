function getNthElement(index, array) {

return array[index % array.length];
  
};

function arrayToCSVString(array) {
  return array.join();
  
}

function csvStringToArray(string) {
  return string.split(',');
};

const addToArray = (a, b) => {
  
  b.push(a);
  
}

const addToArray2 = (a, b) => {
NewArray = [...b];
 NewArray.push(a);
 return NewArray

};

const removeNthElement = (a, b) => {
  b.splice(a, 1,)
};

const numbersToStrings = numbers => {
  alpha = numbers.map(number => {
    return String(number);
  });
  return alpha
};

const uppercaseWordsInArray = strings => {
 alpha = strings.map(strings => { return strings.toUpperCase();})
 return alpha

};

const reverseWordsInArray = strings => {
alpha = strings.map( strings => {return strings.split("").reverse().join("")})

return alpha
};

const onlyEven = numbers => {
  alpha = numbers.filter(numbers => {return numbers % 2 === 0;});
  return alpha
};

const removeNthElement2 = (a, b) => {
  let alpha = [...b]; 
  alpha.splice(a, 1,);
  return alpha
};

const elementsStartingWithAVowel = strings => {
  let alpha = strings.filter( strings => {return strings.match(/^[aeiou]/gi)})
 
  return alpha
};

const removeSpaces = string => {
  alpha = string.replace(/\s/g, '')
  return alpha
};

const sumNumbers = numbers => {
 alpha = numbers.reduce((previousValue, currentValue) => {return previousValue + currentValue}, 0)
 return alpha
};

const sortByLastLetter = strings => {
 let alpha = strings.map( strings => {return strings.split("").reverse().join("")});
 let  beta = [...alpha];
  beta.sort();
  let ArrayB = [...beta].map( beta => {return beta.split("").reverse().join("")});
  
  return ArrayB
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
