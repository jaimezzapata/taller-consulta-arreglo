// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Juan José Castrillón Giraldo

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una estructura de datos que permite almacenar y organizar 
 * una colección de elementos dentro de una sola variable. 
 * Estos elementos pueden ser de cualquier tipo: números, cadenas, objetos, 
 * booleanos e incluso otros arreglos.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para manejar conjuntos de datos relacionados. 
 * Permiten recorrer elementos fácilmente, aplicar operaciones de búsqueda, 
 * ordenamiento, filtrado y transformar datos de manera eficiente.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
let arregloMixto = [42, "Hola", true, { nombre: "Juan" }, [1, 2, 3]];

// Muestra el arreglo `arregloMixto` en la consola.
console.log("Arreglo mixto:", arregloMixto);



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que modifica el contenido del arreglo original, 
 * cambiando su estructura o sus elementos.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("\n--- MÉTODOS MUTABLES ---");

let numeros = [1, 2, 3, 4, 5];

// Método 1: push()
// Descripción: Agrega uno o más elementos al final del arreglo.
numeros.push(6);
console.log("push:", numeros);

// Método 2: pop()
// Descripción: Elimina el último elemento del arreglo.
numeros.pop();
console.log("pop:", numeros);

// Método 3: shift()
// Descripción: Elimina el primer elemento del arreglo.
numeros.shift();
console.log("shift:", numeros);

// Método 4: unshift()
// Descripción: Agrega uno o más elementos al inicio del arreglo.
numeros.unshift(0);
console.log("unshift:", numeros);

// Método 5: splice()
// Descripción: Permite añadir, eliminar o reemplazar elementos en posiciones específicas.
numeros.splice(2, 1, 99);
console.log("splice (reemplazo):", numeros);

// Método 6: sort()
// Descripción: Ordena los elementos del arreglo.
numeros.sort((a, b) => b - a);
console.log("sort:", numeros);

// Método 7: reverse()
// Descripción: Invierte el orden de los elementos.
numeros.reverse();
console.log("reverse:", numeros);

// Método 8: fill()
// Descripción: Rellena todas las posiciones del arreglo con un valor dado.
numeros.fill(7, 1, 3);
console.log("fill:", numeros);



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que NO modifica el arreglo original, 
 * sino que devuelve uno nuevo con los resultados de la operación. 
 * Son importantes porque ayudan a mantener la integridad de los datos 
 * y evitan errores por cambios inesperados.
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

let frutas = ["manzana", "pera", "mango", "uva"];

// Método 1: concat()
// Descripción: Une dos o más arreglos y devuelve uno nuevo.
console.log("concat:", frutas.concat(["fresa", "piña"]));

// Método 2: slice()
// Descripción: Devuelve una copia parcial del arreglo (subarreglo).
console.log("slice:", frutas.slice(1, 3));

// Método 3: map()
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento.
console.log("map:", frutas.map(f => f.toUpperCase()));

// Método 4: filter()
// Descripción: Devuelve un nuevo arreglo con los elementos que cumplen la condición.
console.log("filter:", frutas.filter(f => f.includes("a")));

// Método 5: reduce()
// Descripción: Reduce el arreglo a un solo valor aplicando una función acumuladora.
let numeros2 = [1, 2, 3, 4, 5];
console.log("reduce:", numeros2.reduce((acc, n) => acc + n, 0));

// Método 6: find()
// Descripción: Devuelve el primer elemento que cumple la condición.
console.log("find:", frutas.find(f => f.length > 5));

// Método 7: findIndex()
// Descripción: Devuelve el índice del primer elemento que cumple la condición.
console.log("findIndex:", frutas.findIndex(f => f === "mango"));

// Método 8: every()
// Descripción: Verifica si todos los elementos cumplen la condición.
console.log("every:", frutas.every(f => typeof f === "string"));

// Método 9: some()
// Descripción: Verifica si al menos un elemento cumple la condición.
console.log("some:", frutas.some(f => f === "mango"));

// Método 10: includes()
// Descripción: Comprueba si el arreglo contiene un valor específico.
console.log("includes:", frutas.includes("pera"));

