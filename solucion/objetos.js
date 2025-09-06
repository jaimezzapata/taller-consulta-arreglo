// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Andres Rios Arbelaez

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es literalmente una de las formas más simples y comunes de crear objetos en JavaScript.
 * Se define directamente con una sintaxis de llaves `{}`.
 * Su propósito principal es agrupar un conjunto de datos y funcionalidades relacionadas en una sola entidad, usando pares de 'clave-valor' (key-value) para representar las propiedades y los métodos.
 * Es ideal para crear un único objeto de forma rápida y sencilla.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí

// Un objeto literal se declara usando 'const', 'let' o 'var', seguido del nombre de la variable y llaves `{}` que contienen las propiedades.
/*const objetoUnoLiteral = {
    nombre: "Blindprogrammer",
    edad: 30,
    activo: true,
};
console.log("Objeto literal básico:", miObjetoLiteral);

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí


// Muestra el objeto `computador` en la consola.


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es...
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

// Asigna las propiedades aquí


// Muestra el objeto `computadorPorConstructor` en la consola.


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí


// Crea dos instancias de `Producto`
// Escribe el código aquí


// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);





// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Andres Rios Arbelaez]

// Ejercicio de Aplicación Práctica: Gestión de una Playlist
console.log("\n--- EJERCICIO DE APLICACIÓN: GESTIÓN DE PLAYLIST ---");

const playlistInicial = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355 },
    { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
    { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
];

// 1. Añadir una nueva canción al FINAL de la playlist.
//    Utiliza un método mutable.
//    Canción a añadir: { titulo: "Livin' on a Prayer", artista: "Bon Jovi", duracion: 249 }
console.log("\n1. Añadir canción al final:");

// El método .push() modifica el arreglo original, agregando la nueva canción al final.
playlistInicial.push({ titulo: "Livin' on a Prayer", artista: "Bon Jovi", duracion: 249 });
console.log(playlistInicial);

// 2. Eliminar la PRIMERA canción de la playlist.
//    Utiliza un método mutable.
console.log("\n2. Eliminar primera canción:");

// El método .shift() remueve el primer elemento del arreglo, modificando el original.
playlistInicial.shift();
console.log(playlistInicial);

// 3. Crear una NUEVA playlist que contenga solo los títulos de las canciones.
//    Utiliza un método inmutable. El arreglo original no debe cambiar.
console.log("\n3. Crear playlist solo con títulos:");

// El método .map() crea un nuevo arreglo con los resultados de la función aplicada a cada elemento.
const playlistTitulos = playlistInicial.map(cancion => cancion.titulo);
console.log("Playlist original:");
console.log(playlistInicial);
console.log("Solo títulos:");
console.log(playlistTitulos);


// 4. Crear una NUEVA playlist que contenga solo las canciones que duren más de 400 segundos.
//    Utiliza un método inmutable.
console.log("\n4. Crear playlist con canciones largas:");

// El método .filter() crea un nuevo arreglo con los elementos que cumplen la condición de la función.
const playlistLargas = playlistInicial.filter(cancion => cancion.duracion > 400);
console.log("Canciones largas (>400s):");
console.log(playlistLargas);

// 5. Encontrar la primera canción en la playlist que sea de "Eagles".
//    Utiliza un método inmutable y muestra el objeto de la canción encontrada.
console.log("\n5. Encontrar canción de Eagles:");

// El método .find() retorna el primer elemento que cumple la condición, sin modificar el arreglo original.
const cancionEagles = playlistInicial.find(cancion => cancion.artista === "Eagles");
console.log(cancionEagles);