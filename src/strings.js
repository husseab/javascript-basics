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

const firstCharacters = (string, n) => { 
  let alpha = string.slice(0, n);
  return alpha
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
