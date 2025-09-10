// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/** 
 * Escribe tu explicación aquí:
 * un objeto literal es una forma directa y censilla de crear un objeto en javaScript.
 * se define con llaves {} y dentro se colocan partes claves : valor.
 * el objetivo prinicipal es representar datos o entidades con multiples propiedades.
 */ 
 
// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
    /* const objeto ={
        clave1: valor1,
        calve2: valor2,
        clave3: valor3,
        };*/

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador ={
    marca: "HP",
    modelo: "Pavilion 15",
    precio: 1500,
    disponible: True,
    accesorio: [ "mouse", "teclado", "cargador"],
};

// Muestra el objeto `computador` en la consola.
console.log(computador);



// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es un objeto creado utilizando un función constructora o el constructor new object (). 
 * sirve para crear multiples objetos con la misma estructura.
 * objeto literal: este se define de manera directa y simple con llaves{}, solo para crear objetos unicos.
 * objeto costructor: se define mediante una función constructora o mediante new object(), es util para crear multiples objetos con la misma estructura.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

// Asigna las propiedades aquí
 function computador (marca, modelo, precio, disponible, accesorio){
    computador.marca = "HP",
    computador.modelo = "pavilion 15",
    computador.precio = 1500,
    computador.disponible = true,
    computador.accesorio = [ "mouse", "teclado", "cargador"]
 };
 const computadorPorConstructor = new computador(
    "HP", "pavilion 15", 1500, true, [ "mouse", "teclado", "cargador"]
 );

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadorPorConstructor);



// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function producto(nombre, precio,disponible) {
    producto.nombre = nombre;
    producto.pprecio = precio;
    producto.disponible = disponible;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new producto ("lapto", 1200, true);
const producto2 = new producto ("Smartphone", 800, false);

// Muestra las instancias en la consola
 console.log("Instancia 1 de Producto:", producto1);
 console.log("Instancia 2 de Producto:", producto2);
