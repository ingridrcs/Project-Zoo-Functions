const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName == null) {
    return {};
  }
  const search = employees.find((a) => a.firstName === employeeName || a.lastName === employeeName);
  console.log(search);
  return search;
}
getEmployeeByName();
module.exports = getEmployeeByName;
