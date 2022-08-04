/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Variáveis [Type Annotations]
var firstName = 'Lucas';
var lastName = 'Corte';
console.log("Ol\u00E1 ".concat(firstName, " ").concat(lastName));
// ==> Arrays [Type Annotations]
var animals = ['elefante', 'gato', 'cachorro', 'passaro'];
console.log(animals);
// ==> Objetos [Type Annotations]
var car;
car = {
    name: 'Ford Edge',
    year: 2020,
    price: 100000
};
console.log(car);
// ==> Functions [Type Annotation]
function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 3));
