
// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Alejandro Muñoz Godoy]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es...
 * es  una lista de elemtos que pueden ser de diferentes datos y se permite almacenar
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para : para un listado de elemntos que se pueden recorrer y manipular
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 22 },
  { id: 2, nombre: 'Carlos', edad: 20 },
  { id: 3, nombre: 'María', edad: 21 }
];
// Ejemplo: mostrar el nombre del primer estudiante
console.log(estudiantes[1].nombre);

let datos = [30, "Hola mundo", true, 3.4, {nombre: "Luisa"}, [1, 2, 3]];
console.log(datos);


// Muestra el arreglo `arregloMixto` en la consola.

let mixto = [
  "Alejandro",   
  31,            
  true,          
  { ciudad: "medellin", pais: "Colombia" }, 
  [{ deporte: "Natacion" }, "GYM", "viajar" ]        
];

console.log(mixto);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que...Arreglo que no puede ser modificado directamente
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push]
// Descripción: el push agraga un nuevo elemento al un arreglo
// Ejemplo:
let deportes = ["futbol", "baloncesto", "tenis"];
deportes.push("beisbol");
console.log("Arreglo original:", deportes);

// Método 2: [pop()]
// Descripción: Cuando quieres procesar elementos en orden inverso (ej: deshacer acciones)
// Ejemplo:
let actividades = ["futbol", "baloncesto", "tenis"];
actividades.pop();
console.log("Arreglo original:", actividades(1));


// Método 3: [shift()]
// Descripción: Elimina el primer elemento de un arrey y desplaza los demás elementos hacia adelante.
// Ejemplo:
let razas = ["Labrador", "Poodle", "Bulldog","Beagle"];
razas.shift();
console.log("Arreglo original:", razas);

// Método 4: [unshift()]
// Descripción: agrega un elemento al inicio del arreglo
// Ejemplo:
let moto = ["Yamaha", "Honda", "Suzuki", "Kawasaki"];
moto.unshift("Ducati");
console.log("Arreglo original:", moto);


// Método 5: [reverse()]
// Descripción:invierte el orden de los elementos en un array
// Ejemplo:
let ropa = ["Camisa", "Pantalon", "Zapatos", "Sombrero"];
ropa.splice(1, 1, "Chaqueta");

// Método 6: [sort()]
// Descripción: ordena los elementos de un array  en su lugar y devuelve ordenado
// Ejemplo:
let numeros =[1 , 3, 5, 2, 4, 10,  6, 8, 7, 9];
numeros.sort();
console.log("Arreglo original:", numeros);



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:métodos no modifican el array original, sino que devuelven uno nuevo.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [slice()]
// Descripción: crea una copia superficial de una parte de un array en un nuevo array
// Ejemplo:
let frutas = ["Manzana", "Banana", "Cereza", "Durazno"];
let citricos = frutas.slice(1, 3);
console.log("Arreglo original:", frutas);
console.log("Nuevo arreglo:", citricos);


// Método 2: [concat()]
// Descripción: se una para unir uno o mas arrays
// Ejemplo:
let mascotas = ["Perro", "Gato"];
let aves = ["Loro", "Canario"];
let todos = mascotas.concat(aves);
console.log("Arreglo original:", mascotas);
console.log("Nuevo arreglo:", todos);


// Método 3: [map()]
// Descripción: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// Ejemplo:
let numeros2 = [1, 2, 3, 4, 5];
let cuadrados = numeros2.map(num => num * num);
console.log("Arreglo original:", numeros2);
console.log("Nuevo arreglo:", cuadrados);
