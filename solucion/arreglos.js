// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Paulina Londoño Diaz]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una estructura que almacena multiples valores en una sola variable. 
 * lo arreglos pueden tener elementos de diferentes tipos de datos. 
 * se crean usando corchetes [] y sus elementos se acceden con su indice, que comienza en 0.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para alamacenar y utilizar multiples elementos en una sola variable 
 * esta es util para manejar colecciones de datos o lista de productos.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
    const arregloMixto = [42, "Hola Mundo", true, { nombre: "Juan", edad: 30 }, [1, 2, 3]];

// Muestra el arreglo `arregloMixto` en la consola.
console.log(arregloMixto);



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que modifica los cambios de un objeto o arreglo, cambiando su estado original.
 * en este se usa metodos como: push() o pop().
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push()]
// Descripción: Añade uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo: let frutas = ["manzana", "platano"]
let frutas = ["manzana", "platano"]
frutas.push ("naranja");
console.log(frutas);


// Método 2: [pop()]
// Descripción: Elimina el último elemento de un arreglo y lo devuelve. Modifica el arreglo original.
// Ejemplo:
let frutas = ["manzana", "platano", "naranja"];
let eliminado = frutas.pop();
console.log(frutas);
console.log(eliminado);


// Método 3: [shift()]
// Descripción: Elimina el primer elemento de un arreglo y lo devuelve, desplazando todos los demás elementos.
// Ejemplo:
let frutas = ["manzana", "platano", "naranja"];
let eliminados = frutas.shift();
console.log(frutas);
console.log(eliminado);


// Método 4: [unshift()]
// Descripción: Añade uno o más elementos al inicio de un arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo:
let Frutas = ["platano", "naranja"];
let añadido = frutas.unshift("manzana");
console.log(frutas);


// Método 5: [splice()]
// Descripción: Cambia el contenido de un arreglo eliminando, reemplazando o añadiendo elementos en cualquier posición.
// Ejemplo:
let frutas = ["manzana", "platano", "naranja"];
frutas.splice[1,1, "pera", "kiwi"];
console.log(frutas);


// Método 6: [sort()]
// Descripción: Ordena los elementos de un arreglo en su lugar y devuelve el arreglo ordenado. El orden es por defecto alfabético o lexicográfico.
// Ejemplo:
let numeros = [5,9,7,1];
numeros.sort();
console.log(numeros);


// Método 7: [reverse()]
// Descripción: Invierte el orden de los elementos de un arreglo en su lugar.
// Ejemplo:
let numero = [1,4,6,8];
numero.reverase();
console.log(numero);


// Método 8: [fill()]
// Descripción: Cambia todos los elementos de un arreglo por un valor estático, desde un índice de inicio hasta un índice de finalización.
// Ejemplo:
let Numeros = [1, 2, 3, 4, 5];
Numeros.fill(0, 2, 4);
console.log(Numeros);



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el dato original sino que crea y devuelve una nueva versión con los cambios aplicado. 
 * Son importantes porque garantiza la integridad de los datos, previenen errores y facilitan el avance del la estructura. 
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [map()]
// Descripción: Crea un nuevo arreglo con los resultados de aplicar una función a cada uno de los elementos del arreglo original. El arreglo original no se ve afectado.
// Ejemplo:
let numeros = [1, 2, 3, 4]

let numerosPar = numeros.map(num => num * 2 )
console.log(numeros);
console.log(numerosPar);


// Método 2: [filter()]
// Descripción: Crea un nuevo arreglo con todos los elementos que pasen una prueba (función proporcionada). El arreglo original no se modifica.
// Ejemplo:
let numeros =[1, 2, 3, 4, 5];

let mayoresQueTres= numero.filter( num => num < 3);
console.log(numeros);
console.log(mayoresQueTres);


// Método 3: [concat()]
// Descripción: Une uno o más arreglos y devuelve un nuevo arreglo. El arreglo original no es modificado.
// Ejemplo:
let frutas = ["manzana", "platano"];
let otrasFrutas = ["naranja", "Kiwi"];

let todasLasFrutas = frutas.concat(otrasFrutas)
console.log(frutas);
console.log(todasLasFrutas);


// Método 4: [slice()]
// Descripción: Devuelve una copia superficial de una porción del arreglo original, sin modificar el arreglo original.
// Ejemplo:
let numero = [1, 2, 3, 4, 5];
let subArreglo = numero.slice(1,3);

console.log(numero);
console.log(subArreglo);



// Método 5: [reduce()]
// Descripción: Aplica una función de reducción a cada elemento del arreglo, acumulando el resultado. Devuelve un solo valor basado en la acumulación, y no modifica el arreglo original.
// Ejemplo:
let numero = [1, 2, 3, 4];
let suma= numero.reduce((acomulado, valor) => acomulado + valor, 0);

console.log(numero);
console.log(suma);

