/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/**
 * arquivo: ifElse.ts
 * descrição: arquivo responsável por ensinar como usar instrução if-else no Typescript
 * data: 10/08/2022
 * author: Lucas Corte <@cortelucas>
*/

export { };

// ==> Exemplo 01 - Uso do if
const maxNumber = 100;
let cont = 100;

if (cont > maxNumber) {
  cont ++;
}
console.log(cont);

// ==> Exemplo 02 - Uso do if
// const permission = 18;

// if (permission >= 18) {
//   console.log('Você tem permissão para dirigir!');
// }

// ==> Exemplo 03 - Uso do if-else
const permission = 18;

if (permission >= 18) {
  console.log('Você tem permissão para dirigir!');
} else {
  console.log('Você não tem permissão para dirigir!');
}

// ==> Exemplo 04 - if... else if
let discount: number;

let purchaseValue = 14;

if (purchaseValue > 0 && purchaseValue <= 5) {
  discount = 5;
} else if (purchaseValue > 5 && purchaseValue <= 10) {
  discount = 10;
} else {
  discount = 15;
}

console.log(`Você teve um desconto de...: ${discount}% desconto`);

// ==> Exemplo 05 - Ternário (? :) - if...else
/*const votingAge = 18;
if (votingAge >= 18) {
  console.log('Você é elegível para votar.')
} else {
  console.log('Você não é elegível para votar.')
}*/

// ==> Ternário
const votingAge = 16;
const eligibleVote = votingAge >= 18 ? 'Você é elegível para votar.' : 'Você não é elegível para votar.';
console.log(eligibleVote);
