// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Andres Rios Arbelaez

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Un objeto literal es una de las formas más simples y directas de crear objetos en JavaScript.
 * Se define usando llaves {} y permite agrupar datos y comportamientos relacionados en una sola entidad.
 * Su propósito principal es representar un solo objeto con propiedades y métodos definidos explícitamente.
 * Es ideal para crear objetos únicos de manera rápida y sencilla.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí

// Un objeto literal se declara usando 'const', 'let' o 'var', seguido del nombre de la variable y llaves {} que contienen las propiedades.
const objetoUnoLiteral = {
  nombre: "EjemploUsuario", // string: nombre de la persona
  edad: 25,                 // number: edad de la persona
  activo: true              // boolean: si está activo o no
};
console.log("Objeto literal básico:", objetoUnoLiteral);

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí

// Creamos un objeto literal llamado 'computador' que representa un computador real
const computador = {
  marca: "Lenovo", // string: marca del computador
  ram: 16,         // number: cantidad de memoria RAM en GB
  esPortatil: true, // boolean: indica si es portátil
  perifericos: ["mouse", "teclado"], // array: lista de periféricos conectados
  procesador: {    // objeto anidado: información del procesador
    marca: "Intel", // string: marca del procesador
    nucleos: 8      // number: cantidad de núcleos
  }
};
// Mostramos el objeto computador en la consola
console.log("Objeto computador:", computador);


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Un objeto por constructor es un objeto creado usando una función constructora o el constructor Object().
 * A diferencia del objeto literal, permite crear múltiples instancias con la misma estructura.
 * Es útil cuando necesitamos crear varios objetos similares de manera eficiente.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

// Usando new Object()
// Creamos un objeto usando el constructor 'new Object()' y le asignamos las mismas propiedades que el objeto computador
const computador2 = new Object();
computador2.marca = "Lenovo"; // string
computador2.ram = 16; // number
computador2.esPortatil = true; // boolean
computador2.perifericos = ["mouse", "teclado"]; // array
computador2.procesador = { marca: "Intel", nucleos: 8 }; // objeto anidado
// Mostramos el objeto computador2 en la consola
console.log("Objeto computador (por constructor):", computador2);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

// Definimos una función constructora llamada Producto
function Producto(nombre, precio, disponible) {
  this.nombre = nombre;      // string: nombre del producto
  this.precio = precio;      // number: precio del producto
  this.disponible = disponible; // boolean: si está disponible o no
}
// Creamos dos instancias de Producto usando la función constructora
const prod1 = new Producto("Mouse", 50, true); // Producto disponible
const prod2 = new Producto("Teclado", 100, false); // Producto no disponible
// Mostramos las instancias en la consola
console.log("Instancia 1 de Producto:", prod1);
console.log("Instancia 2 de Producto:", prod2);



// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Andres Rios Arbelaez]

// Ejercicio de Aplicación Práctica: Gestión de una Playlist
console.log("\n--- EJERCICIO DE APLICACIÓN: GESTIÓN DE PLAYLIST ---");

const playlistInicial = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355 },
    { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
    { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
];

// 1. Añadir una nueva canción al FINAL de la playlist usando push (mutable)
playlistInicial.push({ titulo: "Imagine", artista: "John Lennon", duracion: 183 });
console.log(playlistInicial);

// 2. Eliminar la PRIMERA canción usando shift (mutable)
playlistInicial.shift();
console.log(playlistInicial);

// 3. Crear una NUEVA playlist solo con títulos (inmutable, usando map)
const soloTitulos = playlistInicial.map(cancion => cancion.titulo);
console.log(soloTitulos);

// 4. Crear una NUEVA playlist con canciones de más de 400 segundos (inmutable, usando filter)
const cancionesLargas = playlistInicial.filter(cancion => cancion.duracion > 400);
console.log(cancionesLargas);

// 5. Encontrar la primera canción de "Eagles" (inmutable, usando find)
const cancionEagles = playlistInicial.find(cancion => cancion.artista === "Eagles");
console.log(cancionEagles);

// --- ¿QUÉ ES UN ARREGLO? ---
// Un arreglo es una estructura que almacena varios valores en una sola variable.
const ejemplo = [1, "texto", true, {a:1}, [2,3]]; // Puede contener cualquier tipo de dato

// --- MÉTODOS MUTABLES ---
// push: agrega al final
let arr = [1,2];
arr.push(3); // arr ahora es [1,2,3]

// pop: elimina el último
arr.pop(); // arr ahora es [1,2]

// shift: elimina el primero
arr.shift(); // arr ahora es [2]

// unshift: agrega al inicio
arr.unshift(0); // arr ahora es [0,2]

// splice: agrega o elimina en cualquier posición
arr.splice(1,0,1.5); // arr ahora es [0,1.5,2]

// --- MÉTODOS INMUTABLES ---
// map: crea un nuevo arreglo transformando cada elemento
const dobles = arr.map(x => x*2); // arr no cambia

// filter: crea un nuevo arreglo con los que cumplen condición
const mayores = arr.filter(x => x > 1);

// slice: copia una parte
const copia = arr.slice(0,2);

// concat: une arreglos
const unido = arr.concat([3,4]);

// find: busca el primer elemento que cumple condición
const encontrado = arr.find(x => x > 1);