// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Wilder Esteban Garcia Ramirez]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es... es una estructura de datos que  permite almanecar muchos valores en una sola variable y cada dato del arreglo tiene un indice y este empieza desde 0
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para... organizar y manejar de mejor manera la colección de datos facilitando así almacenamiento, interacción, acceso, manipulación...
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const arreglo = ["Producto", 25889893, false, {nombre: "wilder"}, null ];

// Muestra el arreglo `arregloMixto` en la consola.
console.log (arreglo);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que... puede modificar un arreglo
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: push()
// Descripción: Agrega uno o más elementos al final del arreglo.
// Ejemplo:
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);


// Método 2: pop()
// Descripción: Elimina el último elemento del arreglo y lo devuelve.
// Ejemplo:
const arr2 = [1, 2, 3];
const eliminado = arr2.pop();
console.log("pop:", arr2, "Eliminado:", eliminado); 

// Método 3: shift()
// Descripción: Elimina el primer elemento del arreglo y lo devuelve.
// Ejemplo:
const arr3 = [1, 2, 3];
const eliminadoShift = arr3.shift();
console.log("shift:", arr3, "Eliminado:", eliminadoShift); 

// Método 4: unshift()
// Descripción: Agrega uno o más elementos al inicio del arreglo.
// Ejemplo:
const arr4 = [2, 3];
arr4.unshift(1);
console.log("unshift:", arr4); // [1, 2, 3]


// Método 5: splice()
// Descripción: Agrega o elimina elementos en una posición específica.
// Ejemplo:
const arr5 = [1, 2, 4, 5];
arr5.splice(2, 0, 3); // Insertar 3 en posición 2 sin eliminar nada
console.log("splice (insertar):", arr5); // [1, 2, 3, 4, 5]


// Método 6: reverse()
// Descripción: Invierte el orden de los elementos en el arreglo.
// Ejemplo:
const arr6 = [1, 2, 3];
arr6.reverse();
console.log("reverse:", arr6); // [3, 2, 1]

// Método 7: sort()
// Descripción: Ordena los elementos del arreglo (por defecto alfabéticamente).
// Ejemplo:
const arr7 = [3, 1, 2];
arr7.sort();
console.log("sort:", arr7); // [1, 2, 3]

// Método 8: fill()
// Descripción: Rellena todos o parte de los elementos con un valor estático.
// Ejemplo:
const arr8 = [1, 2, 3, 4];
arr8.fill(0, 1, 3); // Rellena con 0 desde índice 1 hasta el 2
console.log("fill:", arr8); // [1, 0, 0, 4]

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:Un metodo inmutable es uno que no cambia el arreglo original sino que crea uno nuevo y lo devuelve sin modificar el original 
 * Un método inmutable es aquel que... Son importantes porque... falicita la depuracion ya que sabes que el arreglo principal(Original) no cambia .
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: concat()
// Descripción: Combina dos o más arreglos y devuelve uno nuevo.
// Ejemplo:
const arr9 = [1, 2];
const arr10 = [3, 4];
const combinado = arr9.concat(arr10);
console.log("concat:", combinado); // [1, 2, 3, 4]

// Método 2: slice()
// Descripción: Devuelve una copia de una parte del arreglo sin modificar el original.
// Ejemplo:
const arr11 = [1, 2, 3, 4];
const copia = arr11.slice(1, 3);
console.log("slice:", copia); // [2, 3]

// Método 3: map()
// Descripción: Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento.
// Ejemplo:
const arr12 = [1, 2, 3];
const doblado = arr12.map(x => x * 2);
console.log("map:", doblado); // [2, 4, 6]

// Método 4: filter()
// Descripción: Crea un nuevo arreglo con los elementos que cumplen una condición.
// Ejemplo:
const arr13 = [1, 2, 3, 4];
const pares = arr13.filter(x => x % 2 === 0);
console.log("filter:", pares); // [2, 4]

// Método 5: reduce()
// Descripción: Aplica una función reductora para acumular un solo valor a partir del arreglo.
// Ejemplo:
const arr14 = [1, 2, 3, 4];
const suma = arr14.reduce((acum, val) => acum + val, 0);
console.log("reduce:", suma); // 10