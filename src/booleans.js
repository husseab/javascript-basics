function negate(a) {
 return !a
};

function both(a, b) {
  return a && b
};

function either(a, b) {
  return a || b
};

function none(a, b) {
  return !a && !b
};

const one = (a, b) => {
  if(a && !b) return true;
  if(!a && b) return true;
  return false;
};

const truthiness = (a) => {
return Boolean(a)
};

function isEqual(a, b) {
  return Boolean(a===b)
};

function isGreaterThan(a, b) {
  return Boolean(a>b)
};

function isLessThanOrEqualTo(a, b) {
  return Boolean(a<=b)
};

function isOdd(a) {
  if (a%2 == 0)
        return false;
    else
        return true;
};

function isEven(a) {
  if (a%2 == 0)
  return true;
else
  return false;
};

function isSquare(a) {
  if (a < 0){
    return false;
  }
  
  if(Number.isInteger(Math.sqrt(a))){
    return true;
  }else{
    return false;
  }
};

function startsWith(a, b) {
  if (b.charAt(0) == a) { return true }
  else { return false }
};

function containsVowels(a) {

  return count = Boolean(a.match(/[aeiou]/gi));
};

function isLowerCase(a) {
  return count = Boolean(!a.match(/[A B C D E F G H I J K L M N O P Q R S T U V W X Y Z]/g));
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
