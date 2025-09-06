// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Nelson Lozano Rayo]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es...
 *//*Es una estructura que permite una coleccion de varios elementos dentro de una variable*/

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan porque al momento de tener multiples elementos dentro de una variable,
 * cada elemento ocupa una posición especifica.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí

/*let juegosHalo = [
  {
    titulo: "Halo: Combat Evolved",
    añoLanzamiento: 2001,
    estudio: "Bungie",
    plataforma: "Xbox"
  },
  {
    titulo: "Halo 2",
    añoLanzamiento: 2004,
    estudio: "Bungie",
    plataforma: "Xbox"
  },
  {
    titulo: "Halo 3",
    añoLanzamiento: 2007,
    estudio: "Bungie",
    plataforma: "Xbox 360"
  },
  {
    titulo: "Halo: Reach",
    añoLanzamiento: 2010,
    estudio: "Bungie",
    plataforma: "Xbox 360"
  },
  {
    titulo: "Halo 4",
    añoLanzamiento: 2012,
    estudio: "343 Industries",
    plataforma: "Xbox 360"
  }
];*/


// Muestra el arreglo `arregloMixto` en la consola.

/*let universoHalo = [
  // Objeto de tipo "juego"
  {
    tipo: "juego",
    titulo: "Halo: Combat Evolved",
    añoLanzamiento: 2001,
    estudio: "Bungie"
  },
  // Objeto de tipo "personaje"
  {
    tipo: "personaje",
    nombre: "Jefe Maestro",
    rango: "Jefe Maestro Suboficial del Cuerpo",
    especie: "Humano"
  },
  // Otro objeto de tipo "juego"
  {
    tipo: "juego",
    titulo: "Halo 3",
    añoLanzamiento: 2007,
    estudio: "Bungie"
  },
  // Otro objeto de tipo "personaje"
  {
    tipo: "personaje",
    nombre: "Cortana",
    rango: "IA",
    especie: "Inteligencia Artificial"
  }
];*/


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/*Es una función que cambia el arreglo original sobre el cual se invoca*
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que por medio de una función puede alterar el arreglo 
 ya sea quitando elementos o añadiendo algun elemento*/

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [Push() y Pop()]
// Descripción: push() agrega uno o más elementos al final del arreglo. 
// pop() elimina el último elemento y lo devuelve.
// Ejemplo:
let nombres = ["Ana", "Pedro"];
nombres.push("Luis"); // Agrega 'Luis'
console.log(nombres); // Salida: ["Ana", "Pedro", "Luis"]

nombres.pop(); // Elimina 'Luis'
console.log(nombres); // Salida: ["Ana", "Pedro"]


// Método 2: [Shift() y Unshift()]
// Descripción: shift() elimina el primer elemento del arreglo. 
// unshift() agrega uno o más elementos al inicio del arreglo.
// Ejemplo:
let numeros = [1, 2, 3];
numeros.shift(); // Elimina el '1'
console.log(numeros); // Salida: [2, 3]

numeros.unshift(0); // Agrega '0' al inicio
console.log(numeros); // Salida: [0, 2, 3]


// Método 3: [Splice()]
// Descripción: es un método muy versátil que cambia el contenido de un arreglo eliminando, 
// reemplazando o añadiendo elementos en cualquier posición.
// Ejemplo:
let colores = ["rojo", "verde", "azul", "amarillo"];
// Elimina 2 elementos a partir del índice 1 y añade 'naranja'
colores.splice(1, 2, "naranja"); 
console.log(colores); // Salida: ["rojo", "naranja", "amarillo"]


// Método 4: [Sort]
// Descripción: ordena los elementos del arreglo. Si no se provee una función de comparación, 
// ordena los elementos como si fueran cadenas de texto.
// Ejemplo:
let frutas = ["Banana", "Manzana", "Cereza"];
frutas.sort();
console.log(frutas); // Salida: ["Banana", "Cereza", "Manzana"]

