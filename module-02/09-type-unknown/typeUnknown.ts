/**
 * arquivo: unknownType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Uknown'
 * data: 09/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
 */

// ==> Exemplo 01: Tipo Unknown
let varUnknown: unknown;
const arrayValues: Array<unknown> = [true, 123, [], 'Oi, tudo bem?'];

arrayValues.map((value) => {
  varUnknown = value;
  console.log(varUnknown);
});

// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
/*let valor: unknown;
let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;*/

// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'
let somethingAny: any;
let somethingUnknown: unknown;
// console.log(somethingAny.toFixed());

if (typeof somethingUnknown === 'number') {
  console.log(somethingUnknown.toFixed());
}
