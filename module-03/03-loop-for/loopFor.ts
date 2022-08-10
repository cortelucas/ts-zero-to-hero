/* eslint-disable prettier/prettier */
/**
 * arquivo: loop-for.ts
 * descrição: arquivo responsável por ensinar como usar o loop for no Typescript
 * data: 10/08/2022
 * author: Lucas Corte <@cortelucas>
 */

// ==> Exemplo 01: loop for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// ==> Exemplo 02: for ...of - (retorna uma coleção de matriz, lista ou tupla)
const numbers = [10, 20, 30, 40, 50];

for (const i of numbers) {
  console.log(i);
}

// ==> Exemplo 03: for ...in - (retorna uma coleção de matriz, lista ou tupla)
const arrayNumbers = [5, 4, 3, 2, 1, 0]

// for (const i in arrayNumbers) {
//   console.log(i);
// }

// sort()
const numericOrder: number[] = arrayNumbers.sort();
console.log(numericOrder);
