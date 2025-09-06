// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [johana peña henao]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal en JavaScript es una sintaxis para crear un objeto directamente en el código, definiendo sus pares clave-valor (propiedades) entre llaves {}. Es una forma concisa y eficiente de agrupar datos relacionados que se pueden manipular fácilmente, sin necesidad de crear una instancia a través de una clase o constructor.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí

 let nom_objetoliteral = {
  clave1: valor1,
  clave2: valor2,
  clave3: valor3
}

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí

let computador = {
  marca: "ASUS", // string
  ramGB: 16, // number
  tieneSSD: true, // boolean
  puertos: ["USB", "HDMI", "Ethernet"], // array
  procesador: { // objeto anidado
    marca: "Intel",
    modelo: "Core  i9-11900H ",
    nucleos: 14,
    frecuenciaGHz: 2.3
  }
};



// Muestra el objeto `computador` en la consola.

console.log(computador)


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí: 
 * Un objeto por constructor en JavaScript es un objeto creado a partir de una función constructora, que actúa como una plantilla o molde para crear múltiples instancias de ese objeto con propiedades y métodos similares.
 * La diferencia entre un constructor y un objeto literal es que el objeto literar se define por medio de una sintaxis simple para definir un objeto único con propiedades y métodos especificos directamente en el código y un constructor permiten crear multiples intancias reutilzadas de un mismo tipo de objeto
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

let computador = new Computador();


// Asigna las propiedades aquí
computador.marca = "ASUS"; // string
computador.ramGB = 16; // number
computador.tieneSSD = true; // boolean
computador.puertos = ["USB", "HDMI", "Ethernet"]; // array

computador.procesador = new Computador(); // objeto anidado
computador.procesador.marca = "Intel";
computador.procesador.modelo = "Core i9-11900H";
computador.procesador.nucleos = 14;
computador.procesador.frecuenciaGHz = 2.3;

// Muestra el objeto `computadorPorConstructor` en la consola.

console.log(computador)

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;

  this.mostrarInfo = function() {
    console.log(`Producto: ${this.nombre}, Precio: $${this.precio}, Disponible: ${this.disponible ? "Sí" : "No"}`);
  };
}


// Crea dos instancias de `Producto`

const producto1 = new Producto("Laptop", 3500, true);
const producto2 = new Producto("Audífonos", 250, false);

// Escribe el código aquí

function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;

  this.mostrarInfo = function() {
    console.log(`Producto: ${this.nombre}, Precio: $${this.precio}, Disponible: ${this.disponible ? "Sí" : "No"}`);
  };
}

const producto1 = new Producto("Laptop", 3500, true);
const producto2 = new Producto("Audífonos", 250, false);


// Muestra las instancias en la consola

producto1.mostrarInfo(); // Producto: Laptop, Precio: $3500, Disponible: Sí
producto2.mostrarInfo(); // Producto: Audífonos, Precio: $250, Disponible: No

// console.log("Instancia 1 de Producto:", producto1);
producto1.mostrarInfo(); // Producto: Laptop, Precio: $3500, Disponible: Sí

// console.log("Instancia 2 de Producto:", producto2);
producto2.mostrarInfo(); // Producto: Audífonos, Precio: $250, Disponible: No