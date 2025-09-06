// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Felipe Uñates]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
// R- Es una estructura de datos que guarda varios elementos en una sola variable, puede guardar diferentes tipos de datos.
/**
 * // 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Los arreglos se utilizan para almacenar colecciones de datos, como listas de elementos, y permiten realizar operaciones sobre esos datos de manera eficiente.
 * También facilitan la manipulación y el acceso a los datos mediante índices.
 * para recorrer y procesar datos con bucles
*/

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí

let arreglo1 = ["hola mundo", 34, true,{ nombre: "felipe",edad :34 }, [1, 2, 3], function() {return "soy una funcion dentro de un arreglo"}];


// Muestra el arreglo `arregloMixto` en la consola.

console.log(arreglo1[0]); 
console.log(arreglo1[1]); 
console.log(arreglo1[3].nombre); 
console.log(arreglo1[4].edad); 
console.log(arreglo1[5]()); 


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que cambia (modifica) el arreglo original sobre el que se aplica.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push()]
// Descripción: Agrega uno o más elementos al final del arreglo.
// Ejemplo:
let numero = [1, 2, 3];
numero.push(4, 5);
console.log(numero);


// Método 2: [pop()]
// Descripción: Elimina el último elemento del arreglo y lo devuelve.
// Ejemplo:
let frutas = ["Manzana", "Banana", "Mango"];
frutas.pop();
console.log(frutas);

// Método 3: [shift()]
// Descripción: Elimina el primer elemento del arreglo y lo devuelve.
// Ejemplo:
let verduras = ["Zanahoria", "Brócoli", "Espinaca"];
verduras.shift();
console.log(verduras);

// Método 4: [unshift()]
// Descripción: Agrega uno o más elementos al inicio del arreglo.
// Ejemplo:
let legumbres = ["Lentejas", "Garbanzos"];
legumbres.unshift("Frijoles");
console.log(legumbres);

// Método 5: [splice()]
// Descripción: Cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos.
// Ejemplo:
let colores = ["Rojo", "Verde", "Azul"];
colores.splice(1, 1, "Amarillo", "Naranja");
console.log(colores);

// Método 6: [sort()]
// Descripción: Ordena los elementos del arreglo.
// Ejemplo:
let num = [5, 2, 8, 1, 4];
num.sort();
console.log(num);

// Método 7: [reverse()]
// Descripción: Invierte el orden de los elementos del arreglo.
// Ejemplo:
let letras = ["a", "b", "c"];
letras.reverse();
console.log(letras);

// Método 8: [fill()]
// Descripción: Rellena todos los elementos del arreglo con un valor estático desde un índice inicial hasta un índice final.
// Ejemplo:
let array = [1, 2, 3, 4, 5];
array.fill(0, 1, 4);
console.log(array);

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el arreglo original, sino que devuelve uno nuevo con los cambios aplicados. Son importantes porque permiten mantener la integridad de los datos y evitar efectos secundarios no deseados.
 */
 
// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [map()]
// Descripción: Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original.
// Ejemplo:
let numeros = [1, 2, 3];
let dobles = numeros.map(x => x * 2);

console.log(numeros); 
console.log(dobles);  

// Método 2: [filter()]
// Descripción: Crea un nuevo arreglo con todos los elementos que cumplan la condición implementada por la función dada.
// Ejemplo:
let mayoresDeDos = numeros.filter(x => x > 2);
console.log(mayoresDeDos); 


// Método 3: [slice()]
// Descripción: Crea una copia superficial de una porción del arreglo original.
// Ejemplo:
let parte = numeros.slice(1, 3);
console.log(parte); 

// Método 4: [concat()]
// Descripción: Se utiliza para unir dos o más arreglos y devuelve un nuevo arreglo.
// Ejemplo:
let masNumeros = numeros.concat([4, 5, 6]);
console.log(masNumeros);

// Método 5: [reduce()]
// Descripción: Aplica una función a un acumulador y a cada valor del arreglo (de izquierda a derecha) para reducirlo a un único valor.
// Ejemplo:
let suma = numeros.reduce((acum, val) => acum + val, 0);
console.log(suma);