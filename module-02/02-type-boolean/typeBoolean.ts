/**
 * arquivo: booleanType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
 * data: 04/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01
const taskCompleted = true;
const taskOpen = false;

console.log(taskCompleted);
console.log(taskOpen);

// ==> Exemplo 02
const complete = true;

if (!complete) {
  console.log('Tarefa foi concluída com sucesso!');
} else {
  console.log('Tarefa Pendente!');
}
