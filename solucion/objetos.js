// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Luisa Fernanda Usuga Quintero]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**Un objeto literal en JavaScript es una estructura que permite agrupar datos
// en pares clave-valor. Se escribe directamente con llaves { }.
// Su propósito principal es representar entidades con sus características
// y poder manipularlas de forma organizada.
 * Escribe tu explicación aquí:
 * Un objeto literal es...
 */ /** un objeto literal permite guardar informacion en pares dentro de las llaves */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const persona = {
  nombre: "luisa",
  edad: 24
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
  marca: "ASUS",                    
  ramGB: 25,                          
  encendido: true,                    
  puertos: ["USB", "HDMI", "Ethernet"], 
  procesador: {                      
    marca: "Intel",
    modelo: "i9",
    nucleos: 10,
    velocidadGHz: 4.0
  }
}; 


// Muestra el objeto `computador` en la consola.

console.log("Computador (literal):", computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**Un objeto creado por constructor se genera usando la palabra reservada `new`.
 La diferencia con el objeto literal es que no se escribe directamente con llaves,
sino que se instancia a partir del constructor Object() o de una función constructora.

 * Escribe tu explicación aquí: FUNCIONA COMO UNA PLANTILLA O MOLDE Y CUANDO PONEMOS NEW NOS CONSTRUYE UN NUEVO OBJETO
 * Un objeto por constructor es...
 /**un objeto por construtor es un objeto que se genera usando la funcion constructora.esa funcion define que propiedades y metodos tendran los objetos */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

// Asigna las propiedades aquí
const computador2 = new Object();
computador2.marca = "ASUS";
computador2.ramGB = 25;
computador2.encendido = true;
computador2.puertos = ["USB", "HDMI", "Ethernet"];
computador2.procesador = {
  marca: "Intel",
  modelo: "i9",
  nucleos: 10,
  velocidadGHz: 4.0
};


// Muestra el objeto `computadorPorConstructor` en la consola.

console.log("Computador (constructor Object):", computador2);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Mouse Gamer", 200000, true);
const producto2 = new Producto("Teclado Mecánico", 500000, false);

// Muestra las instancias en la consola
console.log("Producto 1:", producto1);
console.log("Producto 2:", producto2);
