// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Nelson Lozano Rayo]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/*Un objeto literal en JavaScript es una forma simple y rápida de crear un objeto. *
 * Escribe tu explicación aquí:
 * Un objeto literal es una creación, sin necesidad de una clases o función para crearlo, 
 * simplemente se escribe
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
let nombreDelObjeto = {
  propiedad1: valor1,
  propiedad2: valor2,
  propiedad3: "Este es un string",
  propiedad4: 12345,
  propiedad5: true,
  propiedad6: [1, 2, 3],
  propiedad7: {
    propiedadAnidada: "valor"
  }
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
  marca: "Dell",
  modelo: "XPS 15",
  ramGB: 16,
  esLaptop: true,
  componentes: ["CPU Intel i7", "GPU NVIDIA RTX 3050", "SSD 1TB"]
};


// Muestra el objeto `computador` en la consola.
const computador = {
  marca: "Dell",
  modelo: "XPS 15",
  ramGB: 16,
  esLaptop: true,
  componentes: ["CPU Intel i7", "GPU NVIDIA RTX 3050", "SSD 1TB"]
};

console.log(computador);


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/*Es una plantilla que se usa para crear nuevos objetos*
 * Escribe tu explicación aquí:
 * Un objeto por constructor es aquella plantilla que se usa para evitar crear objetos literales nuevos,
 * sirve como un plano para crear nuevas estancias
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
// Crear un objeto vacío usando el constructor
const computadorPorConstructor = new Object();
// Asigna las propiedades aquí
computadorPorConstructor.marca = "Dell";
computadorPorConstructor.modelo = "XPS 15";
computadorPorConstructor.ramGB = 16;
computadorPorConstructor.esLaptop = true;
computadorPorConstructor.componentes = ["CPU Intel i7", "GPU NVIDIA RTX 3050", "SSD 1TB"];


// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadorPorConstructor);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí


// Crea dos instancias de `Producto`
// Escribe el código aquí
function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
}

// Muestra las instancias en la consola
const producto1 = new Producto("Teclado", 50, 10);
const producto2 = new Producto("Mouse", 25, 30);

console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