let valores = [10, 5, 20];
valores.sort((a, b) => a - b); // Ordena numéricamente
console.log(valores); // Salida: [5, 10, 20]

// Método 5: [Reverse()]
// Descripción: invierte el orden de los elementos del arreglo.
// Ejemplo:
let letras = ["c", "b", "a"];
letras.reverse();
console.log(letras); // Salida: ["a", "b", "c"]


// Método 6: [Fill()]
// Descripción: cambia todos los elementos de un arreglo (o una parte de él) por un valor estático.
// Ejemplo:
let arreglo = [1, 2, 3, 4];
arreglo.fill(0, 1, 3); // Llena con '0' desde el índice 1 hasta el 3 (sin incluir)
console.log(arreglo); // Salida: [1, 0, 0, 4]

// Método 6: [copyWithin()]
// Descripción: copia una secuencia de elementos dentro del mismo arreglo.
// Ejemplo:
let numerosCopia = [1, 2, 3, 4, 5];
// Copia los elementos del índice 3 en adelante al índice 0
numerosCopia.copyWithin(0, 3);
console.log(numerosCopia); // Salida: [4, 5, 3, 4, 5]



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/*No mofica el arreglo original*
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que se usa para poder usar el arreglo consevando los elementos origonales
 * Son importantes porque no altera el arreglo y crea una copia donde estara con los nuevos elementos
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [Map()]
// Descripción: crea un nuevo arreglo con los resultados de llamar a una función 
// para cada elemento del arreglo original.

// Ejemplo:
let productos = [10, 20, 30];
let productosConImpuesto = productos.map(precio => precio * 1.16);

console.log(productosConImpuesto); // Salida: [11.6, 23.2, 34.8]
console.log(productos);             // Salida: [10, 20, 30] (el original no se altera)


// Método 2: [Filter()]
// Descripción: crea un nuevo arreglo que contiene solo los elementos que pasan
//  una prueba (una función de prueba que devuelve true o false).
// Ejemplo:
let notas = [95, 80, 70, 65, 50];
let notasAprobadas = notas.filter(nota => nota >= 70);

console.log(notasAprobadas); // Salida: [95, 80, 70]
console.log(notas);          // Salida: [95, 80, 70, 65, 50] (el original no se altera)

// Método 3: [Slice]
// Descripción: devuelve una copia superficial de una parte del arreglo en un nuevo arreglo.
//  Puedes especificar el índice de inicio y fin.
// Ejemplo:
let ciudades = ["Bogotá", "Medellín", "Cali", "Barranquilla"];
let ciudadesPrincipales = ciudades.slice(0, 2);

console.log(ciudadesPrincipales); // Salida: ["Bogotá", "Medellín"]
console.log(ciudades);            // Salida: ["Bogotá", "Medellín", "Cali", "Barranquilla"] (el original no se altera)

// Método 4: [Concat()]
// Descripción: se utiliza para fusionar dos o más arreglos. 
// Devuelve un nuevo arreglo que contiene los elementos de todos los arreglos combinados.
// Ejemplo:
let equipoA = ["Juan", "María"];
let equipoB = ["Luis", "Ana"];
let equipoCompleto = equipoA.concat(equipoB);

console.log(equipoCompleto); // Salida: ["Juan", "María", "Luis", "Ana"]
console.log(equipoA);        // Salida: ["Juan", "María"]

// Método 5: [Join]
// Descripción: une todos los elementos de un arreglo en una cadena de texto y 
// devuelve esa cadena. No modifica el arreglo original.

// Ejemplo:
let palabras = ["Hola", "Mundo", "JavaScript"];
let frase = palabras.join(" "); // Une los elementos con un espacio

console.log(frase);       // Salida: "Hola Mundo JavaScript"
console.log(palabras);    // Salida: ["Hola", "Mundo", "JavaScript"]