/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Single Quotes
const completeName = 'Lucas Corte';
console.log(completeName);

// ==> Exemplo 02 - Double Quotes
const occupation = 'Consultor de Soluções Digitais II';
console.log(occupation);

// ==> Exemplo 03 - Back Ticks
const companyName = 'Capgemini';

const employeeData = `Seja bem-vindo ${completeName}! Você será ${occupation} na empresa ${companyName}`;

console.log(employeeData);
