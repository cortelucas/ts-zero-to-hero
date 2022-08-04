/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
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
// ==> Exemplo 01 - Uso de Colchetes:
var fruits = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(fruits);
console.log(fruits[2]);
// ==> Exemplo 02 - Array Object (Objeto Array):
var arrayFruits = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(arrayFruits);
console.log(arrayFruits[3]);
// ==> Exemplo 03 - Adicionando mais strings com método 'push'
var languages = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(languages);
languages.push('Mandarim');
console.log(languages);
languages.push('Italiano');
console.log(languages);
// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
var arrayLanguages = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(arrayLanguages.length);
// ==> Exemplo 05 - Exemplo de Array com Spread Operator
var numbersList = [0, 1, 2, 3, 4, 5];
numbersList = __spreadArray(__spreadArray([], numbersList, true), [6, 7, 8, 9, 10], false);
console.log(numbersList);
// ==> Exemplo 06 - Exemplo de Array com laço de iteração
var programmingLanguages = new Array('JavaScript', 'Python', 'PHP', 'C#');
function showLanguages(languages) {
    for (var i = 0; i < languages.length; i++) {
        console.log(programmingLanguages[i]);
    }
}
showLanguages(programmingLanguages);
