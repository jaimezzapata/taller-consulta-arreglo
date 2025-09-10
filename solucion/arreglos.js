// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es es un objeto que actúa como una colección ordenada de datos de cualquier tipo, permitiendo almacenar múltiples 
 * valores en una sola variable y acceder a ellos mediante un índice numérico
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para para almacenar múltiples valores bajo un único nombre de variable, organizando datos de manera eficiente 
 * para facilitar su gestión, búsqueda y manipulación en diversas aplicaciones, como el manejo de grandes volúmenes de datos
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí


// Muestra el arreglo `arregloMixto` en la consola.

const arregloMixto = [
  42,                       // número
  "Hola",                   // string
  false,                    // booleano
  { nombre: "Ana", edad: 25 }, // objeto
  [1, 2, 3],                // arreglo anidado
  null,                     // valor nulo
  undefined                 // valor indefinido
];

console.log("Contenido del arregloMixto:", arregloMixto);



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que altera directamente el estado o los datos del objeto sobre el que opera, sin crear una nueva instancia del objeto * 
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

let frutas = ["manzana", "banana"];
console.log("Antes de push:", frutas);
frutas.push("naranja");
console.log("Después de push:", frutas);

// 2. pop()
// Descripción: Elimina el último elemento del arreglo y lo devuelve. Modifica el arreglo original.
console.log("Antes de pop:", frutas);
const eliminado = frutas.pop();
console.log("Elemento eliminado:", eliminado);
console.log("Después de pop:", frutas);

// 3. shift()
// Descripción: Elimina el primer elemento del arreglo y lo devuelve. Modifica el arreglo original.
console.log("Antes de shift:", frutas);
const primero = frutas.shift();
console.log("Elemento eliminado:", primero);
console.log("Después de shift:", frutas);

// 4. unshift()
// Descripción: Añade uno o más elementos al inicio del arreglo. Modifica el arreglo original.
console.log("Antes de unshift:", frutas);
frutas.unshift("kiwi");
console.log("Después de unshift:", frutas);

// 5. splice()
// Descripción: Cambia el contenido del arreglo eliminando, reemplazando o agregando elementos. Modifica el arreglo original.
let numeros = [1, 2, 3, 4, 5];
console.log("Antes de splice:", numeros);
numeros.splice(2, 1, 10, 11); // Elimina 1 elemento en posición 2 y agrega 10 y 11
console.log("Después de splice:", numeros);

// 6. sort()
// Descripción: Ordena los elementos del arreglo y modifica el arreglo original.
let letras = ["d", "a", "c", "b"];
console.log("Antes de sort:", letras);
letras.sort();
console.log("Después de sort:", letras);

// 7. reverse()
// Descripción: Invierte el orden de los elementos del arreglo. Modifica el arreglo original.
console.log("Antes de reverse:", letras);
letras.reverse();
console.log("Después de reverse:", letras);

// 8. fill()
// Descripción: Rellena el arreglo con un valor estático desde un índice inicial hasta uno final. Modifica el arreglo original.
let vacio = [1, 2, 3, 4, 5];
console.log("Antes de fill:", vacio);
vacio.fill(0, 1, 4); // Llena con 0 desde índice 1 hasta 3 (4 no incluido)
console.log("Después de fill:", vacio);

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no puede alterar el estado de un objeto tras su creación, sino que, al intentar modificarlo,
 * genera una nueva instancia con los cambios deseados Son importantes porque importantes porque mejoran la predictibilidad del código
 * al no modificar los valores inesperadamente, simplifican la depuración y el mantenimiento,
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

const original = [1, 2, 3, 4, 5];

// 1. concat()
// Descripción: Une dos o más arreglos y devuelve uno nuevo.
const nuevo1 = original.concat([6, 7]);
console.log("concat:", "Original:", original, "Nuevo:", nuevo1);

// 2. slice()
// Descripción: Devuelve una copia superficial de una parte del arreglo.
const nuevo2 = original.slice(1, 4);
console.log("slice:", "Original:", original, "Nuevo:", nuevo2);

// 3. map()
// Descripción: Crea un nuevo arreglo con los resultados de la función aplicada a cada elemento.
const nuevo3 = original.map(x => x * 2);
console.log("map:", "Original:", original, "Nuevo:", nuevo3);

// 4. filter()
// Descripción: Crea un nuevo arreglo con los elementos que pasan una condición.
const nuevo4 = original.filter(x => x > 2);
console.log("filter:", "Original:", original, "Nuevo:", nuevo4);

// 5. reduce()
// Descripción: Aplica una función reductora y devuelve un valor único (no es arreglo, pero no modifica).
const suma = original.reduce((acc, val) => acc + val, 0);
console.log("reduce:", "Original:", original, "Suma:", suma);

// 6. find()
// Descripción: Devuelve el primer elemento que cumple una condición, sin modificar el arreglo.
const encontrado = original.find(x => x > 3);
console.log("find:", "Original:", original, "Encontrado:", encontrado);

// 7. includes()
// Descripción: Devuelve true o false si un elemento está en el arreglo.
const tieneTres = original.includes(3);
console.log("includes:", "Original:", original, "Incluye 3:", tieneTres);

// 8. indexOf()
// Descripción: Devuelve la posición de un elemento, o -1 si no existe.
const indice = original.indexOf(4);
console.log("indexOf:", "Original:", original, "Índice de 4:", indice);

// 9. join()
// Descripción: Une los elementos del arreglo en un string, sin modificar el arreglo.
const unido = original.join(" - ");
console.log("join:", "Original:", original, "Unido:", unido);

// 10. flat()
// Descripción: Aplana un arreglo de arreglos en un solo nivel (devuelve nuevo arreglo).
const arregloAnidado = [1, [2, 3], [4, 5]];
const plano = arregloAnidado.flat();
console.log("flat:", "Original:", arregloAnidado, "Plano:", plano);
