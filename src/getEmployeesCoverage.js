const data = require('../data/zoo_data');

const { species, employees } = data;

function checkName(obj) {
  const identify = employees.find((item) =>
    item.firstName === obj.name || item.lastName === obj.name || item.id === obj.id);
  if (identify === undefined) {
    throw new Error('Informações inválidas');
  }
  return identify;
}

function information(obj) {
  const newObj = {
    id: '',
    fullName: '',
    species: [],
    locations: [],
  };
  employees.forEach((index) => {
    if (index.firstName === obj.name || index.lastName === obj.name || index.id === obj.id) {
      newObj.id = index.id;
      newObj.fullName = `${index.firstName} ${index.lastName}`;
      newObj.species = species.filter((item) => index.responsibleFor.includes(item.id))
        .map((item) => item.name);
      newObj.locations = species.filter((item) => index.responsibleFor.includes(item.id))
        .map((item) => item.location);
    }
  });
  return newObj;
}
function getEmployeesCoverage(obj) {
  // seu código aqui
  if (typeof obj === 'undefined') {
    const allEmployees = employees.reduce((acc, item) => {
      acc.push(information(item));
      return acc;
    }, []);
    return allEmployees;
  }
  if (checkName(obj)) {
    const finalObj = information(obj);
    return finalObj;
  }
}
module.exports = getEmployeesCoverage;
