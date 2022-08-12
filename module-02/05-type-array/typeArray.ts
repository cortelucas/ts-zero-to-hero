/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Uso de Colchetes:
const fruits: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(fruits);
console.log(fruits[2]);

// ==> Exemplo 02 - Array Object (Objeto Array):
const arrayFruits: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(arrayFruits);
console.log(arrayFruits[3]);

// ==> Exemplo 03 - Adicionando mais strings com método 'push'
const languages: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(languages);
languages.push('Mandarim');
console.log(languages);
languages.push('Italiano');
console.log(languages);

// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
const arrayLanguages: Array<string> = [
  'Português',
  'Inglês',
  'Espanhol',
  'Francês',
];
console.log(arrayLanguages.length);

// ==> Exemplo 05 - Exemplo de Array com Spread Operator
let numbersList = [0, 1, 2, 3, 4, 5];
numbersList = [...numbersList, 6, 7, 8, 9, 10];

console.log(numbersList);

// ==> Exemplo 06 - Exemplo de Array com laço de iteração
const programmingLanguages: string[] = ['JavaScript', 'Python', 'PHP', 'C#'];

function showLanguages(languages: string[]) {
  for (let i = 0; i < languages.length; i++) {
    console.log(programmingLanguages[i]);
  }
}

showLanguages(programmingLanguages);
