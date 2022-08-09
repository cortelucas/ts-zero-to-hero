/* eslint-disable prettier/prettier */
/**
 * arquivo: objectType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'object'
 * data: 09/08/2022
 * author: Lucas Corte <@cortelucas>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/objects.html
 */
export { };

// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const person = {
  name: 'Lucas',
  lastName: 'Corte',
  age: 28,
  function: 'Consultor de soluções digitais',
};
console.log(person);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(employee: { name: string }) {
  return 'Seja bem-vinda ' + employee.name;
}

console.log(onboarding01({ name: 'Lucas Corte' }));

// ==> Exemplo 03 -> object nomeados
interface Person {
  name: string;
  function: string;
}

function onboarding02(person: Person) {
  return `Seja bem-vindo(a) ${person.name}! Sua função na empresa será ${person.function}`;
}
console.log(onboarding02({ name: 'Lucas Corte', function: 'Consultor de soluções digitais' }));

// ==> Exemplo 04 -> object como type alias
type TypePerson = {
  name: string;
  function: string;
  language: string;
}

function onboarding03(person: TypePerson) {
  return `Seja bem-vindo(a) ${person.name}! Sua função na empresa será ${person.function}. Trabalhará com a linguagem ${person.language}`;
}

console.log(onboarding03({ name: 'Lucas Corte', function: 'Consultor de Soluções digitais', language: 'JavaScript/Typescript' }));


// ==> Exemplo 05 -> usando optional no object
interface IPerson {
  name: string;
  function: string;
  language: string;
  email?: string;
}

function onboarding04(person: IPerson) {
  return `Seja bem-vindo(a) ${person.name}! Sua função na empresa será ${person.function}. Trabalhará com a linguagem ${person.language}`;
}

console.log(onboarding04({ name: 'Lucas Corte', function: 'Consultor de Soluções digitais', language: 'JavaScript/Typescript' }));

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)
interface IPersonReadonly {
  name: string;
  function: string;
  language: string;
  readonly email: string;
}

function onboarding05(person: IPersonReadonly) {
  return `Seja bem-vindo(a) ${person.name}! Sua função na empresa será ${person.function}. Trabalhará com a linguagem ${person.language}, seu email é ${person.email}`;
}

console.log(onboarding05(
  {
    name: 'Lucas Corte',
    function: 'Consultor de Soluções digitais',
    language: 'JavaScript/Typescript',
    email: 'lucas.corte@email.com'
  }
));

// ==> Exemplo 07 -> tipos de extensões (heranças)
interface Mom {
  name: string;
}

interface Dad {
  lastName: string;
}

interface Son extends Mom, Dad {
  idade: number;
}

const filho: Son = {
  name: 'Lucas',
  lastName: 'Corte',
  idade: 28
}

console.log(filho);

// ==> Exemplo 08 -> Tipos de Interseções
interface Dog {
  type: string;
}

interface Cat {
  type: string;
}

type Animal = Dog & Cat;

const animal: Animal = {
  type: 'Cachorro'
}

console.log(animal);

// Exemplo 09 - Generic Objects

type User = {
  name: string;
  email: string;
}

type Admin = {
  name: string;
  email: string;
  admin: true;
}

const user: User = {
  name: 'Lucas Corte',
  email: 'algumacoisa@gmail.com'
}

const admin: Admin = {
  name: 'Lucas Corte',
  email: 'admin@gmail.com',
  admin: true
}

function acessarSistema<T>(user: T): T {
  return user;
}

console.log(acessarSistema<User>(user));
console.log(acessarSistema<Admin>(admin));
