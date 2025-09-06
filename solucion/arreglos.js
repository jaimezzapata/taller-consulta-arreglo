// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Victor Andres Sanchez Arroyave

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 Un arreglo en JavaScript es una colección ordenada de valores que se almacenan en una sola variable..
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 Los arreglos se usan para almacenar y organizar múltiples datos relacionados, 
 facilitando su acceso, manipulación y recorrido eficiente en el código.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
/** 
 const estudiante = ["Carlos", 22, true, { carrera: "Ingeniería" }, ["Matemáticas", "Física"]];

// Muestra el arreglo `arregloMixto` en la consola.

console.log(estudiante);
 */


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 Un método mutable es una función que modifica directamente el contenido de un objeto o arreglo en lugar de crear una copia.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: 
/** 
push()

Agrega uno o más elementos al final del arreglo.

let frutas = ["manzana", "banana"];
frutas.push("naranja");
console.log(frutas); // ["manzana", "banana", "naranja"]
*/


// Método 2: 
/**
pop()

Elimina el último elemento del arreglo.

let numeros = [1, 2, 3];
numeros.pop();
console.log(numeros); // [1, 2]
//  */


// Método 3: 
/**
 shift()

Elimina el primer elemento del arreglo.

let colores = ["rojo", "verde", "azul"];
colores.shift();
console.log(colores); // ["verde", "azul"]

*/


// Método 4: 
/**
 unshift()

Agrega uno o más elementos al inicio del arreglo.

let animales = ["perro", "gato"];
animales.unshift("conejo");
console.log(animales); // ["conejo", "perro", "gato"]
 */


// Método 5: 
 
/**
splice()

Agrega o elimina elementos en cualquier posición del arreglo.

let letras = ["a", "b", "d"];
// Insertar "c" en la posición 2 (índice 2)
letras.splice(2, 0, "c");
console.log(letras); // ["a", "b", "c", "d"]

// Eliminar 1 elemento en la posición 1
letras.splice(1, 1);
console.log(letras); // ["a", "c", "d"]

 */


// Método 6: 


/**
 sort()

Ordena los elementos del arreglo (por defecto alfabéticamente).

let nums = [3, 1, 2];
nums.sort();
console.log(nums); // [1, 2, 3]

*/

// Método 7:

/**
 reverse()

Invierte el orden de los elementos del arreglo.

let letras = ["a", "b", "c"];
letras.reverse();
console.log(letras); // ["c", "b", "a"]

 */


// Método 8:

/** 
fill()
Rellena los elementos del arreglo con un valor fijo.

let array = [1, 2, 3, 4];
array.fill(0, 1, 3);
console.log(array); // [1, 0, 0, 4]

*/

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 Un método inmutable crea una nueva versión del arreglo u objeto sin cambiar el original, 
 lo que ayuda a evitar errores y facilita mantener un código más seguro y predecible.

Evitan efectos secundarios inesperados.

Facilitan el mantenimiento y la depuración del código.

Son clave en programación funcional y frameworks modernos (React, Redux).

Mejoran la previsibilidad y seguridad de los datos.

 */



// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.


/**
 * // Método 1: map()

Crea un nuevo arreglo transformando cada elemento.

const nums = [1, 2, 3];
const dobles = nums.map(n => n * 2);
console.log(dobles); // [2, 4, 6]
console.log(nums);    // [1, 2, 3] (original sin cambios)

// Método 2: filter()

Genera un nuevo arreglo con elementos que cumplen una condición.

const edades = [18, 15, 22, 30];
const adultos = edades.filter(e => e >= 18);
console.log(adultos); // [18, 22, 30]
console.log(edades);  // [18, 15, 22, 30] (sin cambios)

// Método 3:  slice()

Crea una copia de una parte del arreglo.

const letras = ["a", "b", "c", "d"];
const sub = letras.slice(1, 3);
console.log(sub);    // ["b", "c"]
console.log(letras); // ["a", "b", "c", "d"]

// Método 4:  concat()

Une dos o más arreglos creando uno nuevo.

const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = arr1.concat(arr2);
console.log(combinado); // [1, 2, 3, 4]
console.log(arr1);      // [1, 2]

// Método 5: reduce()

Procesa todos los elementos y devuelve un único valor sin modificar el arreglo.

const nums = [1, 2, 3, 4];
const suma = nums.reduce((acc, val) => acc + val, 0);
console.log(suma); // 10
console.log(nums); // [1, 2, 3, 4]
 */
