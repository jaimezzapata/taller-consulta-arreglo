// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Alejandra Alvarez Naranjo]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es se define directamente entre llaves {} en el código. 
 * Esta es una forma rápida y eficiente de crear objetos, lo que permite agrupar información relacionada de manera organizada, 
 * como si se tratara de un registro o una entidad del mundo real con sus características
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí 
let persona = {
  nombre: "Lucy",
  edad: 24,
  profesion: "Desarrolladora"
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
let computador = {
  marca: "MSI",
  modelo: "GS66 Stealth",
  procesador: "Intel Core i7-11800H",
  memoriaRAM: "16GB DDR4",
  almacenamiento: "1TB NVMe SSD",
  sistemaOperativo: "Windows 11"
};

// Muestra el objeto `computador` en la consola.
console.log (computador); 

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor Esta función se encarga de crear y configurar nuevas instancias de objetos, asignando valores a sus propiedades y métodos de manera estructurada.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
let computador2 = new Object();


console.log(computador2);
// Asigna las propiedades aquí

computador.marca2 = "MSI";
computador.modelo2 = "GS66 Stealth";
computador.procesador2 = "Intel Core i7-11800H";
computador.memoriaRAM2 = "16GB DDR4";
computador.almacenamiento2 = "1TB NVMe SSD";
computador.sistemaOperativo2 = "Windows 11";

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computador2);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
}


// Crea dos instancias de `Producto`
// Escribe el código aquí
let animal1 = new Animal("Hachi", "Perro");
let animal2 = new Animal("Iris", "Gato");

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
console.log("Instancia 1 de Producto:", animal1);
console.log("Instancia 2 de Producto:", animal2);