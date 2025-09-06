// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Jean Carlo Medina Delgado]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es es un conjunto ordenado de elementos delimitados por coma
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para ordenar elementos, ordenarlos, modificarlos y recorrerlos con ciclos
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
let datosVarios = [
    'papaya',
    14,
    false,
    'manzanas',
    'zapallos'
];

// Muestra el arreglo `arregloMixto` en la consola.
let arregloMixto =[
    'abuelitas',
    datosVarios,
    9,
    null,
    true
]


console.log(arregloMixto);

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que modifica directamente el contenido de un objeto o arreglo
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push]
// Descripción: agrega un elemento al final
// Ejemplo:

arregloMixto.push("queso");

// Método 2: [pop]
// Descripción: elimina el ultimo elemento
// Ejemplo:

arregloMixto.pop();
// Método 3: [unshift]
// Descripción: agrega un elemento al inicio
// Ejemplo:
arregloMixto.unshift("zapatos");

// Método 4: [shift]
// Descripción: elimina el primer elemento
// Ejemplo:
arregloMixto.shift();

// Método 5: [splice]
// Descripción: agrega o elimina un elemento en una posicion especifica
// Ejemplo:
arregloMixto.splice(1, 1, "vacas")

// Método 6: [sort]
// Descripción: ordena un array de manera ascendente/ alfabeticamente
// Ejemplo:

arregloMixto.sort();

// Método 7: [fill]
// Descripción: rellena todo o parte del array con un elemento
// Ejemplo:
frutas.fill("coco", 1, 3);

// Método 8: [inverse]
// Descripción: invierte el orden del array
// Ejemplo:
frutas.reverse();
// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el arreglo original sino que devuelven un nuevo valor o arreglo 
 * Son importantes porque nos permiten trabajar los arreglos sin riesgo de cambiarlos por error
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [slice]
// Descripción: devuelve una parte sin modificar el original
// Ejemplo:
let parte1 = arregloMixto.slice(1, 3); 


// Método 2: [map]
// Descripción: recorre cada elemento del arreglo y devuelve la transformacion
// Ejemplo:
let sumas = arregloMixto.map(n => n + n);

// Método 3: [filter]
// Descripción: Crea un arreglo que cumpla las condiciones, es decir un filtro
// Ejemplo:
let soloNumeros = arregloMixto(n => !(isNaN(n)))


// Método 4: [concat]
// Descripción: Crea un arreglo combinados de dos arreglos
// Ejemplo:
let masNumeros = arregloMixto.concat(datosVarios);

// Método 3: [reduce]
// Descripción: recorre todos los elementos y los combina en un unico valor
// Ejemplo:
let numeros = [1, 2, 3, 4, 5];
let suma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);


