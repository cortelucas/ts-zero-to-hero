/**
 * arquivo: neverType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'never'
 * data: 09/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
 */

// ==> Exemplo 01: Never - Throw Exception
function error(message: string): never {
  throw new Error(message);
}

console.log(error('Erro de Mensagem - 01'));

// ==> Exemplo 02: Never inferido automaticamente
function rejectMessage() {
  return error('Error de Mensagem - 02');
}

console.log(rejectMessage());

// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'
const infiniteLoop = function loop() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('Oi, Developers!');
  }
};

// console.log(infiniteLoop());

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'

const somethingVoid: void = null;

// ==> dará erro! (// Error: Type 'null' is not assignable to type 'never')
// const algumaCoisaNever: never = null;

//console.log(somethingVoid);
//console.log(algumaCoisaNever);
