// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Paola Andrea Arismendy Cardeño]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Son objetos particulares, porqué declaran sus propiedades de manera explicita y agrupan información de la propiedad de manera textual.
 * Es una forma de agrupar la información de un objeto o una persona como una ficha tecnica
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// 
let nombreObjeto = {
  clave1: valor1,
  clave2: valor2,
  clave3: valor3 // Las propiedades se separan por comas
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
let computador = {
  marca: "Lenovo", //string
  precio: 4550000, //numbre   
  enStock: true,   //boolean   
  caracteristicas: {  //array
    color: "Gris",
    pantalla: "16'",
    ram:"32gb",
    SSD: "1tb"
  },
}
// Muestra el objeto `computador` en la consola.
 mostrarDetalle: function() { 
    console.log(`El producto es ${this.marca} y cuesta ${this.precio} y sus carateristicas son ${this.caracteristicas}`);
  }

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto constructor en JavaScript es una función especial o método de clase que se utiliza para crear e inicializar nuevas instancias de objetos con propiedades y métodos similares. Se invoca utilizando la palabra clave new y su propósito principal es establecer el estado inicial de un objeto en el momento de su creación, permitiendo así la creación reutilizable de múltiples objetos con una estructura definida
 * La principal diferencia es la capacidad de un constructor para generar múltiples objetos idénticos pero con sus propios datos (instancias), mientras que un literal crea un solo objeto fijo. 

 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
const computador = new Object();
// Asigna las propiedades aquí
computador.marca = "Lenovo"; // string
computador.precio = 4550000; // number
computador.enStock = true; // boolean
computador.caracteristicas = ["ram-16gb", "SSD-1tb", "color-gris", "pantalla-16'"]; // array

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computador);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

// Crea dos instancias de `Producto`
const producto1 = new Producto("Laptop Lenovo", 4550000, true);
const producto2 = new Producto("Monitor Samsung", 300000, false);

// Muestra las instancias en la consola
console.log(producto1); // { nombre: 'Laptop Lenovo', precio: 4550000, disponible: true }
console.log(producto2); // { nombre: 'Monitor Samsung', precio: 300000, disponible: false }
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
