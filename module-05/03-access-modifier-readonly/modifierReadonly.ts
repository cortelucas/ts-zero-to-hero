/* eslint-disable prettier/prettier */
/**
 * arquivo: readonlyModifier.ts
 * descrição: arquivo responsável por ensinar como usar o 'Modificadores de
 * Acesso Readonly' no Typescript
 * data: 11/08/2022
 * author: Lucas Corte <@cortelucas>
 */

export { };

// ==> Exemplo 01
class Employee {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

const employee = new Employee(new Date(1986, 10, 24));
console.log(employee);

// ==> Exemplo 02
class Functionary {
  constructor(readonly birthDate: Date) {
    this.birthDate = birthDate;
  }
}

const functionary = new Functionary(new Date(1986, 10, 24));
console.log(functionary);

// ==> Exemplo 03

class Official {
  name: string;
  readonly officialCode: number;

  constructor(name: string, code: number) {
    this.officialCode = code;
    this.name = name;
  }
}

const func = new Official('Lucas', 112233);
func.name = 'Lucas Corte';
// func.employeeCode = 113344;

console.log(func);

// ==> Exemplo 04 - Interface

interface IEmployee {
  employeeCode: number;
  employeeName: string;
}

const employeeLucas: Readonly<IEmployee> = {
  employeeCode: 506699,
  employeeName: 'Lucas',
};

console.log(employeeLucas);

const employeeAndressa: IEmployee = {
  employeeCode: 5067000,
  employeeName: 'Andressa',
};

console.log(employeeAndressa);

employeeAndressa.employeeCode = 887653;
employeeAndressa.employeeName = 'Karino';

console.log(employeeAndressa);
