/**
 * arquivo: classes.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Classes Typescript
 * data: 11/08/2022
 * author: Lucas Corte <@cortelucas>
 */

// ==> Exemplo 01 - Classes

export {};

class Person {
  name: string;
  surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  completeName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person('Lucas', 'Corte');
console.log(person.completeName());

// ==> Exemplo 02 - Classes (sem constructor)
class Student {
  studentCode: number;
  studentName: string;
}

// Criar um objeto ou a instancia
const student = new Student();

// Inicializar o objeto:
student.studentCode = 8967;
student.studentName = 'Lucas Corte';

// Acessar os campos:
console.log('Código do Estudante: ' + student.studentCode);
console.log('Nome do Estudante: ' + student.studentName);

// ==> Exemplo 03 - Classes (com constructor)
class StudentClass {
  studentCode: number;
  studentName: string;

  // Definir o Construtor
  constructor(studentCode: number, studentName: string) {
    this.studentCode = studentCode;
    this.studentName = studentName;
  }

  // Criar o método
  showStudent(): void {
    console.log(`Código do Estudante: ${this.studentCode} \nNome do Estudante: ${this.studentName}
    `);
  }
}

// Acessar os campos:
const lucas = new StudentClass(9845, 'Lucas Corte');
console.log(
  `Código do Estudante: ${lucas.studentCode}  \nNome do Estudante: ${lucas.studentName}`,
);
