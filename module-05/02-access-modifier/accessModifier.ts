/**
 * arquivo: accessModifier.ts
 * descrição: arquivo responsável por ensinar como usar o 'Modificadores de
 * Acesso' no Typescript
 * data: 11/08/2022
 * author: Lucas Corte <@cortelucas>
 */

export {};

// ==> Exemplo 01- Modificador: public
class Student {
  studentCode: number;
  studentName: string;
}

const student = new Student();
student.studentCode = 201;
student.studentName = 'Lucas Corte';

console.log(
  `Código do Estudante: ${student.studentCode} \nNome do Estudante: ${student.studentName}`,
);

// ==> Exemplo 02 - Modificador: private
class StudentPrivateModifier {
  studentCode: number;
  studentName: string;
  private age: number;

  constructor(studentCode: number, studentName: string, age: number) {
    this.studentCode = studentCode;
    this.studentName = studentName;
    this.age = age;
  }

  showStudentData() {
    return `\nCódigo do Aluno: ${this.studentCode}. \nNome do Estudante: ${this.studentName}. \nIdade do Estudante: ${this.age}`;
  }
}

const lucas = new StudentPrivateModifier(98765, 'Lucas Corte', 28);
console.log(lucas.showStudentData());

// ==> Exemplo 03 - Modificador: protected
class StudentProtectedModifier {
  studentCode: number;
  protected studentName: string;

  constructor(studentCode: number, studentName: string) {
    this.studentCode = studentCode;
    this.studentName = studentName;
  }
}

class Person extends StudentProtectedModifier {
  private course: string;

  constructor(studentCode: number, studentName: string, course: string) {
    super(studentCode, studentName);
    this.course = course;
  }

  showData() {
    return `\nCódigo do Aluno: ${this.studentCode}.\nNome do Estudante: ${this.studentName}.\nMatéria: ${this.course}`;
  }
}

const andressa = new Person(783212, 'Andressa Karino', 'Administração');
console.log(andressa.showData());
