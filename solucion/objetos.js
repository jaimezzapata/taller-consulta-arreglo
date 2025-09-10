// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Carolina Martinez Mesa

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es una colecciónb de datos orednados con dos valores (llave y valor) y se escribe en singular; si veo {} (llaves) es un objeto literal.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// ={fruta:"mango"}

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
let computador ={marca:"lenovo", color:"negro", procesador:"i7", ram:"16gb", almacenamiento:"1tb"};

// Muestra el objeto `computador` en la consola.
console.log("Objeto Literal computador:", computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor: es un molde para crear varios objetos que tendran las mismas propiedades con distintos valores.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
let computadorConstructor = new Object();


// Asigna las propiedades aquí
computadorConstructor.marca = "hp";
computadorConstructor.color = "negro";
computadorConstructor.procesador = "i7";
computadorConstructor.ram = "16gb";
computadorConstructor.almacenamiento = "1tb";


// Muestra el objeto `computadorPorConstructor` en la consola.

console.log(computadorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.

// Escribe la función constructora aquí

function producto(marca, color) {
this.marca = marca;
this.color = color;}
// Crea dos instancias de `Producto`
// Escribe el código aquí
let producto1 = new producto("totto","blanco")
let producto2 = new producto("nike","negro")


// Muestra las instancias en la consola
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
