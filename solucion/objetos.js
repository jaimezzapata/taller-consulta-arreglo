// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Hernando Manuel Morales Porras]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es una colección de pares clave-valor, creada directamente con la sintaxis {}.
 * Clave (key) = Es el nombre de la propiedad.
 * Valor (value) = Es el dato que guarda esa propiedad.
 * Su propósito principal es agrupar datos y funcionalidades relacionadas.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí   
const miObjeto = {
  clave: valor,
  metodo: function() { /* ... */ }
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
  marca: "Asus",
  modelo: "vivobook",
  procesador: "Intel Core i7",
  ram: "16GB",
  almacenamiento: "512GB SSD"
};

// Muestra el objeto `computador` en la consola.
console.log("Objeto computador:", computador);


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es un objeto que se crea usando una función constructora o "new Object()".
 * La diferencia con el literal es que el constructor permite crear múltiples instancias con la misma estructura.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
const computadorConstructor = new Object();
computadorConstructor.marca = "HP";
computadorConstructor.precio = 1200;
computadorConstructor.encendido = false;
computadorConstructor.componentes = ["RAM 16GB", "HDD 1TB"];
computadorConstructor.procesador = { marca: "AMD", modelo: "Ryzen 5",nucleos: 6
};
// Asigna las propiedades aquí


// Muestra el objeto `computadorPorConstructor` en la consola.
console.log("Objeto computadorPorConstructor:", computadorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, modelo) {
  this.nombre = nombre;
  this.precio = precio;
  this.modelo = modelo;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Laptop", 1890000, "Dell Latitude");
const producto2 = new Producto("Mouse", 25000, "Lenovo M100");


// Muestra las instancias en la consola
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
