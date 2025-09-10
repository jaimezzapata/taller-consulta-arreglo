// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Julieth Patricia Vasquez Gonzalez]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo  una estructura de datos en JavaScript que permite almacenar y organizar una colección de elementos (valores), 
 * que pueden ser de cualquier tipo de dato. Los elementos de un arreglo están ordenados y se accede a ellos mediante un índice numérico,
 * comenzando desde 0. Los arreglos permiten agregar, eliminar y modificar elementos de manera sencilla, lo que facilita el manejo de conjuntos de datos.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para almacenar y organizar múltiples datos relacionados de manera eficiente en una sola estructura.
 * Permiten manejar colecciones de elementos, facilitando operaciones como recorrer, buscar, filtrar, modificar o eliminar datos.
 * Son especialmente útiles cuando se necesita trabajar con listas, conjuntos de resultados o cualquier grupo de información que debe ser procesado en conjunto.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
 const ejemploArreglo = [42, "Hola", true, null, { nombre: "Julieth" }, [1, 2, 3]];


// Muestra el arreglo `arregloMixto` en la consola.

const arregloMixto = [42, "Hola", true, null, { nombre: "Julieth" }, [1, 2, 3]];

console.log(arregloMixto);

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que Modifica la información del arreglo originalal que se aplican en lugar de crear uno nuevo
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [pop()]
// Descripción: Elimina el último elemento del arreglo 
// Ejemplo: 
   
frutas.pop();
console.log("pop:", frutas);


// Método 2: [El método `push()` ]
// Descripción:agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo:
frutas.push("sandía");  
console.log("push:", frutas);


// Método 3: [shift() ]
// Descripción: Elimina el primer elemento del arreglo
// Ejemplo:
frutas.shift();
console.log("shift:", frutas);


// Método 4: [ unshift()]
// Descripción:  Agrega uno o más elementos al inicio del arreglo
// Ejemplo:
frutas.unshift("kiwi");
console.log("unshift:", frutas);

// Método 5: [splice()]
// Descripción:Agrega, elimina o reemplaza elementos en cualquier posición
// Ejemplo:
frutas.splice(2, 1, "mango"); // en la posición 2, elimina 1 y agrega "mango"
console.log("splice:", frutas); 


// Método 6: [reverse() ]
// Descripción: Invierte el orden de los elementos del arreglo
// Ejemplo:
frutas.reverse();
console.log("reverse:", frutas);

//Metodo 7. sort() 
//Descripcion: Ordena los elementos del arreglo
//ejemplo:
frutas.sort();
console.log("sort:", frutas);

// Metodo 8. fill() 
// Descripcion: Rellena el arreglo con un valor estático
//Ejemplo:
frutas.fill("uva", 1, 3); // desde la posición 1 hasta la 3 (sin incluir la 3)
console.log("fill:", frutas);



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel queaquel que, al aplicarse sobre un arreglo, no modifica el arreglo original sino que devuelve uno nuevo con los cambios realizados.
 * Son importantes porque ayudan a prevenir errores al mantener los datos originales sin alteraciones, facilitando la depuración y el seguimiento del estado de una aplicación,
 * además de favorecer prácticas de programación funcional y mejorar la predictibilidad del código.
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");
const numeros = [1, 2, 3, 4, 5];

// Método 1: [Map()]
// Descripción: Crea un nuevo arreglo con los resultados de la función aplicada a cada elemento.
// Ejemplo:
const cuadrados = numeros.map(num => num * num);
console.log("map:", cuadrados);

// Método 2: [filter()]
// Descripción:Crea un nuevo arreglo con los elementos que cumplen la condición.
// Ejemplo:
const pares = numeros.filter(num => num % 2 === 0);
console.log("filter:", pares);

// Método 3: [slice()]
// Descripción: Devuelve una copia superficial de una parte del arreglo.
// Ejemplo:
const subArreglo = numeros.slice(1, 4);
console.log("slice:", subArreglo);

// Método 4: [concat() ]
// Descripción: Combina dos o más arreglos y devuelve uno nuevo
// Ejemplo:
const masNumeros = numeros.concat([6, 7]);
console.log("concat:", masNumeros);

// Método 5: [join()]
// Descripción: Une todos los elementos de un arreglo en una cadena.
// Ejemplo:
const comoCadena = numeros.join("-");
console.log("join:", comoCadena);

// Método 6: [reduce()]
// Descripción: Reduce el arreglo a un solo valor.
// Ejemplo:
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log("reduce:", suma);

// Método 7: [toString()]
// Descripción: Convierte el arreglo en una cadena de texto.
// Ejemplo:
const texto = numeros.toString();
console.log("toString:", texto);

// Método 8: [includes() ]
// Descripción: Verifica si el arreglo contiene cierto elemento
// Ejemplo:
const tieneTres = numeros.includes(3);
console.log("includes:", tieneTres);

// Método 9: [find()]
// Descripción: Retorna el primer elemento que cumple la condición.
// Ejemplo:
const mayorQueTres = numeros.find(num => num > 3);
console.log("find:", mayorQueTres);

// Método 10: [ every() ]
// Descripción:Verifica si todos los elementos cumplen una condición.
// Ejemplo:
const todosMayoresQueCero = numeros.every(num => num > 0);
console.log("every:", todosMayoresQueCero);