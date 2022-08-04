
/**
 * arquivo: booleanType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01
let taskCompleted: boolean = true
let taskOpen: boolean = false

console.log(taskCompleted)
console.log(taskOpen)

// ==> Exemplo 02
let complete: boolean = true

if (!complete) {
    console.log('Tarefa foi concluída com sucesso!')
} else {
    console.log('Tarefa Pendente!');
}