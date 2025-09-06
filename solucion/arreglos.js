// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Hernando Manuel Morales Porras]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es es una estructura de datos ordenada que almacena una cantidad de elementos.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * “Los arreglos se utilizan para almacenar listas de datos, recorrerlos y manipularlos eficientemente.”
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const arregloMixto = [42, "Hola", true, { nombre: "Manuel" }, [1, 2, 3]];


// Muestra el arreglo `arregloMixto` en la consola.
console.log("Arreglo mixto:", arregloMixto);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que modifica el arreglo original.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push()]
// Descripción: agrega elementos al final
// Ejemplo: 
numeros.push(6);
console.log("push:", numeros); // [1, 2, 3, 4, 5, 6]


// Método 2: [pop()]
// Descripción: elimina el último elemento
// Ejemplo:
numeros.pop();
console.log("pop:", numeros); // [1, 2, 3, 4, 5]


// Método 3: [shift()]
// Descripción: elimina el primer elemento
// Ejemplo:
numeros.shift();
console.log("shift:", numeros); // [2, 3, 4, 5]


// Método 4: [unshift()]
// Descripción: agrega elementos al inicio
// Ejemplo:
numeros.unshift(0);
console.log("unshift:", numeros); // [0, 1, 2, 3, 4, 5]


// Método 5: [splice()]
// Descripción: agrega o elimina elementos en una posición específica
// Ejemplo:
numeros.splice(2, 1);
console.log("splice:", numeros); // [0, 1, 3, 4, 5]


// Método 6: [sort()]
// Descripción: ordena los elementos del arreglo
// Ejemplo:
numeros.sort((a, b) => a - b);
console.log("sort:", numeros); // [0, 1, 3, 4, 5]

// Método 7: [reverse()]
// Descripción: invierte el orden de los elementos
// Ejemplo:
numeros.reverse();
console.log("reverse:", numeros); // [5, 4, 3, 1, 0]

// Método 8: [fill()]
// Descripción: llena el arreglo con un valor estático
// Ejemplo:
numeros.fill(7);
console.log("fill:", numeros); // [7, 7, 7, 7, 7]


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí: Un método inmutable es aquel que no cambia el arreglo original, sino que devuelve uno nuevo con los resultados.
 * Un método inmutable es aquel que... Son importantes porque permiten mantener la integridad de los datos originales y facilitan el manejo de estados en aplicaciones.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [map()]
// Descripción: transforma cada elemento del arreglo y devuelve uno nuevo
// Ejemplo:
const original = [1, 2, 3];
const nuevoMap = original.map(x => x * 2); // [2, 4, 6]


// Método 2: [filter()]
// Descripción: crea un nuevo arreglo con los elementos que cumplen la condición
// Ejemplo:
const nuevoFilter = original.filter(x => x > 1); // [2, 3]

// Método 3: [slice()]
// Descripción: devuelve una copia superficial de una porción del arreglo
// Ejemplo:
const nuevoSlice = original.slice(1, 3); // [2, 3]

// Método 4: [concat()]
// Descripción: combina dos o más arreglos y devuelve uno nuevo
// Ejemplo:
const otro = [4, 5];
const nuevoConcat = original.concat(otro); // [1, 2, 3, 4, 5]

// Método 5: [reduce()]
// Descripción: aplica una función a un acumulador y a cada elemento del arreglo para reducirlo a un solo valor
// Ejemplo:
const suma = original.reduce((acc, val) => acc + val, 0); // 6