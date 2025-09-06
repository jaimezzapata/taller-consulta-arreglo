// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [juan felipe uñates zuleta]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es es una forma rápida y sencilla de crear un objeto usando llaves {} para definir sus propiedades (pares clave–valor).
Se llama “literal” porque lo escribes directamente en el código, sin necesidad de usar new Object() ni clases.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.

let persona = { nombre: "felipe", edad: 34, profesion: "desarrollador" };
console.log(persona.nombre);
console.log(persona["edad"]);

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.

let computador = { marca: "Dell", modelo: "XPS 13", procesador: "Intel i7", ram: "16GB", almacenamiento: "512GB SSD" };


// Muestra el objeto `computador` en la consola.

console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.

/**Un objeto por constructor se crea usando una función constructora o una clase.
Es como un molde que permite fabricar muchos objetos con la misma estructura, solo cambiando los valores.
La diferencia principal con el objeto literal es que el literal es único y definido directamente, mientras que el constructor permite crear múltiples instancias del mismo tipo de objeto.

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
*/

let computadorPorConstructor = new Object();

computadorPorConstructor.marca = "Dell";
computadorPorConstructor.modelo = "XPS 13";
computadorPorConstructor.procesador = "Intel i7";
computadorPorConstructor.ram = "16GB";
computadorPorConstructor.almacenamiento = "512GB SSD";


// Muestra el objeto `computadorPorConstructor` en la consola.

console.log(computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí*/

function Producto(marca, modelo, procesador, ram, almacenamiento) {
    this.marca = marca;
    this.modelo = modelo;
    this.procesador = procesador;
    this.ram = ram;
    this.almacenamiento = almacenamiento;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí*/

let producto1 = new Producto("Dell", "XPS 13", "Intel i7", "16GB", "512GB SSD");
let producto2 = new Producto("Apple", "MacBook Pro", "M1", "16GB", "1TB SSD");

// Muestra las instancias en la consola*/

console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);