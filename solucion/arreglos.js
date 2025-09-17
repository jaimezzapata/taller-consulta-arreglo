// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Yeisson Angel Ossa]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una estructura que permite almacenar valores ya sean cadenas de texto, int, booleanos, objetos, etc. Dentro de un mismo arreglo.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para al macenar varios valores o datos como habiamos dicho anteriormente, si llevamos esto a un plano mas realista podriamos 
 * realizar un carro de compras, una liosta de tareas, una lista numerica, etc.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
let arregloMixto = [42, "Hola", true, { nombre: "Yeisson" }, [1, 2, 3]
]


// Muestra el arreglo `arregloMixto` en la consola.



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que nos permite modificar cualquier elemento de un arreglo, ya sea agregar, eliminar o cambiar elementos.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push]
// Descripción: agrega uno o más elementos al final de un arreglo.
// Ejemplo:
let frutas = ["Manzana", "Banana"];
frutas.push("Naranja");


// Método 2: [pop]
// Descripción: elimina el último elemento de un arreglo.
// Ejemplo:
let ultimaFruta = frutas.pop();


// Método 3: [shift]
// Descripción: elimina el primer elemento de un arreglo.
// Ejemplo:
let primeraFruta = frutas.shift();

// Método 4: [unshift]
// Descripción: agrega uno o más elementos al inicio de un arreglo.
// Ejemplo:
frutas.unshift("Fresa", "Mango");


// Método 5: [splice]
// Descripción: permite agregar, eliminar o reemplazar elementos en un arreglo.
// Ejemplo:
frutas.splice(1, 1, "Kiwi"); 


// Método 6: [reverse]
// Descripción: inviierte el orden de los elementos en un arreglo. 
// Ejemplo:
frutas.reverse();


// Método 7 : [sort]
// Descripción: ordena los elementos de un arreglo.
// Ejemplo:
frutas.sort();


// Método 8 : [fill]
// Descripción: rellena todos los elementos de un arreglo con un valor estático.
// Ejemplo:
let numeros = [1, 2, 3, 4, 5];




// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el arreglo original sino que devuelve el cambio realizado, estos son importantes porque
 * mantienen los datos originales.
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [map]
// Descripción: Agrega uno o más elementos al final del arreglo.
// Ejemplo:
let numerosMap = [1, 2, 3];
let dobles = numerosMap.map(x => x * 2);


// Método 2: [filter]
// Descripción: Descripción: Elimina el último elemento del arreglo.
// Ejemplo:
let numerosFilter = [1, 2, 3, 4];
let pares = numerosFilter.filter(x => x % 2 === 0);


// Método 3: [slice]
// Descripción: Descripción: Elimina el primer elemento del arreglo.
// Ejemplo:
let frutasSlice = ["Manzana", "Banana", "Naranja"];
let algunasFrutas = frutasSlice.slice(0, 2);


// Método 4: [concat]
// Descripción: Une dos o más arreglos y devuelve un nuevo arreglo.
// Ejemplo:
let arrA = [1, 2];
let arrB = [3, 4];
let arrConcat = arrA.concat(arrB);


// Método 5: [join]
// Descripción: Convierte todos los elementos de un arreglo en una cadena, separados por un separador especificado.
// Ejemplo:
let letras = ["a", "b", "c"];
let cadena = letras.join("-");


// Método 6: [toString]
// Descripción: Convierte un arreglo en una cadena de texto.
// Ejemplo:
let numerosToString = [1, 2, 3];
let texto = numerosToString.toString();


// Método 7: [flat]
// Descripción: Aplana un arreglo de arreglos en un solo nivel.
// Ejemplo:
let arrFlat = [1, [2, 3], [4, 5]];
let plano = arrFlat.flat();


// Método 8: [reduce]
// Descripción: Aplica una función a un acumulador y a cada valor de un arreglo para reducirlo a un único valor.
// Ejemplo:
let numsReduce = [1, 2, 3, 4];
let suma = numsReduce.reduce((acc, val) => acc + val, 0);


// Método 9: [includes]
// Descripción: Verifica si un arreglo contiene un elemento específico.
// Ejemplo:
let frutasIncludes = ["Manzana", "Banana"];
let tieneBanana = frutasIncludes.includes("Banana"); 


// Método 10: [find]
// Descripción: Devuelve el primer elemento que cumple con una condición específica.
// Ejemplo:
let numerosFind = [5, 10, 15, 20];
let mayorQue10 = numerosFind.find(x => x > 10);
