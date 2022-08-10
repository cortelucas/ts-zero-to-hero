/* eslint-disable prettier/prettier */
/**
 * arquivo: loop-while.ts
 * descrição: arquivo responsável por ensinar como usar o loop for no Typescript
 * data: 23/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

// ==> Exemplo 01 - while
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

// ==> Exemplo 02
let number = 1;

while (number <= 20) {
  if (number % 5 == 0) {
    console.log(`O primeiro número múltiplo de 5 entre 1 a 20 é ${number}`);
    break;
  }
  number++
}

// ==> Exemplo 03 - exemplo mais prático
let countUser = 0;
const user : string[] = ['Lucas', 'Andressa', 'Léo', 'Luiz'];

while (user[countUser]) {
  console.log('Usuário: ', user[countUser]);
  countUser++;
}

// ==> Exemplo 04 - do...while
let countDoWhile = 0;

do {
  console.log(countDoWhile);
  countDoWhile++
} while (countDoWhile < 5)
