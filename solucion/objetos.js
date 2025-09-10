// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es una estructura de datos en JavaScript que permite almacenar información mediante una colección de pares clave-valor.
 * Se define usando llaves `{}` y dentro de ellas se escriben las propiedades y sus respectivos valores.
 * Los objetos literales son útiles para organizar y agrupar datos relacionados de manera sencilla y legible.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const persona = {
  nombre: "Julieth",
  edad: 25,
  profesion: "Desarrolladora"
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
  marca: "Lenovo",
  modelo: "ThinkPad X1 Carbon",
  ram: "16GB",
  almacenamiento: "512GB SSD",
  procesador: "Intel Core i7"
};

// Muestra el objeto `computador` en la consola.

console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es un objeto creado a partir de una función constructora usando la palabra clave `new`.
 * Permite crear múltiples instancias de objetos con las mismas propiedades y métodos definidos en la función constructora.
 * 
 * La diferencia con un objeto literal es que el literal se define directamente usando llaves `{}` y se utiliza para crear un solo objeto específico,
 * mientras que el constructor permite crear varios objetos similares de forma dinámica.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
const computador2 = new Object();


// Asigna las propiedades aquí

computador2.marca = "Lenovo";
computador2.modelo = "ThinkPad X1 Carbon";
computador2.ram = "16GB";
computador2.almacenamiento = "512GB SSD";
computador2.procesador = "Intel Core i7";

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí hh

function Producto(nombre, precio, categoria, stock, marca) {

  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
  this.stock = stock;
  this.marca = marca;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Mouse inalámbrico", 50000, "Accesorios", 20, "Logitech");
const producto2 = new Producto("Monitor LED", 800000, "Pantallas", 10, "Samsung");

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
// Muestra las instancias en la consola

console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);