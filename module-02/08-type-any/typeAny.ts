/**
 * arquivo: anyType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Any'
 * data: 08/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
 */

// ==> Exemplo 01: Tipo Any
const a: any = 28;
const b: any = ['Lucas'];

const result = a + b;
console.log(result);

// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';
console.log(frase);*/

// ==> Exemplo 03: Quando devemos usar o tipo any?!

const form: { [fieldForm: string]: any } = {
  nome: 'Lucas',
  sobrenome: 'Corte',
  idade: 34,
};

console.log(form);
