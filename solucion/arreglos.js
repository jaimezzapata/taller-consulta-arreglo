// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Alejandra Correa Perez]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una lista ordenada, en la que cada elemento tiene una posicion que empieza en 0.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para guardar, organizar y manipular datos.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.

let arregloMixto = ["Alejandra", 31, {ciudad: "Bello"}];



// Muestra el arreglo `arregloMixto` en la consola.

console.log(arregloMixto);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que cualquier metodo que modifica el arreglo original sobre el que se llama.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [Push]
// Descripción: Agrega un elemento, en este caso se agrega una nueva fruta a la lista 
// Ejemplo:

let colores = ["rojo", "verde"];
colores.push("amarillo");
console.log(colores);


// Método 2: [Pop]
// Descripción: Quita el ultimo elemento de la lista
// Ejemplo:

let nombres = ["Alejandra", "Juan", "Luis", "Maria"];
nombres.pop();
console.log(nombres);

// Método 3: [Unshift]
// Descripción: Agrega un nuevo elemento a la lista
// Ejemplo:

let frutas = ["Manzana", "Pera", "Uva"]
frutas.unshift("Lulo");
console.log(frutas);


// Método 4: [Shift]
// Descripción: Quita el primer elemento de la lista
// Ejemplo:

let marcasAutos = ["BMW", "Mazda", "Chrevrolet", "Mercedez-Benz"]
marcasAutos.shift();
console.log(marcasAutos);


// Método 5: [Sort]
// Descripción: Ordena el arreglo
// Ejemplo:

let numeros = [5, 7, 10, 3, 28, 4]
numeros.sort();
console.log(numeros);


// Método 6: [Splice]
// Descripción: Agregar o elimina en cualquier posicion
// Ejemplo:

let letras = ["A", "B", "C", "D"]
letras.splice(1,1);
console.log(letras)



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que al ejecutarse no se modifica el estado del objeto sobre el que se aplica, sino que devuelve un nuevo objeto
 * dejando intacto al original. Son importantes porque permiten trabajar con datos sin alterar el objeto original.
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [MAP]
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento.
// Ejemplo:
const precios = [10, 20, 30];
const conIVA = precios.map(p => p * 1.19); 

// Método 2: [FILTER]
// Descripción: Devuelve un nuevo arreglo con los elementos que cumplen la condición.
// Ejemplo:
const edades = [12, 18, 25, 30];
const mayoresDeEdad = edades.filter(e => e >= 18); 

// Método 3: [REDUCE]
// Descripción: Reduce el arreglo a un solo valor usando una función acumuladora.
// Ejemplo:
const notas = [4.5, 3.8, 5.0];
const promedio = notas.reduce((acc, n) => acc + n, 0) / notas.length;

// Método 4: [SLICE]
// Descripción: Retorna una copia parcial del arreglo sin modificar el original.
// Ejemplo:
const frutass = ["manzana", "pera", "uva", "mango"];
const primerasDos = frutass.slice(0, 2);

// Método 5: [CONCAT]
// Descripción: Une dos o más arreglos en uno nuevo.
// Ejemplo:
const hombres = ["Juan", "Pedro"];
const mujeres = ["Ana", "Lucía"];
const personas = hombres.concat(mujeres);

// Método 6: [TOSORTED]
// Descripción: Devuelve una copia ordenada del arreglo sin alterar el original.
// Ejemplo:
const letra = ["d", "a", "c", "b"];
const ordenadas = letra.toSorted();

// Método 7: [TOREVERSED]
// Descripción: Retorna una copia invertida del arreglo sin modificar el original.
// Ejemplo:
const dias = ["lunes", "martes", "miércoles"];
const invertidos = dias.toReversed();

// Método 8: [TOSPLICED]
// Descripción: Devuelve una copia con elementos agregados, reemplazados o eliminados.
// Ejemplo:
const coloress = ["rojo", "azul", "verde"];
const nuevo = coloress.toSpliced(1, 1, "amarillo");

// Método 9: [FLAT]
// Descripción: Crea un nuevo arreglo aplanando sub-arreglos hasta la profundidad indicada.
// Ejemplo:
const anidado = [1, [2, [3, 4]]];
const plano = anidado.flat(2);

// Método 10: [FLATMAP]
// Descripción: Aplica una función a cada elemento y aplana el resultado en un nuevo arreglo.
// Ejemplo:
const palabras = ["hola", "mundo"];
const letrass = palabras.flatMap(p => p.split(""));
