// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [ALEJANDRA CORREA PEREZ]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es la forma más sencilla de crear un objeto, escribiéndolo directamente con llaves {} y definiendo sus propiedades como pares clave: valor.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí

const carro = {
  marca: "MAZDA",
  modelo: "3",
  año: 2022,
  encender: function() {
    return "El carro está encendido";
  }
};

console.log(carro.marca); 
console.log(carro.encender());

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí

const computador = {
  marca: "Lenovo",
  procesador: "Intel Core i7",
  memoriaRAM: "16GB",
  almacenamiento: "512GB SSD",
  pantalla: "15.6 pulgadas"
};



// Muestra el objeto `computador` en la consola.

console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es es una función especial que se utiliza como “molde” para crear múltiples objetos con las mismas propiedades y métodos
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

const computadorPorConstructor = new Object();


// Asigna las propiedades aquí

computadorPorConstructor.marca = "Lenovo";
computadorPorConstructor.procesador = "Intel Core i7";
computadorPorConstructor.memoriaRAM = "16GB";
computadorPorConstructor.almacenamiento = "512GB SSD";
computadorPorConstructor.pantalla = "15.6 pulgadas";

// Muestra el objeto `computadorPorConstructor` en la consola.

console.log(computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

function Producto(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;

  this.mostrarInfo = function() {
    return `${this.nombre} - $${this.precio} (${this.categoria})`;
  };
}

// Crea dos instancias de `Producto`
// Escribe el código aquí

const producto1 = new Producto("Celular", 1200, "Electrónica");
const producto2 = new Producto("Cafetera", 350, "Hogar");

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);

console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);