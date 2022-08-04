/**
 * arquivo: numberBigint.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo number e bigint'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: <number> https://www.typescriptlang.org/docs/handbook/basic-types.html#number
 * doc referência: <bigint> https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplos: number
var num1 = 23.0;
var num2 = 0x78CF;
var num3 = 383;
var num4 = 49;
console.log('Number - Ponto Flutuante...: ', num1);
console.log('Number - Hexadecimal...: ', num2);
console.log('Number - Octal...: ', num3);
console.log('Number - Binário...: ', num4);
// ==> Exemplos: bigint
var big1 = 9007199254740991n;
var big2 = 9007199254740995n;
;
var big3 = 0x20000000000003n;
var big4 = 9007199254740995n;
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
