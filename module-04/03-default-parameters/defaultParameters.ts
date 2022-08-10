/**
 * arquivo: defaultParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Default Parameters' em funções no no Typescript
 * data: 10/08/2019
 * author: Lucas Corte <@cortelucas>
 */

export {};

// ==> Exemplo 01 - Default Parameters
function calculateDiscount(price: number, discount = 0.08) {
  return price * (1 - discount);
}

console.log(calculateDiscount(100)); //92

// ==> Exemplo 02
function showMessage(message: string, greet = 'Fala, pessoal!') {
  return `${greet} ${message}!`;
}

console.log(showMessage('JavaScript Developers'));

// ==> Exemplo 03
function showName(name: string, surname = 'Corte') {
  return `${name} ${surname}`;
}

const result_1 = showName('Lucas');
const result_2 = showName('Lucas', undefined);
// const result_3 = showName('Lucas', 'dos Santos', 'Senhor');
const result_4 = showName('Lucas', 'dos Santos');

console.log(result_1);
console.log(result_2);
// console.log(result_3);
console.log(result_4);
