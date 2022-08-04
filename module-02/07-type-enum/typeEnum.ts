/**
 * arquivo: enumType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01: Numeric Enums (Enums Numérico)
enum Language {
  Portuguese,
  Spanish,
  English,
  French,
}
console.log(Language)

// ==> Exemplo 02: String Enums
enum Day {
  Monday = 'SEG',
  Tuesday = 'TER',
  Wednesday = 'QUA',
  Thursday = 'QUI',
  Friday = 'SEX',
  Saturday = 'SAB',
  Sunday = 'Dom'
}
console.log(Day)

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)
/*const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}
function comida(c: Comida) {
  return 'Comidas muito apetitosas!'
}
console.log(comida(Comida.Pizza))
console.log(comida(Comida.Churrasco))
console.log(comida(5))*/

const enum Food {
  Hamburger = 'Hambúrguer',
  Pasta = 'Massa',
  Pizza = 'Pizza',
  Pie = 'Torta',
  Barbecue = 'Churrasco',
}

function food(c: Food) {
  return `${c} é uma comida muito apetitosa!`
}

console.log(food(Food.Pizza))
console.log(food(Food.Barbecue))
// console.log(comida(5))

// ==> Exemplo 04: Quando usar enum?!
enum Task {
  Todo,
  Progress,
  Done,
}

const finishedTask = {
  id: 1,
  status: Task.Done,
  description: 'Parabéns! Tarefa concluída com sucesso!',
}

if (finishedTask.status === Task.Done) {
  console.log('Enviar e-mail: Tarefa Concluída!')
}
