// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [didier esteban achuri lopez]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es  una forma de declarar y definir un objeto directamente en el código, escribiendo 
    sus propiedades y métodos entre llaves {} en una sintaxis concisa, en lugar de crear
    un objeto a partir de una función constructora o clase.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const a = {

}

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
  marca: "Dell",
  modelo: "XPS 15",
  año: 2020,
  procesador: "Intel i7",
  ram: "16GB"
}


// Muestra el objeto `computador` en la consola.
console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
// * Escribe tu explicación aquí:
// * Un objeto por constructor es una instancia de un objeto creado a partir de una función
// * constructora. La diferencia con el objeto literal es que el objeto por constructor se
// * crea utilizando la palabra clave `new` y puede tener métodos y propiedades definidas
// * en su prototipo.

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
const computadorPorConstructor = new Object();

// Asigna las propiedades aquí
computadorPorConstructor.marca = "Dell";
computadorPorConstructor.modelo = "XPS 15";
computadorPorConstructor.año = 2020;
computadorPorConstructor.procesador = "Intel i7";
computadorPorConstructor.ram = "16GB";

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(marca, modelo, año, procesador, ram) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.procesador = procesador;
  this.ram = ram;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Apple", "MacBook Pro", 2021, "M1", "16GB");
const producto2 = new Producto("HP", "Spectre x360", 2022, "Intel i7", "16GB");


// Muestra las instancias en la consola
console.log(producto1);
console.log(producto2); */