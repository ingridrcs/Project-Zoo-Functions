const data = require('../data/zoo_data');
// Source: Monitoria do Thales em que explicou como usar o reduce.
const ent = [{ name: 'ingrid', age: 5 }];
function countEntrants(entrants) {
  // seu código aqui
  const countAge = entrants.reduce((acc, { age }) => {
    if (age < 18) acc.child += 1;
    if (age >= 18 && age < 50) acc.adult += 1;
    if (age >= 50) acc.senior += 1;
    return acc;
  },
  { child: 0, adult: 0, senior: 0 });
  return countAge;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants == null) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const count = countEntrants(entrants);
  const priceChild = count.child * 20.99;
  const priceAdult = count.adult * 49.99;
  const priceSenior = count.senior * 24.99;
  const total = priceChild + priceAdult + priceSenior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
