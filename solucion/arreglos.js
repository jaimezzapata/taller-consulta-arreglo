// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Juan Sebastian Herrera Ochoa]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * En JavaScript, un arreglo es como un objeto que actúa como una colección ordenada de datos de cualquier tipo, y permite almacenar múltiples valores en una sola variable y acceder a ellos mediante un índice numérico

*/

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
     * Los arreglos se utilizan en el desarrollo de software para organizar y gestionar conjuntos de datos relacionados, facilitando operaciones como almacenamiento, acceso, manipulación y recorrido de esos datos de manera eficiente.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí:
let frutas = ["Manzana", 5, true, {tipo: "Cítrica", nombre: "Naranja" }, ["Banana", "Uva"]];

// Muestra el arreglo `arregloMixto` en la consola.
console.log("Arreglo creado", frutas);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
     *R/ Un método mutable en JavaScript es una operación que modifica el estado de un objeto o arreglo directamente, es decir, cambia sus propiedades o elementos después de su creación, en lugar de crear una nueva instancia con los cambios.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push()]
// Descripción: Agrega elementos al final del arreglo.
// Ejemplo:
    let numeros = [1, 2, 3];
    numeros.push(4, 5);
// console.log(numeros); = [1, 2, 3, 4, 5]



// Método 2: [pop()]
// Descripción: Elimina el último elemento del arreglo
// Ejemplo:
    let numeros1 = [1, 2, 3, 4, 5];
    numeros1.pop();
    // console.log(numeros1); = [1, 2, 3, 4]


// Método 3: [shift()]
// Descripción: Elimina el primer elemento del arreglo
// Ejemplo:
    let numeros2 = [1, 2, 3];
    numeros2.shift();
    // console.log(numeros2); = [2, 3]


// Método 4: [unshift()]
// Descripción: Agrega elementos al inicio del arreglo 
// Ejemplo:
    let numeros3 = [2, 3];
    numeros3.unshift(0, 1);
    // console.log(numeros3); = [0, 1, 2, 3]


// Método 5: [splice()]
// Descripción: Agrega, reemplaza o elimina elementos en cualquier posición.
// Ejemplo:
    let animales = ["Perro", "Gato", "Conejo"];
    animales.splice(1, 1, "Tigre"); // elimina "Gato" y agrega "Tigre"
// console.log(animales); = ["Perro", "Tigre", "Conejo"]



// Método 6: [sort()]
// Descripción: Ordena los elementos (por defecto como strings).
// Ejemplo:
    let numeros4 = [5, 2, 9, 1, 5, 6];
    numeros4.sort();
    // console.log(numeros4); = [1, 2, 5, 5, 6, 9]

// Método 7: [reverse()]
// Descripción: Invierte el orden de los elementos.
// Ejemplo:
    let dias = ["Lunes", "Martes", "Miércoles"];
    dias.reverse();
    console.log(dias); // ["Miércoles", "Martes", "Lunes"]


// Método 8: [fill()]
// Descripción: Rellena con un valor todos los elementos (o parte) del arreglo.
// Ejemplo:
    let arreglo = [1, 2, 3, 4, 5];
    arreglo.fill(0, 1, 4); 
    console.log(arreglo); // [1, 0, 0, 0, 5]



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
    *R/ Un método inmutable de arreglos en JavaScript es aquel que no modifica el arreglo original, sino que devuelve un nuevo arreglo o un nuevo valor basado en el original.
    Son importantes porque hacen el código más seguro, predecible y fácil de mantener.
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [map()]
// Descripción: Crea un nuevo arreglo transformando cada elemento.
// Ejemplo: 
const numeros0 = [1, 2, 3];
const dobles = numeros.map(n => n * 2);
// console.log(dobles);   = [2, 4, 6]
// console.log(numeros);  = [1, 2, 3] (no cambia)


// Método 2: [filter()]
// Descripción: Devuelve los elementos que cumplen una condición.
// Ejemplo:
const numeros01 = [1, 2, 3, 4, 5];
const pares = numeros1.filter(n => n % 2 === 0);
// console.log(pares);   = [2, 4]
// console.log(numeros1);  = [1, 2, 3, 4, 5] (no cambia)


// Método 3: [reduce()]
// Descripción: Reduce el arreglo a un solo valor.
// Ejemplo:
const suma = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
// console.log(suma); = 10


// Método 4: [concat()]
// Descripción: Combina dos o más arreglos.
// Ejemplo:
const numeros02 = [1, 2, 3];
const masNumeros = [4, 5, 6];
const todosLosNumeros = numeros02.concat(masNumeros);
// console.log(todosLosNumeros); = [1, 2, 3, 4, 5, 6]


// Método 5: [reduceRight()]
// Descripción: Reduce el arreglo a un solo valor, comenzando desde la derecha.
// Ejemplo:
const resta = [1, 2, 3, 4].reduceRight((acc, num) => acc - num, 0);
// console.log(resta); = -4


// Método 6: [slice()]
// Descripción: Extrae una sección del arreglo y devuelve un nuevo arreglo.
// Ejemplo:
const frutas2 = ["Manzana", "Banana", "Cereza", "Durazno"];
const citricas = frutas2.slice(1, 3);
// console.log(citricas); = ["Banana", "Cereza"]


// Método 7: [join()]
// Descripción: Une todos los elementos del arreglo en una cadena.
// Ejemplo:
const palabras = ["Hola", "mundo"];
const frase = palabras.join(" ");
// console.log(frase); = "Hola mundo"


// Método 8: [toString()]
// Descripción: Convierte el arreglo en una cadena con comas.
// Ejemplo:
const numeros03 = [1, 2, 3];
const cadena = numeros03.toString();
// console.log(cadena); = "1,2,3"


// Método 9: [includes()]
// Descripción: Verifica si un elemento está en el arreglo.
// Ejemplo:
const numeros04 = [1, 2, 3];
const tieneDos = numeros04.includes(2);
// console.log(tieneDos); = true


// Método 10: [find()]
// Descripción: Devuelve el primer elemento que cumple una condición.
// Ejemplo:
const numeros05 = [1, 2, 3, 4, 5];
const mayorQueTres = numeros05.find(n => n > 3);
// console.log(mayorQueTres); = 4