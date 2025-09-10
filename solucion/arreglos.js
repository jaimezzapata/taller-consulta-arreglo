// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Carolina Martinez Mesa

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es:colección de datos ordenados e indexados que respetan un orden cronológico y permite almacenar cualquier tipo de contenido (funciones, variables, objetos, arreglos, etc.)
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para almacenar varios valores en una sola variable, para facilitar la manipulación de datos relacionados.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const arregloMixto = [42, "Hola", true, {nombre: "Ana"}, [1, 2, 3]];



// Muestra el arreglo `arregloMixto` en la consola.
console.log("Arreglo Mixto:", arregloMixto);



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que se ejecuta en relación a los arreglos y modifica la información del arreglo original

 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");


// Arreglo inicial
let numeros = [1, 2, 3, 4, 5];

console.log("Arreglo original:", numeros);
// Método 1: push
// Descripción: agrega elementos al final del arreglo
// Ejemplo:
numeros.push(6, 7);
console.log("push:", numeros);



// Método 2: pop
// Descripción: elimina el último elemento del arreglo
// Ejemplo:
numeros.pop();
console.log("pop:", numeros);


// Método 3: shift
// Descripción: elimina el primer elemento del arreglo
// Ejemplo:
numeros.shift();
console.log("shift:", numeros);



// Método 4: unshift
// Descripción: agrega elementos al inicio del arreglo
// Ejemplo:
numeros.unshift(0);
console.log("unshift:", numeros);

// Método 5: splice
// Descripción: agrega, elimina o reemplaza elementos en cualquier posición
// Ejemplo:
numeros.splice(2, 1, 99); // elimina 1 desde índice 2 y agrega 99
console.log("splice:", numeros);


// Método 6: sort
// Descripción: ordena el arreglo (por defecto como strings)
// Ejemplo:
numeros.sort((a, b) => a - b); // orden numérico ascendente
console.log("sort:", numeros);

// Método 7: reverse
// Descripción: invierte el orden de los elementos en el arreglo
// Ejemplo:
numeros.reverse();
console.log("reverse:", numeros);

// Método 8: fill
// Descripción: llena con un valor desde un índice inicial hasta final
// Ejemplo:
numeros.fill(8, 1, 3); // rellena con 8 desde índice 1 hasta 2
console.log("fill:", numeros);



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifican la información del arreglo original Son importantes porque permiten proteger los datos originales, facilitando el mantenimiento del código.
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");
// Arreglo base
const numeros2 = [1, 2, 3, 4, 5];
console.log("Arreglo original:", numeros2);

// Método 1: slice
// Descripción: devuelve una copia parcial del arreglo (sin modificar el original).
const subArray = numeros2.slice(1, 4);
console.log("slice:", subArray);

// Método 2: some
// Descripción: verifica si al menos un elemento cumple la condición. Retorna true/false.
const hayMayorQueCuatro = numeros2.some(n => n > 4);
console.log("some:", hayMayorQueCuatro);

// Método 3: concat
// Descripción: combina dos o más arreglos en uno nuevo.
const combinado = numeros2.concat([6, 7, 8]);
console.log("concat:", combinado);

// Método 4: every
// Descripción: verifica si todos los elementos cumplen la condición. Retorna true/false.
const todosPositivos = numeros2.every(n => n > 0);
console.log("every:", todosPositivos);

// Método 5: map
// Descripción: crea un nuevo arreglo aplicando una función a cada elemento.
const cuadrados = numeros2.map(n => n * n);
console.log("map:", cuadrados);

// Método 6: reduceRight
// Descripción: igual que reduce pero procesando de derecha a izquierda.
const resta = numeros2.reduceRight((acc, n) => acc - n);
console.log("reduceRight:", resta);

// Método 7: findIndex
// Descripción: devuelve el índice del primer elemento que cumple la condición.
const indice = numeros2.findIndex(n => n === 4);
console.log("findIndex:", indice);

// Método 8: filter
// Descripción: devuelve un nuevo arreglo con los elementos que cumplen la condición.
const pares = numeros2.filter(n => n % 2 === 0);
console.log("filter:", pares);

// Método 9: find
// Descripción: devuelve el primer elemento que cumple la condición.
const mayorQueTres = numeros2.find(n => n > 3);
console.log("find:", mayorQueTres);

// Método 10: reduce
// Descripción: reduce el arreglo a un solo valor aplicando una función acumuladora.
const suma = numeros2.reduce((acc, n) => acc + n, 0);
console.log("reduce:", suma);


