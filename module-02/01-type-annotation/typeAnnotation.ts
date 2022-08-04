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
const firstName: string = 'Lucas'
const lastName: string = 'Corte'
console.log(`Olá ${firstName} ${lastName}`)

// ==> Arrays [Type Annotations]
const animals: string[] = ['elefante', 'gato', 'cachorro', 'passaro']
console.log(animals)

// ==> Objetos [Type Annotations]
let car: {
  name: string,
  year: number,
  price: number,
}

car = {
  name: 'Ford Edge',
  year: 2020,
  price: 100000,
}

console.log(car)

// ==> Functions [Type Annotation]
function multiply(x: number, y: number): number {
  return x * y
}

console.log(multiply(2, 3))
