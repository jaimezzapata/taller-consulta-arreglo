// Investigación #3: Fundamentos de los Arreglos

// 1. Definición:
// Un arreglo es una estructura que permite almacenar múltiples valores en una sola variable.

// 2. Propósito:
// Se usan para manejar listas de datos, recorrer elementos, aplicar filtros, etc.

// 3. Contenido:
const mezcla = [42, "Hola", true, {nombre: "Ana"}, [1, 2, 3]];

// Investigación #4: Métodos Mutables

let frutas = ["manzana", "banana", "pera"];
console.log("Original:", frutas);

// 1. push: agrega al final
frutas.push("uva");
console.log("push:", frutas);

// 2. pop: elimina el último
frutas.pop();
console.log("pop:", frutas);

// 3. shift: elimina el primero
frutas.shift();
console.log("shift:", frutas);

// 4. unshift: agrega al inicio
frutas.unshift("kiwi");
console.log("unshift:", frutas);

// 5. splice: elimina/reemplaza elementos
frutas.splice(1, 1, "mango");
console.log("splice:", frutas);

// 6. sort: ordena alfabéticamente
frutas.sort();
console.log("sort:", frutas);

// 7. reverse: invierte el orden
frutas.reverse();
console.log("reverse:", frutas);

// 8. fill: reemplaza valores
frutas.fill("naranja", 1, 2);
console.log("fill:", frutas);

// Investigación #5: Métodos Inmutables

const numeros = [1, 2, 3, 4, 5];
console.log("Original:", numeros);

// 1. map
const dobles = numeros.map(n => n * 2);
console.log("map:", dobles);

// 2. filter
const pares = numeros.filter(n => n % 2 === 0);
console.log("filter:", pares);

// 3. slice
const primeros = numeros.slice(0, 3);
console.log("slice:", primeros);

// 4. concat
const extendido = numeros.concat([6, 7]);
console.log("concat:", extendido);

// 5. flat
const anidado = [1, [2, [3]]];
console.log("flat:", anidado.flat(2));

// 6. toString
console.log("toString:", numeros.toString());

// 7. join
console.log("join:", numeros.join("-"));

// 8. includes
console.log("includes 3:", numeros.includes(3));

// 9. find
console.log("find > 3:", numeros.find(n => n > 3));

// 10. every
console.log("every > 0:", numeros.every(n => n > 0));
