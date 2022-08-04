/* eslint-disable prettier/prettier */
/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let lucas: [string, string, number]
lucas = ['Lucas Corte', 'Consultor de Soluções Digitais II', 28]
// lucas = [28, 'Consultor de Soluções Digitais II', 'Lucas Corte']

console.log(lucas)

// ==> Exemplo 02 - Acessando o valor da Tupla
let person: [string, string, number]
person = ['Lucas Corte', 'Consultor de Soluções Digitais II', 28]
console.log(person[1])

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let personLucas: [name: string, position: string, age: number] = ['Lucas Corte', 'Consultor de Soluções Digitais II', 28]
console.log(personLucas)


// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let frutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(...frutas)

//==> Exemplo 05 - Lista Heterogênea de Tupla:
let listaDeFrutas: [number, boolean, ...string[]] = [5, true, ...frutas]
console.log(listaDeFrutas)

// ==> Exemplo 06 - Uso de função com Tuplas
function showPersons(names: string[], ages: number[]) {
    return [...names, ...ages]
}

let result = showPersons(['Lucas', 'Jurema'], [28, 68])
console.log(result)

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função
type TypeName = 
        | [firstName: string, lastName: string]
        | [firstName: string, middleName: string, lastName: string]

function createPerson(...name: TypeName) {
    return [...name]
}

console.log(createPerson('Lucas', 'Corte'))
console.log(createPerson('Lucas', 'dos Santos', 'Corte'))
