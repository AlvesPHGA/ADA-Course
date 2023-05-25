// ARRAY - metodos
const list = [20, 30, 40, 400];
let list02 = [];

// fatiamento - slice() -> list.slice(0, 1)
// add element: push() | unshift() -> list02.push(10, 20) | list02.unshift(1, 10, 20)
// remove element: pop() | shift() -> list02.pop() | list02.shift()
// concat arrays: concat() -> list.concat(list02)
// buscar elements in array: indexOf() | lastIndexOf() -> list.indexOf(30) = 1 | list.lastIndexOf(400) = 3
// descobrindo a existencia de um elemento: includes() - list.includes(40) = true
// invertendo array: reverse() -> list.reverse()

function funcao(array) {
   let acc = 0;

   for (let elemento of array) {
      acc += elemento;
   }

   return acc / array.length;
}

console.log(funcao([4, 6, 4, 2]));
