// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es un conjunto de datos que tiene una llave y un valor para guardar información.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
let nombreObjeto = {
    llave: valor
}
// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
    marca: "Lenovo",
    precio: 1500000,
    disponible: true,
    color: ["negro", "gris"],
    especificaciones: {
        almacenamiento: "512GB SSD",
        procesador: "Intel Core i5"
    }
}

// Muestra el objeto `computador` en la consola.
console.log(computador);


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es una forma de crear objetos a partir de una plantilla ya definida, usando una función o
   clase con new. En cambio, un objeto literal se crea directamente con {} y no permite reutilizacion.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
const computadorPorConstructor= new Object()
   
// Asigna las propiedades aquí
computadorPorConstructor.marca = "Lenovo"
computadorPorConstructor.precio = 1500000
computadorPorConstructor.disponible = true
computadorPorConstructor.color = ["negro", "gris"]
computadorPorConstructor.especificaciones = {
        almacenamiento: "512GB SSD",
        procesador: "Intel Core i5"
    }

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadorPorConstructor);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, disponible){
    this.nombre = nombre,
    this.precio= precio,
    this.disponible = disponible
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto("Teclado", 120000, true)
const producto2 = new Producto("mouser", 80000, false)

// Muestra las instancias en la consola
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
