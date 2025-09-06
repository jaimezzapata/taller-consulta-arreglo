// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [didier esteban achuri lopez]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una coleccion de datos ordenada que puede contener multiples valores,
 * los cuales pueden ser de diferentes tipos de datos, y se accede a ellos mediante un indice numerico.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para almacenar y organizar datos de manera eficiente,
 * permitiendo realizar operaciones como iterar, agregar, eliminar y modificar elementos
 * de forma sencilla.
 */


// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const persona = [42, "Hola", true, null, { nombre: "Juan", edad: 30 }];

// Muestra el arreglo `persona` en la consola.
console.log(persona);

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que modifica el arreglo original en lugar de crear una copia nueva.
 * Son importantes porque permiten cambiar el contenido del arreglo directamente.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push]
// Descripción: Agrega uno o más elementos al final de un arreglo.
// Ejemplo:
persona.push("Nuevo Elemento");
console.log(persona);


// Método 2: [pop]
// Descripción: Elimina el último elemento de un arreglo y lo devuelve.
// Ejemplo:
const elementoEliminado = persona.pop();
console.log(elementoEliminado);
console.log(persona);
// Método 3: [shift]
// Descripción: Elimina el primer elemento de un arreglo y lo devuelve.
// Ejemplo:
const primerElemento = persona.shift();
console.log(primerElemento);
console.log(persona);


// Método 4: [unshift]
// Descripción: Agrega uno o más elementos al inicio de un arreglo.
// Ejemplo:
persona.unshift("Nuevo Primer Elemento");
console.log(persona);


// Método 5: [splice]
// Descripción: Cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos.
// Ejemplo:
persona.splice(1, 1, "Elemento Reemplazado");
console.log(persona);


// Método 6: [reverse]
// Descripción: Invierte el orden de los elementos en un arreglo.
// Ejemplo:
persona.reverse();
console.log(persona);
// Método 7: [sort]
// Descripción: Ordena los elementos de un arreglo.
// Ejemplo:
const numeros = [3, 1, 4, 1, 5, 9];
numeros.sort();
console.log(numeros);


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el arreglo original, sino que devuelve una nueva copia con los cambios aplicados.
 * Son importantes porque preservan el estado original del arreglo, lo que puede ayudar a evitar efectos secundarios no deseados en el código.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [map]
// Descripción: Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original.
// Ejemplo:
const numero = [1, 2, 3, 4, 5];
const dobles = numeros.map(num => num * 2);
console.log(dobles);


// Método 2: [filter]
// Descripción: Crea un nuevo arreglo con todos los elementos que cumplan la condición implementada por la función dada.
// Ejemplo:
const mayoresDeTres = numero.filter(num => num > 3);
console.log(mayoresDeTres);

// Método 3: [reduce]
// Descripción: Aplica una función a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un único valor.
// Ejemplo:
const suma = numero.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma);
