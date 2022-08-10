/**
 * arquivo: restParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Rest Parameters' em funções no no Typescript
 * data: 10/08/2019
 * author: Lucas Corte <@cortelucas>
 */

export {};

// ==> Exemplo 01
function add(...numbers: number[]) {
  let amount = 0;
  numbers.forEach((number) => (amount += number));

  return amount;
}

console.log(add(30, 20));
console.log(add(40, 50, 50, 40, 20));

// ==> Exemplo 02
function listFruits(phrase: string, ...fruits: string[]) {
  return phrase + ' ' + fruits.join(', ');
}

console.log(
  listFruits(
    'Lucas, você precisa ir na feira para comprar...:',
    '🥥',
    '🍓',
    '🍌',
    '🍍',
  ),
);

// ==> Exemplo 03
class Product {
  public showProducts(...products: string[]): void {
    for (const product of products) {
      console.log(product);
    }
  }
}

const departmentIT: Product = new Product();
console.log(
  'Todos os produtos do departamento de Informática disponíveis no estoque...: ',
);

departmentIT.showProducts(
  'Mouse',
  'Notebook',
  'USB',
  'Monitor',
  'Teclado',
  'WebCam',
);
