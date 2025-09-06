// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Mayerlin Cubides]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 Una manera de crear y definir un objeto directamente en el código, usando la sintáxis de la llaves para agrupar un conjunto de clave ó valor que representa las propiedades. Con ello se almacena de forma rápida y práctica datos especificos de manera organizada, como la información de un producto ó los datos de una persona, sin necesidad de funciones ó clases complejas.
 
 * Escribe tu explicación aquí:Es el conjunto de propiedades de un códgo hacia un objeto de datos de productos ó de una persona, que lleva la priumera sintaxis en llaves, para deternimar las funciones a seguir, según corresponda a lo solicitado. Facilitando los procesos de busqueda de la información especifica.

 * Un objeto literal es...
 Son ideales para crear objetos simples sobre la marcha. Cuando se necesita de forma rápida y ligera almacenar y manipular datos sin la complejidad de una clase.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí//

const persona = {
    nombre: Mayerlin,
    edad: 39,
    saludar: function name(nombre) {
       console.log ("Hola soy" + this.nombre ) 
    }

};




// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí//

const miComputadora = {
  marca: "Dell", // string (cadena de texto)
  modelo: "XPS 13", // string (cadena de texto)
  memoriaGB: 16, // number (número)
  wifiActivado: true, // boolean (booleano)
  tarjetasGraficas: ["NVIDIA RTX 4070", "Intel UHD Graphics"], // array (arreglo de strings)
  procesador: { // Objeto anidado
    nombre: "Dell",
    velocidadGHz: 3.5,
    nucleos: 4
  }
};

// Muestra el objeto `computador` en la consola.//

console.log(miComputadora);


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal
/**
 * Un objeto literal es una forma directa y concisa de crear un objeto con sus propiedades y métodos definidos en el código fuente, mientras que un objeto por constructor (o de una función constructora) se crea usando la palabra clave new con una función que actúa como una plantilla o molde para crear múltiples instancias de objetos con una estructura y estado inicial definidos, siendo la principal diferencia la capacidad de crear múltiples instancias (con constructores) versus una única definición (con literales). 
 
 * Escribe tu explicación aquí:
La diferencias entre el objeto constructor y el objeto literal. el constructor crea una plantilla para generar multiples intacicas ó copias de ese objeto por medio de la palabra clave *new*, cada una independiente de la otra. El obejeto literal crea una *única* instancia con propiedades y métodos directamente definidos. 

 * Un objeto por constructor es...Una clase que es inicializado automáticamente por una subrutian llamada constructor. Que se encarga de asignar valores iniciales a las propiedades o campos de los objetos  y de realizar cualquier otra configuración ncesaria para que el objeto esté listo para usarse inmediatamente después de su creación.


 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí//

const miComputadora = new Object();


// Asigna las propiedades aquí//

miComputadora.marca = "Dell"; // string
miComputadora.modelo = "XPS 13"; // string
miComputadora.memoriaGB = 16; // number
miComputadora.wifiActivado = true; // booleano
miComputadora.tarjetasGraficas = ["NVIDIA RTX 4070", "Intel UHD Graphics"]; // array
miComputadora.procesador = new Object(); // Objeto anidado
miComputadora.procesador.nombre = "Dell";
miComputadora.procesador.velocidadGHz = 3.5;
miComputadora.procesador.nucleos = 4;


// Muestra el objeto `computadorPorConstructor` en la consola.

console.log(miComputadora);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.//

function Producto(nombre, categoria, precio) {
  this.nombre = nombre; // Propiedad 'nombre'
  this.categoria = categoria; // Propiedad 'categoria'
  this.precio = precio; // Propiedad 'precio'
}

const producto1 = new Producto("Laptop", "Electrónica", 1200);
const producto2 = new Producto("Smartphone", "Electrónica", 800);

// Escribe la función constructora aquí

function Producto(nombre, categoria, precio) {
  this.nombre = nombre; // Propiedad 'nombre'
  this.categoria = categoria; // Propiedad 'categoria'
  this.precio = precio; // Propiedad 'precio'
}
// Crea dos instancias de `Producto`

console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);


// Escribe el código aquí

function Producto(nombre, categoria, precio) {
  this.nombre = nombre; // Propiedad 'nombre'
  this.categoria = categoria; // Propiedad 'categoria'
  this.precio = precio; // Propiedad 'precio'
}

const producto1 = new Producto("Laptop", "Electrónica", 1200);
const producto2 = new Producto("Smartphone", "Electrónica", 800);


console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
