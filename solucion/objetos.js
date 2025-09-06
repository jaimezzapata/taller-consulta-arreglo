// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Victor Andres Sanchez Arroyave

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 objeto literal en JavaScript es una forma de organizar información mediante la asociación
  de propiedades y sus valores dentro de un conjunto delimitado por llaves {}. Su función 
  principal es modelar elementos con sus atributos, facilitando su manejo y manipulación de 
  manera estructurada.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// 
/** const animal = {
  nombre: "Perro",
  Modelo: 2026
}; 
*/

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
//  
/** const computador = {
  marca: "Dell",
  modelo: "XPS 15",
  procesador: "Intel Core i7",
  memoriaRAM: "32GB",
  almacenamiento: "1TB SSD"
};
*/ 


// Muestra el objeto `computador` en la consola.

/**  console.log(computador) */ 


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 Un objeto por constructor es un objeto creado a partir de una función especial llamada constructor. 
 Esta función define una plantilla o “molde” para crear múltiples objetos similares, permitiendo 
 asignar propiedades y métodos a cada instancia que se genere con la palabra clave new
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.

// Escribe el código aquí
/**  const computador = new Object(); */

// Asigna las propiedades aquí

/** 
computador.marca = "Dell";
computador.modelo = "XPS 15";
computador.procesador = "Intel Core i7";
computador.memoriaRAM = "16GB";
computador.almacenamiento = "512GB SSD"; 
*/  

// Muestra el objeto `computadorPorConstructor` en la consola.

/** console.log(computador) */



// 3. Crea una función constructora llamada `Producto` y crea dos instancias.

/** // Escribe el código aquí
  function Producto(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
}

// Crea dos instancias de `Producto`
const producto1 = new Producto("Libro", 15, "Educación");
const producto2 = new Producto("Silla", 85, "Muebles");

// Muestra las instancias en la consola

console.log(producto1);
console.log(producto2);
 */








