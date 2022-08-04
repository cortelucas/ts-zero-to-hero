/* eslint-disable prettier/prettier */
/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
var lucas;
lucas = ['Lucas Corte', 'Consultor de Soluções Digitais II', 28];
// lucas = [28, 'Consultor de Soluções Digitais II', 'Lucas Corte']
console.log(lucas);
// ==> Exemplo 02 - Acessando o valor da Tupla
var person;
person = ['Lucas Corte', 'Consultor de Soluções Digitais II', 28];
console.log(person[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
var personLucas = ['Lucas Corte', 'Consultor de Soluções Digitais II', 28];
console.log(personLucas);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
var frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log.apply(console, frutas);
//==> Exemplo 05 - Lista Heterogênea de Tupla:
var listaDeFrutas = __spreadArray([5, true], frutas, true);
console.log(listaDeFrutas);
// ==> Exemplo 06 - Uso de função com Tuplas
function showPersons(names, ages) {
    return __spreadArray(__spreadArray([], names, true), ages, true);
}
var result = showPersons(['Lucas', 'Jurema'], [28, 68]);
console.log(result);
function createPerson() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    return __spreadArray([], name, true);
}
console.log(createPerson('Lucas', 'Corte'));
console.log(createPerson('Lucas', 'dos Santos', 'Corte'));
