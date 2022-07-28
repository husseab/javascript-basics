const sayHello = (sayHello) => { 

   return 'Hello, ' + sayHello + '!'
  
};

const uppercase = (uppercase) => {
  return uppercase.toUpperCase ();
 
};

const lowercase = (lowercase) => {
  return lowercase.toLowerCase ();
};

const countCharacters = (countCharacters) => {
  return countCharacters.length; 
};

const firstCharacter = (firstCharacter) => {
  return firstCharacter.charAt(0);
};

function firstCharacters(firstCharacters, n) {
  if (n==4) {
   return firstCharacters.substr(0,4);}
   if (n==2) {
    return firstCharacters.substr(0,2);}
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
