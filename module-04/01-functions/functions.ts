/**
 * arquivo: function.ts
 * descrição: arquivo responsável por ensinar como usar o functions no Typescript
 * data: 10/08/2019
 * author: Lucas Corte <@cortelucas>
 */

export {};

// ==> Exemplo 01 - Functions (Named function)
function add(x: number, y: number): number {
  return x + y;
}

const result: number = add(2, 2);
console.log(result);

// ==> Exemplo 02 - Função Anônima (Function Expression)
const greet = function (message: string) {
  return message;
};

console.log(greet('Olá, Developers!'));

// ==> Exemplo 03 - (Arrow Function Expression)
const greetArrowFunction = (message: string) => {
  return message;
};

console.log(greetArrowFunction('Fala, Pessoal!'));

// ==> Exemplo 04 - (Function constructor)
const greetFunctionConstructor = new Function(
  'mensagem',
  'return "Fala " + mensagem',
);

console.log(greetFunctionConstructor('Galera!'));
