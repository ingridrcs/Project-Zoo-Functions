const data = require('../data/zoo_data');

const { employees } = data;
// Source: uso do includes: https://ricardo-reis.medium.com/includes-2ec36d4c447f e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// Source: Resolução do requisito através das dúvidas dos alunos durante as monitorias.
function isManager(id) {
  // seu código aqui
  const verifyId = employees.some((item) => item.managers.includes(id));
  return verifyId;
}

function finalName(id) {
  const findId = employees.filter((item) => item.managers.includes(id));
  const final = findId.map((item) => `${item.firstName} ${item.lastName}`);
  return final;
}
function getRelatedEmployees(managerId) {
  // seu código aqui
  const newManager = isManager(managerId);
  if (newManager === true) {
    const final = finalName(managerId);
    return final;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
