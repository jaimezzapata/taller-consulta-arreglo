// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Victoria Belen Valero Molero

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una estructura
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para guardar informacion de manera organizada.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
let datos = [
    "Colombia",
    2025,
    true,
    { 
        ciudad: "Bogota"
    }
];

// Muestra el arreglo `arregloMixto` en la consola.
console.log(datos[0]);
console.log(datos[1]);
console.log(datos[2]);
console.log(datos[3]);

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que... cambia el arreglo
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: push()
// Descripción: Agrega uno o más elementos al final del arreglo.
// Ejemplo:
let frutas = ["manzana", "pera"];
console.log("Antes:", frutas);

frutas.push("uva");
console.log("Después:", frutas);

// Método 2: pop()
// Descripción: Elimina el último elemento del arreglo.
// Ejemplo:
let numeros = [1, 2, 3, 4];
console.log("Antes:", numeros);

numeros.pop();
console.log("Después:", numeros);

// Método 3: shift()
// Descripción: Elimina el primer elemento del arreglo.
// Ejemplo:
let colores = ["rojo", "azul", "verde"];
console.log("Antes:", colores);

colores.shift();
console.log("Después:", colores);

// Método 4: unshift()
// Descripción: Agrega uno o más elementos al inicio del arreglo.
// Ejemplo:
let animales = ["perro", "gato"];
console.log("Antes:", animales);

animales.unshift("loro");
console.log("Después:", animales);


// Método 5: splice()
// Descripción: Agrega, elimina o reemplaza elementos en cualquier parte del arreglo.
// Ejemplo:
let numeros2 = [10, 20, 30, 40];
console.log("Antes:", numeros2);

numeros2.splice(1, 2, 25, 35); // Elimina 2 desde el índice 1 y agrega 25, 35
console.log("Después:", numeros2);

// Método 6: reverse()
// Descripción: Invierte el orden de los elementos del arreglo.
// Ejemplo:
let letras = ["a", "b", "c"];
console.log("Antes:", letras);

letras.reverse();
console.log("Después:", letras);

// Método 7: sort()
// Descripción: Ordena los elementos del arreglo alfabética o numéricamente.
// Ejemplo:
let numeros3 = [3, 1, 4, 2];
console.log("Antes:", numeros3);

numeros3.sort();
console.log("Después:", numeros3);

// Método 8: fill()
// Descripción: Rellena todo o parte del arreglo con un valor específico.
// Ejemplo:
let arreglo = [1, 2, 3, 4];
console.log("Antes:", arreglo);

arreglo.fill(0, 1, 3); // Rellena con 0 desde el índice 1 hasta antes del 3
console.log("Después:", arreglo);


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que... no cambia el arreglo, Son importantes porque...evita errores y hace que
   el código sea más claro y fácil de entender
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: map()
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento del original.
// Ejemplo:
const numeros4 = [1, 2, 3];
const dobles = numeros4.map(n => n * 2);

console.log("Original:", numeros4);
console.log("Nuevo:", dobles);


// Método 2: filter()
// Descripción: Crea un nuevo arreglo con los elementos que cumplen una condición.
// Ejemplo:
const edades = [15, 22, 30, 12];
const mayores = edades.filter(e => e >= 18);

console.log("Original:", edades);
console.log("Nuevo:", mayores);


// Método 3: find()
// Descripción: Devuelve el primer elemento que cumple con una condición, sin modificar el arreglo.
// Ejemplo:
const personas = [{nombre: "Ana"}, {nombre: "Luis"}, {nombre: "María"}];
const encontrado = personas.find(p => p.nombre === "Luis");

console.log("Original:", personas);
console.log("Nuevo:", encontrado);

// Método 4: some()
// Descripción: Devuelve true si al menos un elemento cumple una condición, sin modificar el arreglo.
// Ejemplo:
const numeros5 = [1, 3, 5, 8];
const hayPar = numeros5.some(n => n % 2 === 0);

console.log("Original:", numeros5);
console.log("Nuevo:", hayPar);

// Método 5: findIndex()
// Descripción: Devuelve el índice del primer elemento que cumple con una condición, sin modificar el arreglo.
// Ejemplo:
const edades2 = [12, 17, 20, 30];
const indice = edades2.findIndex(e => e >= 18);

console.log("Original:", edades2);
console.log("Nuevo:", indice);

// Método 6: indexOf()
// Descripción: Devuelve el índice de la primera aparición de un elemento, sin modificar el arreglo.
// Ejemplo:
const frutas2 = ["manzana", "pera", "uva"];
const indiceUva = frutas2.indexOf("uva");

console.log("Original:", frutas2);
console.log("Nuevo:", indiceUva);

// Método 7: slice()
// Descripción: Devuelve una copia de una parte del arreglo, sin modificar el original.
// Ejemplo:
const letras2 = ["a", "b", "c", "d"];
const subletras = letras2.slice(1, 3);

console.log("Original:", letras2);
console.log("Nuevo:", subletras);

// Método 8: reduce()
// Descripción: Reduce el arreglo a un solo valor aplicando una función acumulativa, sin modificar el arreglo.
// Ejemplo:
const numeros6 = [1, 2, 3, 4];
const suma = numeros6.reduce((acum, val) => acum + val, 0);

console.log("Original:", numeros6);
console.log("Nuevo:", suma);

// Método 9: forEach()
// Descripción: Ejecuta una función por cada elemento del arreglo sin modificarlo ni devolver uno nuevo.
// Ejemplo:
const nombres = ["Ana", "Luis", "María"];
console.log("Original:", nombres);

nombres.forEach(nombre => console.log("Nombre:", nombre));

console.log("Después de forEach, original:", nombres);

// Método 10: concat()
// Descripción: Une dos o más arreglos y devuelve un nuevo arreglo sin modificar los originales.
// Ejemplo:
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];
const combinado = arreglo1.concat(arreglo2);

console.log("Original arreglo1:", arreglo1);
console.log("Original arreglo2:", arreglo2);
console.log("Nuevo arreglo combinado:", combinado);