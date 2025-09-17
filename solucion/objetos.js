// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Yeisson Angel Ossa]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es cuando creamos valga la redundancia un objeto usando llaves {} y dentro de estas definimos sus propiedades y valores.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const nombreObjeto = {
    nbre1: "jose",
    nbre2: "angel",
    nbre3: "yeisson",
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
let computador = {
    marca: "Dell",
    modelo: "Inspiron 15",
    procesador: "Intel Core i7",
    ram: "16GB",
    almacenamiento: "512GB SSD"
};


// Muestra el objeto `computador` en la consola.


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
* Un objeto por constructor es aquel que nos permite almacenar varios objetos con caracteristicas similares, dando la posibilidad
de no repetir codigo.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
new Object();
let computadorPorConstructor = new Object();

// Asigna las propiedades aquí
computadorPorConstructor.marca = "Dell"; 
computadorPorConstructor.modelo = "Inspiron 15";
computadorPorConstructor.procesador = "Intel Core i7";
computadorPorConstructor.ram = "16GB";
computadorPorConstructor.almacenamiento = "512GB SSD";

// Muestra el objeto `computadorPorConstructor` en la consola.


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function producto(nombre, precio)

// Crea dos instancias de `Producto`
// Escribe el código aquí
this.nombre = nombre;
this.precio = precio;

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 1 de Producto:", producto1);
let producto1 = new Producto("Laptop", 1200);
// console.log("Instancia 2 de Producto:", producto2);
console.log("Instancia 2 de Producto:", producto2);
let producto2 = new Producto("Smartphone", 800);
