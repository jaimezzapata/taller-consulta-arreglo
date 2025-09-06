// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Alejandro Muñoz Godoy]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es...Un objeto es una colección de propiedades (pares clave-valor) 
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
  saludar: function() {
    return `Hola, soy ${this.nombre}`;
  }
};
// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
let computador = {
  marca: 'HP',
  modelo: 'Spectre x360',
  procesador: 'Intel Core i7',
  ram: '16GB',
  almacenamiento: '1TB SSD'
};

// Muestra el objeto `computador` en la consola.
console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es...es una función o un método especial que se utiliza para crear e inicializar nuevas instancias de objetos
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
//
let computador1 = new Object();



// Asigna las propiedades aquí
computador.marca = 'HP';
computador.modelo = 'Spectre x360';
computador.procesador = 'Intel Core i7';
computador.ram = '16GB';
computador.almacenamiento = '1TB SSD';


// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computador1);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
// Crea dos instancias de `Producto`
let producto1 = new Producto('Laptop', 1200, 15);
let producto2 = new Producto('Mouse', 25, 50);

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);

console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
