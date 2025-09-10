// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Juan Sebastian Herrera Ochoa]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
    * Que es un objeto literal:
        *R/ Un objeto literal es como un molde en el que se defienen los valores de el objeto, en el que se se crea algo y se le asignan algunas características por así decirlo.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí:
const persona = {
    nombre: "Ana",
    edad: 25,
    profesion: "Ingeniera"
};


// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
    marca: "Lenovo",
    modelo: "Octava generación",
    año: 2020,
    ram: "16GB",
    almacenamiento: "512GB SSD"
};


// Muestra el objeto `computador` en la consola.
    console.log("Objeto computador:", computador);


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
       *R/ Un objeto por constructor es como una plantilla o un plano que se utiliza para crear múltiples objetos con las mismas características y comportamientos, pero con valores diferentes. Como que sigue siendo el mismo objeto pero con diferentes caracteristicas
 */ 

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí:
const computadorPorConstructor = new Object();

// Asigna las propiedades aquí:
computadorPorConstructor.marca = "Lenovo";
computadorPorConstructor.modelo = "Octava generación";
computadorPorConstructor.año = 2020;
computadorPorConstructor.ram = "16GB";
computadorPorConstructor.almacenamiento = "512GB SSD";


// Muestra el objeto `computadorPorConstructor` en la consola.
console.log("Objeto computadorPorConstructor:", computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Lenovo", "Octava generación");
const producto2 = new Producto("HP", "Séptima generación");


// Muestra las instancias en la consola
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);

