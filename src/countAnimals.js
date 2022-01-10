const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Source: https://www.delftstack.com/pt/howto/javascript/array-to-objects-javascript/
// Aula do course sobre map em que aparece os exemplos de exercícios com map.
// Monitoria do Thales para dúvidas do projeto em que ele explicou sobre o Object.keys nesssa questão
// Monitoria com dúvidas dos alunos em que pude ver outra forma de solucionar a questao
/* const animalsNames = species.map((item) => item.name);
    const count = species.map((item) => item.residents.length);
    const all = (animals, quant) => animals.map((item, index) => `${item}: ${quant[index]} `);
    const finalArray = all(animalsNames, count).sort();
    console.log(finalArray);
    Tentei aplicar o reduce no final para transformar o array em objeto, porém não consegui . */
function countAnimals(animal) {
  // seu código aqui

  if (animal == null) {
    const order = species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
    return order;
  }
  if (Object.keys(animal).length === 1) {
    const count = species.find((item) => item.name === animal.specie).residents.length;
    return count;
  }
  const totalFinal = species.find((item) => item.name === animal.specie).residents
    .filter((index) => index.sex === animal.sex).length;
  return totalFinal;
}
module.exports = countAnimals;
