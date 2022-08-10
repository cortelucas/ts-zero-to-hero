/* eslint-disable prefer-const */
/**
 * arquivo: optionalParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Optional Parameters' em funções no no Typescript
 * data: 10/08/2019
 * author: Lucas Corte <@cortelucas>
 */

export {};

// ==> Exemplo 01 - Optional Parameter
function showPersonData(id: number, name: string, email?: string) {
  console.log(`
    ID: ${id}
    Nome: ${name}
    Email: ${email === undefined ? '---' : email}`);
}

showPersonData(775544, 'Lucas Corte');
showPersonData(994411, 'Andressa Karino', 'ak@example.com');

// ==> Exemplo 02
function logMessage(message: string, userId?: number) {
  const timeLog = new Date().toLocaleTimeString();

  console.log(timeLog, message, userId || 'Usuário(a) não conectado(a)');
}

logMessage('Atualizar Página');
logMessage('Usuário(a) entrou com sucesso');

// ==> Exemplo 03
type TypePerson = {
  id: number;
  name: string;
  age?: number;
  email?: string;
};

let personLucas: TypePerson = {
  id: 112233,
  name: 'Lucas Corte',
};

let personAndressa: TypePerson = {
  id: 994411,
  name: 'Andressa Karino',
  age: 28,
  email: 'ak@email.com',
};

console.log(personLucas);
console.log(personAndressa);
