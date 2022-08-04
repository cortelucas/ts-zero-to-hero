/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Single Quotes
var completeName = 'Lucas Corte';
console.log(completeName);
// ==> Exemplo 02 - Double Quotes
var occupation = "Consultor de Soluções Digitais II";
console.log(occupation);
// ==> Exemplo 03 - Back Ticks
var companyName = 'Capgemini';
var employeeData = "Seja bem-vindo ".concat(completeName, "! Voc\u00EA ser\u00E1 ").concat(occupation, " na empresa ").concat(companyName);
console.log(employeeData);
