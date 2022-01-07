const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animais = species.find((item) => item.name === animal);
  const residentes = animais.residents.every((idade) => idade.age > age);
  return residentes;
}
// getAnimalsOlderThan('penguins',10);

module.exports = getAnimalsOlderThan;
