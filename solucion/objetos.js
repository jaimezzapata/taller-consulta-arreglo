// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Sergio Alejandro Atehortua Perez

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/*
 * Escribe tu explicación aquí:
   Un objeto literal es una estructura en JavaScript que permite almacenar 
   información en pares clave-valor dentro de llaves { }. 
   Se utiliza para representar objetos de forma sencilla y directa sin 
   necesidad de crear una clase o usar el constructor Object().
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Medellín"
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
  marca: "Lenovo",
  modelo: "ThinkPad X1",
  procesador: "Intel Core i7",
  memoriaRAM: "16GB",
  almacenamiento: "512GB SSD"
  };

// Muestra el objeto `computador` en la consola.

console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 /*
   Un objeto por constructor es aquel que se crea utilizando la función 
   constructora Object() con la palabra reservada "new", o bien mediante 
   una función constructora definida por el programador.
 
   Diferencia con el objeto literal:
   - El objeto literal se define directamente con llaves { } y es más simple.
   - El objeto por constructor se crea usando "new Object()" o una función 
     constructora, lo que permite generar múltiples instancias con 
     la misma estructura.
 */

/* 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
const computadorPorConstructor = new Object();

// Asigna las propiedades aquí
*/
computadorPorConstructor.marca = "Lenovo";
computadorPorConstructor.modelo = "ThinkPad X1";
computadorPorConstructor.procesador = "Intel Core i7";
computadorPorConstructor.memoriaRAM = "16GB";
computadorPorConstructor.almacenamiento = "512GB SSD";

// Muestra el objeto `computadorPorConstructor` en la consola.

console.log("Objeto creado con constructor:", computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Celular", 1200, "Electrónica");
const producto2 = new Producto("Silla Gamer", 800, "Muebles");

// Muestra las instancias en la consola
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
