const data = require('../data/zoo_data');

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
// Source: Consegui resolver o requisito através da monitoria com a Carol.
function getSpeciesByIds(...ids) {
  // seu código aqui
  const names = ids.map((id) => data.species.find((identidade) => identidade.id === id));
  return names;
  // const newaa = data.species.filter((objeto)=> ids.includes(objeto.id));
}
getSpeciesByIds(lionId, ottersId);
module.exports = getSpeciesByIds;
