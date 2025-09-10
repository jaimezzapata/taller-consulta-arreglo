// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es Un objeto literal en JavaScript es una manera
 * concisa de crear un objeto con sus propiedades y métodos declarados directamente en el código, encerrados entre llaves {}
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
// Sintaxis básica de un objeto literal
const objeto = {
  clave1: valor1,
  clave2: valor2,
  clave3: valor3
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí


// Muestra el objeto `computador` en la consola.

const computador = {
  marca: "Lenovo",                     // string
  ram: 16,                             // number
  esPortatil: true,                   // boolean
  puertos: ["USB", "HDMI", "Ethernet"], // array
  procesador: {                       // objeto anidado
    marca: "Intel",
    modelo: "Core i7",
    nucleos: 8
  }
};

console.log("Objeto computador:", computador);


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es una instancia creada a partir de una 
 * "plantilla" o clase, lo que permite generar múltiples objetos con la misma estructura pero valores distintos
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`
// Escribe el código aquí

// Asigna las propiedades aquí

const computadorPorConstructor = new Object();

computadorPorConstructor.marca = "Lenovo";                      // string
computadorPorConstructor.ram = 16;                              // number
computadorPorConstructor.esPortatil = true;                     // boolean
computadorPorConstructor.puertos = ["USB", "HDMI", "Ethernet"]; // array

computadorPorConstructor.procesador = {
  marca: "Intel",
  modelo: "Core i7",
  nucleos: 8
};

// Muestra el objeto `computadorPorConstructor` en la consola.


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

const producto1 = new Producto("Teclado mecánico", 49.99, true);
const producto2 = new Producto("Pantalla LED 27 pulgadas", 189.99, false);

console.log("Producto 1:", producto1);
console.log("Producto 2:", producto2);
