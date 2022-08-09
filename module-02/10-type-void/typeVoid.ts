/**
 * arquivo: voidType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'void'
 * data: 09/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#void
 */

// ==> Exemplo 01 - funções:
function logErrorNormalFunction(errorMessage: string): void {
  console.log(errorMessage);
  // return errorMessage;
}

logErrorNormalFunction('Required field - Name!');

// ==> Exemplo 02 - funções:
const logErrorArrowFunction = (errorMessage: string): void => {
  console.log(errorMessage);
};

logErrorArrowFunction('Required field - Surname');

// ==> Exemplo void: variáveis

let varExampleVoid: void;
// variavelExemploVoid = 1;
// varExampleVoid = null;
// varExampleVoid = undefined;

console.log(varExampleVoid);
