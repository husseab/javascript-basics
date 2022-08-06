const createPerson = (name, age) => {
 return {name:name, age:age}
  
};

const getName = a => {
return (a.name)
};

const getProperty = (property, object) => {
  return (object[property])
};

const hasProperty = (property, object) => {
  return Boolean(property in object)
  
};

const isOver65 = person => {
  return Boolean(person.age > 65)
};

const getAges = people => {

  let alpha = people.filter( age => {return people[age]})
  return alpha
  
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
