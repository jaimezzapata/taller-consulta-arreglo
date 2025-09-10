// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Daniel Esteban Lema Gamboa

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal en JavaScript es una estructura de datos que permite agrupar valores y funciones
 * bajo una misma entidad, usando una sintaxis de llaves {} y pares clave-valor.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero"
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
  marca: "HP",
  modelo: "Latitude",
  procesador: "Intel Core i7",
  memoriaRam: "16 GB",
  discoDuro: "1 TB"
};


// Muestra el objeto `computador` en la consola.
console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es una funcion nex Object(). permitiendo crear multiples instancias con
 * los mismos metodos y propiedades o parametros.
 * la diferencia con el literal es que literal se define directamente con llaves {}.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
const computadorPorConstructor = new Object();

// Asigna las propiedades aquí
computadorPorConstructor.marca = "HP";
computadorPorConstructor.modelo = "Latitude";
computadorPorConstructor.procesador = "Intel Core i7";
computadorPorConstructor.memoriaRam = "16 GB";
computadorPorConstructor.discoDuro = "1 TB";

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadorPorConstructor);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, categoria, marca, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
  this.marca = marca;
  this.stock = stock;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Laptop", 3500000, "Tecnología", "HP", 10);
const producto2 = new Producto("Celular", 1200000, "Tecnología", "Samsung", 25);


// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
