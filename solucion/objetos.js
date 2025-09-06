// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Juliana Jimenez Molina]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es es una forma sencilla y directa de crear un objeto utilizando una lista de pares clave-valor dentro de llaves {}
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí 
const nombreObjeto = {
  clave1: valor1,
  clave2: valor2,
  clave3: valor3,
  
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí

const computador = {
  marca: "Dell",
  modelo: "XPS 15",
  procesador: "Intel Core i7",
  ram: "16GB",
  almacenamiento: "512GB SSD"
};

// Muestra el objeto `computador` en la consola.

console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es un objeto creado a partir de una función constructora o una clase, que sirve como plantilla para crear múltiples objetos similares con las mismas propiedades y métodos.
 * la diferencia es que el literal crea un objeto único, el constructor permite crear múltiples objetos con la misma estructura.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.

 const computador2 = new Object();

computador.marca = "Dell";
computador.modelo = "XPS 15";
computador.procesador = "Intel Core i7";
computador.ram = "16GB";
computador.almacenamiento = "512GB SSD";

console.log(computador2);


// Muestra el objeto `computadorPorConstructor` en la consola.

const computadorPorConstructor = new Object();

computadorPorConstructor.marca = "Dell";
computadorPorConstructor.modelo = "XPS 15";
computadorPorConstructor.procesador = "Intel Core i7";
computadorPorConstructor.ram = "16GB";
computadorPorConstructor.almacenamiento = "512GB SSD";

console.log(computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

function Producto(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
  }

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Laptop", 2500, "Tecnología");
const producto2 = new Producto("Silla ergonómica", 750, "Oficina");




// Muestra las instancias en la consola

console.log(producto1);
console.log(producto2);
