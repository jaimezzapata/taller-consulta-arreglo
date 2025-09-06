// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Un arreglo (array) en JavaScript es una estructura de datos que permite almacenar múltiples valores en una sola variable.
 * Cada valor se guarda en una posición (índice) y puede ser de cualquier tipo de dato (números, strings, booleanos, objetos, etc).
 * Los arreglos son muy útiles para organizar y manipular colecciones de datos de manera eficiente.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Los arreglos se utilizan principalmente para almacenar y gestionar listas de elementos relacionados.
 * Permiten recorrer, buscar, modificar, agregar o eliminar elementos de manera sencilla.
 * Son fundamentales en el desarrollo de software para manejar datos como listas de usuarios, productos, resultados, etc.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Creamos un arreglo que contiene diferentes tipos de datos
const arregloMixto = [42, "Hola", true, {nombre: "Juan"}, [1,2,3]];
// Mostramos el arreglo en la consola
console.log("Arreglo con múltiples tipos de datos:", arregloMixto);

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Un método mutable es aquel que modifica (cambia) el arreglo original sobre el que se aplica.
 * Esto significa que después de usar el método, el contenido del arreglo original puede ser diferente.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: push
// Descripción: Agrega uno o más elementos al final del arreglo y modifica el arreglo original.
let numeros = [1,2,3];
console.log("Antes de push:", numeros);
numeros.push(4);
console.log("Después de push:", numeros); // [1,2,3,4]

// Método 2: pop
// Descripción: Elimina el último elemento del arreglo y lo retorna. Modifica el arreglo original.
console.log("Antes de pop:", numeros);
let eliminado = numeros.pop();
console.log("Elemento eliminado:", eliminado);
console.log("Después de pop:", numeros); // [1,2,3]

// Método 3: shift
// Descripción: Elimina el primer elemento del arreglo y lo retorna. Modifica el arreglo original.
console.log("Antes de shift:", numeros);
let primero = numeros.shift();
console.log("Elemento eliminado:", primero);
console.log("Después de shift:", numeros); // [2,3]

// Método 4: unshift
// Descripción: Agrega uno o más elementos al inicio del arreglo. Modifica el arreglo original.
console.log("Antes de unshift:", numeros);
numeros.unshift(0);
console.log("Después de unshift:", numeros); // [0,2,3]

// Método 5: splice
// Descripción: Permite agregar, eliminar o reemplazar elementos en cualquier posición. Modifica el arreglo original.
console.log("Antes de splice:", numeros);
numeros.splice(1, 0, 1.5); // Inserta 1.5 en la posición 1
console.log("Después de splice:", numeros); // [0,1.5,2,3]

// Método 6: reverse
// Descripción: Invierte el orden de los elementos del arreglo. Modifica el arreglo original.
console.log("Antes de reverse:", numeros);
numeros.reverse();
console.log("Después de reverse:", numeros); // [3,2,1.5,0]

// Método 7: sort
// Descripción: Ordena los elementos del arreglo. Modifica el arreglo original.
let letras = ["b", "a", "c"];
console.log("Antes de sort:", letras);
letras.sort();
console.log("Después de sort:", letras); // ["a","b","c"]

// Método 8: fill
// Descripción: Rellena el arreglo con un valor estático desde una posición inicial hasta una final. Modifica el arreglo original.
let arr = [1,2,3,4];
console.log("Antes de fill:", arr);
arr.fill(0,1,3); // Rellena con 0 desde el índice 1 hasta el 3 (sin incluir el 3)
console.log("Después de fill:", arr); // [1,0,0,4]

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Un método inmutable es aquel que NO modifica el arreglo original, sino que retorna uno nuevo con el resultado de la operación.
 * Son importantes porque ayudan a evitar efectos secundarios y facilitan la programación funcional y el manejo seguro de datos.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.

console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: map
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento, sin modificar el original.
const nums = [1,2,3];
const dobles = nums.map(x => x*2);
console.log("Original:", nums);
console.log("Nuevo con map:", dobles);

// Método 2: filter
// Descripción: Crea un nuevo arreglo con los elementos que cumplen una condición, sin modificar el original.
const mayores = nums.filter(x => x > 1);
console.log("Original:", nums);
console.log("Nuevo con filter:", mayores);

// Método 3: slice
// Descripción: Extrae una parte del arreglo y retorna un nuevo arreglo, sin modificar el original.
const parte = nums.slice(0,2);
console.log("Original:", nums);
console.log("Nuevo con slice:", parte);

// Método 4: concat
// Descripción: Une dos o más arreglos y retorna uno nuevo, sin modificar los originales.
const unidos = nums.concat([4,5]);
console.log("Original:", nums);
console.log("Nuevo con concat:", unidos);

// Método 5: find
// Descripción: Retorna el primer elemento que cumple una condición, sin modificar el original.
const encontrado = nums.find(x => x > 1);
console.log("Original:", nums);
console.log("Elemento encontrado con find:", encontrado);
