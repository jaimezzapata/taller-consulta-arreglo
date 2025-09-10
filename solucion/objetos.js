// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Juan José Castrillón Giraldo

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es una colección de pares clave-valor definida directamente 
 * con llaves { }. Se utiliza para agrupar datos y comportamientos en una misma estructura.
 * Es la forma más sencilla y común de crear un objeto en JavaScript.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
let persona = {
  nombre: "Juan",
  edad: 20,
  estudiante: true
};
console.log("Objeto persona:", persona);

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
let computador = {
  marca: "Dell",
  modelo: "XPS 13",
  procesador: "Intel Core i7",
  memoriaRAM: "16GB",
  almacenamiento: "512GB SSD"
};

// Muestra el objeto `computador` en la consola.
console.log("Objeto computador (literal):", computador);



// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es aquel creado usando la función `new Object()` o 
 * mediante una función constructora. 
 * Diferencia principal: el literal se define directamente con llaves `{}`, 
 * mientras que el constructor usa una sintaxis más explícita para instanciar un objeto.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
let computadorPorConstructor = new Object();

// Asigna las propiedades aquí
computadorPorConstructor.marca = "Dell";
computadorPorConstructor.modelo = "XPS 13";
computadorPorConstructor.procesador = "Intel Core i7";
computadorPorConstructor.memoriaRAM = "16GB";
computadorPorConstructor.almacenamiento = "512GB SSD";

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log("Objeto computador (constructor):", computadorPorConstructor);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
let producto1 = new Producto("Celular", 2500000, "Tecnología");
let producto2 = new Producto("Silla ergonómica", 750000, "Muebles");

// Muestra las instancias en la consola
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
