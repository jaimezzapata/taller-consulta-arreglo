// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Daniel Esteban Lema Gamboa]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una colecciones de datos identificados
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para almacenar y organizar datos de manera eficiente. 
 * permitiendo hacer operacion de cualquier conjunto de datos que requieran procesamiento conjunto.
 * 
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const arregloMixto = [42, "Hola", true, { nombre: "Daniel" }, [1, 2, 3], null];

// Muestra el arreglo `arregloMixto` en la consola.
console.log(arregloMixto);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que permite modificar la informacion del arreglo original
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

let ejemploMutable = [1, 2, 3, 4];

// Método 1: push
// Descripción: Agrega uno o más elementos al final del arreglo.
ejemploMutable.push(5);
console.log("push:", ejemploMutable);

// Método 2: pop
// Descripción: Elimina el último elemento del arreglo.
ejemploMutable.pop();
console.log("pop:", ejemploMutable);

// Método 3: shift
// Descripción: Elimina el primer elemento del arreglo.
ejemploMutable.shift();
console.log("shift:", ejemploMutable);

// Método 4: unshift
// Descripción: Agrega uno o más elementos al inicio del arreglo.
ejemploMutable.unshift(0);
console.log("unshift:", ejemploMutable);

// Método 5: splice
// Descripción: Permite agregar, eliminar o reemplazar elementos en cualquier posición.
ejemploMutable.splice(2, 1, 99); // Reemplaza el elemento en la posición 2 por 99
console.log("splice:", ejemploMutable);

// Método 6: reverse
// Descripción: Invierte el orden de los elementos del arreglo.
ejemploMutable.reverse();
console.log("reverse:", ejemploMutable);

// Método 7: sort
// Descripción: Ordena los elementos del arreglo.
ejemploMutable.sort();
console.log("sort:", ejemploMutable);

// Método 8: fill
// Descripción: Rellena el arreglo con un valor específico.
ejemploMutable.fill(7, 1, 3); // Rellena desde el índice 1 hasta el 2 con 7
console.log("fill:", ejemploMutable);


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es una función que realiza operaciones sobre un arreglo y 
 * devuelve un nuevo arreglo o valor, sin modificar el arreglo original.
 * Son importantes porque no permite modificar la informacion del arreglo original.
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

const ejemploInmutable = [1, 2, 3, 4, 5];

// Método 1: map
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento.
console.log("map:", ejemploInmutable.map(x => x * 2));

// Método 2: filter
// Descripción: Crea un nuevo arreglo con los elementos que cumplen una condición.
console.log("filter:", ejemploInmutable.filter(x => x > 2));

// Método 3: slice
// Descripción: Devuelve una copia de una parte del arreglo.
console.log("slice:", ejemploInmutable.slice(1, 4));

// Método 4: concat
// Descripción: Une dos o más arreglos y devuelve uno nuevo.
console.log("concat:", ejemploInmutable.concat([6, 7]));

// Método 5: reduce
// Descripción: Reduce el arreglo a un solo valor.
console.log("reduce:", ejemploInmutable.reduce((a, b) => a + b, 0));

// Método 6: join
// Descripción: Une todos los elementos en una cadena.
console.log("join:", ejemploInmutable.join("-"));

// Método 7: toString
// Descripción: Convierte el arreglo en una cadena.
console.log("toString:", ejemploInmutable.toString());

// Método 8: flat
// Descripción: Devuelve un nuevo arreglo con los elementos "aplanados".
console.log("flat:", [1, [2, 3], [4]].flat());

// Método 9: includes
// Descripción: Verifica si un elemento está en el arreglo.
console.log("includes:", ejemploInmutable.includes(3));

// Método 10: find
// Descripción: Devuelve el primer elemento que cumple una condición.
console.log("find:", ejemploInmutable.find(x => x > 3));