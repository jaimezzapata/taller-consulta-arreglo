// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una lista ordenada de valores. Puedes guardar números, textos, objetos, o incluso otros arreglos,
 * todo en una sola variable
 * Los arreglos en JavaScript son dinámicos (pueden crecer o reducirse en tamaño en tiempo de ejecución) y no tipados
 * (no requieren que todos los elementos sean del mismo tipo).
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para organizar, manipular y acceder eficientemente a colecciones de datos
 * en cualquier aplicación, haciendo el código más limpio, reutilizable y poderoso.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí

let datos = ["Juan", 25, true, "estudiante"];

// Muestra el arreglo `arregloMixto` en la consola.

console.log(datos[0]); // Juan
console.log(datos[1]); // 25
console.log(datos[2]); // true
console.log(datos[3]); // estudiante

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que altera (modifica) directamente el arreglo sobre el que actúa.
 Después de usarlo, el arreglo ya no es el mismo.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: .push()
// Descripción: Agrega uno o más elementos al final del arreglo.
// Ejemplo: Sintaxis: arreglo.push(elemento1, elemento2, ...) Devuelve: la nueva longitud del arreglo

let frutas = ["manzana", "banana"];
frutas.push("naranja");
console.log(frutas); // ["manzana", "banana", "naranja"]

// Método 2: .pop()
// Descripción: Elimina el último elemento del arreglo.
// Ejemplo: Sintaxis: arreglo.pop() Devuelve: el elemento eliminado

let frutas = ["manzana", "banana", "naranja"];
let eliminado = frutas.pop();
console.log(frutas);      // ["manzana", "banana"]
console.log(eliminado);   // "naranja"

// Método 3: .unshift()
// Descripción: Agrega uno o más elementos al inicio del arreglo.
// Ejemplo: Sintaxis: arreglo.unshift(elemento1, ...) Devuelve: la nueva longitud

let frutas = ["banana", "naranja"];
frutas.unshift("manzana");
console.log(frutas); // ["manzana", "banana", "naranja"]

// Método 4: .shift()
// Descripción: Elimina el primer elemento del arreglo.
// Ejemplo: Sintaxis: arreglo.shift() Devuelve: el elemento eliminado

let frutas = ["manzana", "banana", "naranja"];
let primero = frutas.shift();
console.log(frutas);    // ["banana", "naranja"]
console.log(primero);   // "manzana"

// Método 5: .splice()
// Descripción: Agrega, elimina o reemplaza elementos en cualquier posición.
// Ejemplo: Sintaxis: arreglo.splice(indice, cantidad, elem1, ...) Devuelve: array con los elementos eliminados

let frutas = ["manzana", "banana", "uva", "naranja"];

// Elimina 2 elementos a partir de la posición 1 y agrega uno nuevo
frutas.splice(1, 2, "fresa");
console.log(frutas); // ["manzana", "fresa", "naranja"]

// Método 6: .sort()
// Descripción: Ordena los elementos del arreglo (como texto, aunque sean números).
// Ejemplo: Sintaxis: arreglo.sort() Devuelve: el arreglo ordenado (el mismo objeto)

let frutas = ["naranja", "manzana", "banana"];
frutas.sort();
console.log(frutas); // ["banana", "manzana", "naranja"] (orden alfabético)

let numeros = [3, 1, 10, 2];
numeros.sort();
console.log(numeros); // [1, 10, 2, 3] ← ¡cuidado! Ordena como texto

// Método 7: .reverse()
// Descripción: Invierte el orden de los elementos del arreglo.  
// Ejemplo: Sintaxis: arreglo.reverse() Devuelve: el arreglo invertido (el mismo)

let frutas = ["manzana", "banana", "naranja"];
frutas.reverse();
console.log(frutas); // ["naranja", "banana", "manzana"]

// Método 8: .fill()
// Descripción: Rellena todos los elementos con un valor fijo.
// Ejemplo: Sintaxis: arreglo.fill(valor, inicio, fin Devuelve: el arreglo modificado

let numeros = [1, 2, 3, 4, 5];
numeros.fill(0, 1, 4); // desde índice 1 hasta 3, con valor 0
console.log(numeros); // [1, 0, 0, 0, 5]

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no cambia el arreglo original, sino que crea uno nuevo con los cambios aplicados
 *  Son importantes porque protegen el dato original y ayudan a escribir código más seguro, claro y fácil de mantener. 
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: .slice()
// Descripción: Extraer una parte del arreglo.
// Ejemplo: Devuelve una copia de una porción del arreglo.

let frutas = ["manzana", "banana", "naranja", "uva"];

let algunasFrutas = frutas.slice(1, 3); // desde índice 1 hasta 2 (no incluye 3)

console.log(frutas);         // ["manzana", "banana", "naranja", "uva"] → sin cambios
console.log(algunasFrutas);  // ["banana", "naranja"] → nuevo arreglo


// Método 2: .concat()
// Descripción: Combinar arreglos
// Ejemplo: Combina dos o más arreglos y devuelve uno nuevo.

let numeros1 = [1, 2];
let numeros2 = [3, 4];
let numeros3 = [5];

let todos = numeros1.concat(numeros2, numeros3);

console.log(numeros1);  // [1, 2] → sin cambios
console.log(todos);     // [1, 2, 3, 4, 5] → nuevo arreglo


// Método 3: .map()
// Descripción: Transformar cada elemento
// Ejemplo:  Crea un nuevo arreglo aplicando una función a cada elemento.

let precios = [10, 20, 30];
let preciosConIVA = precios.map(precio => precio * 1.19); // +19% IVA

console.log(precios);           // [10, 20, 30] → original sin cambios
console.log(preciosConIVA);     // [11.9, 23.8, 35.7] → nuevo arreglo

// Método 4: .filter()
// Descripción: Filtrar elementos
// Ejemplo: Devuelve un nuevo arreglo con los elementos que cumplen una condición.

let edades = [15, 18, 20, 12, 25];
let mayoresDeEdad = edades.filter(edad => edad >= 18);

console.log(edades);            // [15, 18, 20, 12, 25] → sin cambios
console.log(mayoresDeEdad);     // [18, 20, 25] → solo los que cumplen

// Método 5: .toSorted()
// Descripción: Ordenar sin modificar el original
// Ejemplo: Devuelve una copia ordenada del arreglo.

let frutas = ["naranja", "manzana", "banana"];
let ordenadas = frutas.toSorted();

console.log(frutas);    // ["naranja", "manzana", "banana"] → original intacto
console.log(ordenadas); // ["banana", "manzana", "naranja"] → copia ordenada