// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Juliana Jimenez Molina]
// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una lista de diferentes datos, como lista de elementos, la cual permite realizar operaciones sobre esos datos de manera correcta.
 */
// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para almacenar y organizar varios valores bajo una sola variable, se puede acceder , modificar y gestionar datos de manera correcta
 */
// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
const Arreglo = [
  42, // número
  "Bienvenido", 
  true, // booleano
  { nombre: "Juliana", edad: 25 }, 
  [1, 2, 3], 
  function() { return "Soy una función dentro del arreglo"; } 
];
// Muestra el arreglo `arregloMixto` en la consola.

console.log(Arreglo[0]); 
console.log(Arreglo[1]); 
console.log(Arreglo[3].nombre); 
console.log(Arreglo[4][1]); 
console.log(Arreglo[5]()); 
// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es una función que modifica directamente el contenido o la estructura del objeto o arreglo sobre el que se llama, en lugar de crear una copia modificada.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");
// Método 1: [push()]
// Descripción: agrega una mascota al final
// Ejemplo:
let mascotas1 = ["perro", "gato", "conejo", "pez", "loro"];
mascotas1.push("hamster");
console.log("arreglo original:", mascotas1);

// Método 2: [pop()]
// Descripción: elimina la última mascota
// Ejemplo:
let mascotas2 = ["perro", "gato", "conejo", "pez", "loro"];
mascotas2.pop();
console.log("arreglo original:", mascotas2);

// Método 3: [shift()]
// Descripción: elimina la primera mascota
// Ejemplo:
let mascotas3 = ["perro", "gato", "conejo", "pez", "loro"];
mascotas3.shift();
console.log("arreglo original:", mascotas3);

// Método 4: [unshift()]
// Descripción: agrega una mascota al inicio
// Ejemplo:
let mascotas4 = ["perro", "gato", "conejo", "pez", "loro"];
mascotas4.unshift("tortuga");
console.log("arreglo original:", mascotas4);

// Método 5: [splice()]
// Descripción: reemplaza o elimina mascotas en cualquier posición
// Ejemplo:
let mascotas5 = ["perro", "gato", "conejo", "pez", "loro"];
mascotas5.splice(1, 2, "hurón"); 
console.log("arreglo original:", mascotas5);

// Método 6: [sort()]
// Descripción: ordena alfabéticamente las mascotas
// Ejemplo:
let mascotas6 = ["perro", "gato", "conejo", "pez", "loro"];
mascotas6.sort();
console.log("arreglo original:", mascotas6);

// Método 7: [reverse()]
// Descripción: invierte el orden del arreglo
// Ejemplo:
let mascotas7 = ["perro", "gato", "conejo", "pez", "loro"];
mascotas7.reverse();
console.log("arreglo original:", mascotas7);

// Método 8: [fill()]
// Descripción: rellena parte del arreglo con una mascota específica
// Ejemplo:
let mascotas8 = ["perro", "gato", "conejo", "pez", "loro"];
mascotas8.fill("pez", 1, 3); 
console.log("arreglo original:", mascotas8);

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es una función que no modifica el objeto o arreglo original sobre el que se aplica. Son importantes porque no cambian el dato original, lo que ayuda a evitar errores y hace que el código sea más fácil de entender y mantener
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [slice()]
// Descripción: crea una copia parcial del arreglo
// Ejemplo:
const colores1 = ["rojo", "verde", "azul", "amarillo"];
const algunosColores = colores1.slice(1, 3);
console.log(algunosColores); 
console.log(colores1); 

// Método 2: [concat()]
// Descripción: Une dos o más arreglos y devuelve uno nuevo.
// Ejemplo:

const colores2 = ["rojo", "verde", "azul", "amarillo"];
const nuevosColores = colores2.concat(["morado", "naranja"]);
console.log(nuevosColores); 
console.log(colores2); 

// Método 3: [map()]
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento del arreglo original.
// Ejemplo:
const colores3 = ["rojo", "verde", "azul", "amarillo"];
const coloresEnMayus = colores3.map(color => color.toUpperCase());
console.log(coloresEnMayus); 
console.log(colores3);

// Método 4: [filter()]
// Descripción: Devuelve un nuevo arreglo con los elementos que cumplen una condición.
// Ejemplo:

const colores4 = ["rojo", "verde", "azul", "amarillo"];
const coloresConA = colores4.filter(color => color.includes("a"));
console.log(coloresConA); 
console.log(colores4); 

// Método 5: [reduce()]
// Descripción: Reduce el arreglo a un solo valor acumulado, sin modificar el arreglo original.
// Ejemplo:
const colores5 = ["rojo", "verde", "azul", "amarillo"];
const coloresConcatenados = colores5.reduce((acum, color) => acum + "-" + color);
console.log(coloresConcatenados); 
console.log(colores5);
