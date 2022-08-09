/* eslint-disable prefer-const */
/**
 * arquivo: nullUndefinedType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre os tipos 'null' e 'undefined'
 * data: 09/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html
 */

// ==> Exemplo 01: Null

let varTestNull = null;

console.log(varTestNull);
console.log(typeof varTestNull);

// ==> Exemplo 02: Undefined

let varTestUndefined;

console.log(varTestUndefined);
console.log(typeof varTestUndefined);

// ==> Diferenças e Similaridades: Null vs Undefined

console.log('Exemplo 01:', null == undefined);
console.log('Exemplo 02:', null === undefined);
