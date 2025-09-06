// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Sergio Alejandro Atehortua Perez

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una estructura de datos en JavaScript que permite almacenar
 * una colección de elementos, los cuales pueden ser de cualquier tipo
 * (números, cadenas, booleanos, objetos, incluso otros arreglos).
 * Cada elemento tiene un índice que comienza desde 0.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para organizar y manejar conjuntos de datos
 * de manera eficiente. Facilitan operaciones como almacenar listas,
 * recorrer elementos, aplicar transformaciones, y gestionar colecciones
 * dinámicas de información en aplicaciones de software.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const arregloMixto = ["Hola", 123, true, { nombre: "Ana", edad: 20 }, [1, 2, 3]];

// Muestra el arreglo `arregloMixto` en la consola.
console.log("Arreglo mixto:", arregloMixto);



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que modifica el arreglo original directamente,
 * cambiando su contenido, orden o tamaño.
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

// Método 3: unshift()
// Descripción: Agrega uno o más elementos al inicio del arreglo.
numeros.unshift(0);
console.log("unshift:", numeros);

// Método 4: shift()
// Descripción: Elimina el primer elemento del arreglo.
numeros.shift();
console.log("shift:", numeros);

// Método 5: splice()
// Descripción: Puede eliminar, reemplazar o agregar elementos en posiciones específicas.
numeros.splice(2, 1, 99); // En la posición 2 elimina 1 elemento y agrega 99
console.log("splice:", numeros);

// Método 6: sort()
// Descripción: Ordena los elementos del arreglo.
numeros.sort((a, b) => b - a); // Orden descendente
console.log("sort:", numeros);

// Método 7: reverse()
// Descripción: Invierte el orden de los elementos.
numeros.reverse();
console.log("reverse:", numeros);

// Método 8: fill()
// Descripción: Rellena el arreglo con un valor fijo en un rango dado.
numeros.fill(0, 1, 3); // Rellena con 0 desde la posición 1 hasta la 3 (sin incluir la 3)
console.log("fill:", numeros);



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que NO modifica el arreglo original,
 * sino que devuelve uno nuevo con los cambios aplicados.
 * Son importantes porque permiten trabajar de manera más segura,
 * evitando cambios no deseados en los datos originales.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

const letras = ["a", "b", "c", "d"];

// Método 1: map()
// Descripción: Crea un nuevo arreglo transformando cada elemento.
const mayusculas = letras.map(l => l.toUpperCase());
console.log("map:", mayusculas, "Original:", letras);

// Método 2: filter()
// Descripción: Crea un nuevo arreglo con los elementos que cumplan una condición.
const filtradas = letras.filter(l => l !== "b");
console.log("filter:", filtradas, "Original:", letras);

// Método 3: slice()
// Descripción: Retorna una copia de una porción del arreglo.
const porcion = letras.slice(1, 3);
console.log("slice:", porcion, "Original:", letras);

// Método 4: concat()
// Descripción: Une dos o más arreglos en uno nuevo.
const masLetras = letras.concat(["e", "f"]);
console.log("concat:", masLetras, "Original:", letras);

// Método 5: includes()
// Descripción: Verifica si un elemento existe en el arreglo (retorna true o false).
const tieneC = letras.includes("c");
console.log("includes:", tieneC, "Original:", letras);
