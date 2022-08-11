/* eslint-disable prettier/prettier */
/**
 * arquivo: gettersSetters.ts
 * descrição: arquivo responsável por ensinar como usar getters e
 * setters no TypeScript
 * data: 11/08/2022
 * author: Lucas Corte <@cortelucas>
 */

export { };

//==>Exemplo 01: Get
class Square {
  private _width = 6;
  private _height = 12;

  get calculateSquare() {
    return this._height * this._width;
  }
}

console.log(new Square().calculateSquare);


//==> Exemplo 02: Set
class Person {
  name: string;

  showPersonName(setPersonName: string) {
    this.name = setPersonName;
  }
}

const person = new Person();
person.showPersonName('Lucas Corte');
console.log('Meu nome é: ', person.name);

//==>Exemplo 03: Get [explicação mais densa]
class StudentGetter {
  private _name = 'Lucas Corte';
  private _semester: number;
  private _course: string;

  public get studentName() {
    return this._name;
  }
}

const student = new StudentGetter();
const result = student.studentName;
console.log(result);

//==>Exemplo 04: Set/Get [explicação mais densa]
class StudentGetterSetter {
  name: string;
  semester: number;
  course: string;

  constructor(studentName: string, studentSemester: number, studentCourse: string) {
    this.name = studentName;
    this.semester = studentSemester;
    this.course = studentCourse;
  }

  public get showCourses() {
    return this.course;
  }

  public set setNewCourse(setCourse: string) {
    this.course = setCourse;
  }
}

const lucas = new StudentGetterSetter('Lucas Corte', 5, 'Sistema da Informação');
console.log(lucas);

// Setter call
lucas.setNewCourse = 'Análise e Desenvolvimento de Sistemas';

// Getter call
console.log('Curso atualizado:', lucas.showCourses)
