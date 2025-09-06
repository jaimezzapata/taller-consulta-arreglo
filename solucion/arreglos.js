// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Luisa Fernanda Usuga Quintero]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es...
 Un arreglo es una estructura de datos ordenada en JavaScript que permite 
  almacenar múltiples valores dentro de una sola variable. 
  Los elementos pueden ser de cualquier tipo de dato.

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**Los arreglos se utilizan para manejar colecciones de datos de manera 
  eficiente, recorrer listas de elementos, realizar búsquedas, 
  transformaciones y organizar información.
 * Escribe tu explicación aquí:se utiliza para organizar y almacenar varios datos relacionados entre si
 * Los arreglos se utilizan para...
 /**los arreglos se utlizan para manejar y trabajar con conjuntos de datos relacionados de manera mas simple y ordenada */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const arregloMixto = [
  42,                          
  "Hola jaime",                
  true,                        
  { nombre: "sofia", edad: 20 }, 
  [1, 2, 3, 4]         
];


// Muestra el arreglo `arregloMixto` en la consola.
console.log("Arreglo mixto:", arregloMixto);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/** Un método mutable es aquel que modifica directamente el arreglo original,
 ya sea agregando, eliminando o reordenando sus elementos.

 * Escribe tu explicación aquí:un metodo mutable modifica el arreglo tal cual esta,sin duplicarlo
 * Un método mutable es aquel que...
 /**es aquel que modifica directamente el contenido original de una estructura de datos  */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push]
// Descripción: Agrega uno o más elementos al final del arreglo.
// Ejemplo:
console.log("Antes push:", numeros);
numeros.push(6);
console.log("Después push:", numeros);

// Método 2: [pop]
// Descripción: Elimina el último elemento del arreglo
// Ejemplo:
console.log("Antes pop:", numeros);
numeros.pop();
console.log("Después pop:", numeros);

// Método 3: [shift]
// Descripción: Elimina el primer elemento del arreglo.
// Ejemplo:
console.log("Antes shift:", numeros);
numeros.shift();
console.log("Después shift:", numeros);

// Método 4: [unshift]
// Descripción: Agrega uno o más elementos al inicio del arreglo
// Ejemplo:
console.log("Antes unshift:", numeros);
numeros.unshift(0);
console.log("Después unshift:", numeros);

// Método 5: [splice]
// Descripción: Permite agregar, reemplazar o eliminar elementos en una posición específica.
// Ejemplo:
console.log("Antes splice:", numeros);
numeros.splice(2, 1, 99); 
console.log("Después splice:", numeros);


// Método 6: [sort]
// Descripción: Ordena los elementos del arreglo (alfabéticamente o numéricamente si se da un comparador).
// Ejemplo:
let letras = ["d", "a", "c", "b"];
console.log("Antes sort:", letras);
letras.sort();
console.log("Después sort:", letras);

// Método 7: [reverse]
// Descripción: Invierte el orden de los elementos en el arreglo.
// Ejemplo:
console.log("Antes reverse:", letras);
letras.reverse();
console.log("Después reverse:", letras);

// Método 8: [fill]
// Descripción: Rellena todo el arreglo con un valor estático desde una posición inicial hasta una final.
// Ejemplo:
let arrayFill = [1, 2, 3, 4, 5];
console.log("Antes fill:", arrayFill);
arrayFill.fill(0, 1, 4); // desde índice 1 hasta antes del 4
console.log("Después fill:", arrayFill)

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/** Un método inmutable es aquel que NO modifica el arreglo original, 
 sino que devuelve un nuevo arreglo con los cambios aplicados.
 Son importantes porque permiten trabajar sin alterar los datos originales, 
 lo cual evita errores y es un principio clave en la programación funcional.
 */
/** Escribe tu explicación aquí:el metodo inmutable es el que no cambia el arreglo o objeto original
 * Un método inmutable es aquel que... Son importantes porque...
 /**un metodo inmutable es aquel que no cambia el arreglo original,si no que devuelve uno nuevo con los cambios o resultados,hacen el codigo mas seguro y pledecible,facilitan el trabajp en equipo y proyectos,se usan mucho en programacion funcional */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [map]
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento.
// Ejemplo:
const cuadrados = numerosOriginal.map(num => num * num);
console.log("Original:", numerosOriginal, "Nuevo con map:", cuadrados);

// Método 2: [filter]
// Descripción: 
// Ejemplo:Devuelve un nuevo arreglo con los elementos que cumplen una condición.
const pares = numerosOriginal.filter(num => num % 2 === 0);
console.log("Original:", numerosOriginal, "Nuevo con filter:", pares);

// Método 3: [splice]
// Descripción: Extrae una parte del arreglo y devuelve un nuevo arreglo.
// Ejemplo:
const subArray = numerosOriginal.slice(1, 4);
console.log("Original:", numerosOriginal, "Nuevo con slice:", subArray);

// Método 4: [concat]
// Descripción: Combina dos o más arreglos en uno nuevo.
// Ejemplo:
const unidos = numerosOriginal.concat([6, 7, 8]);
console.log("Original:", numerosOriginal, "Nuevo con concat:", unidos);

// Método 5: [join]
// Descripción: 
// Ejemplo: Une todos los elementos del arreglo en un string.
const texto = numerosOriginal.join(" - ");
console.log("Original:", numerosOriginal, "Nuevo con join:", texto);