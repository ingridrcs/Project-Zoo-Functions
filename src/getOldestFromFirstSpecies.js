const data = require('../data/zoo_data');

const { employees, species } = data;
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findId = employees.find((item) => item.id === id);
  const animal = findId.responsibleFor.find((item) => item);
  const findAnimal = species.find((item) => item.id === animal);
  const oldest = findAnimal.residents.sort((a, b) => b.age - a.age).find((item) => item);
  const final = Object.values(oldest);
  return final;
}
getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = getOldestFromFirstSpecies;
