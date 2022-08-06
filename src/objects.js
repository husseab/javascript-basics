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
let alpha =  people.map(person => {return person.age})
return alpha
  
};

const findByName = (name, people) => {
  let alpha =  people.find(person => person.name == name)
  return alpha
};

const findHondas = cars => {
  let alpha =  cars.filter(carName => carName.manufacturer == 'Honda')
  return alpha
};

const averageAge = people => {
  let alpha =  people.map(person => {return person.age})
  let beta =  alpha.reduce((sum, value) => {
    return sum + value;
}, 0) / people.length;
  return beta
};

const createTalkingPerson = (name, age) => {
  return {
    age: age,
    introduce: function (intro) {return `Hi ${intro}, my name is ${name} and I am ${age}!`},
    name:name,
  }
  
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
