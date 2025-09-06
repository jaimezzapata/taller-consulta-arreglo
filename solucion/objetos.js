// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Wilder Esteban Garcia Ramirez]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
    Un objeto literal a diferencia de uno en java, acá lo creamos e instanciamos de una vez, poniendole sus atributos ahí mismo. 
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const carro  = {
  marca: "Toyota",
  modelo: 2024,
  color: "Gris",
};


// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador ={
    marca: "Asus",
    chasis: "Chasis Caja Iceberg Turbo Z8 + 5 Ventiladores 120mm Azul",
    pantalla: "Acer Nitro QG241Y/ Full HD (1920 x 1080)/ 23.8″ Pulgadas/ refresh 165Hz/ 1ms/ AMD FreeSync Premium",
    tarjetaGrafica: "RTX 5090",
    procesdor: "14th Gen Intel CPU I9 ",
}

// Muestra el objeto `computador` en la consola.

console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí: La diferencia es que el objeto por constructor nos crea una plantilla para crear VARIOS objetos, mientras que con el literal creamos únicamente UNO.
 * Un objeto por constructor es... es igual que una  clase en java, el objeto constructor es una plantilla para crear otros objetos.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
const computadores= new Object();
// Asigna las propiedades aquí
computadores.marca = "Asus";
computadores.chasis = "Chasis Caja Iceberg Turbo Z8 + 5 Ventiladores 120mm Verde";
computadores.pantalla = "Acer Nitro QG241Y";
computadores.tarjetaGrafica = "NVIDIA GTX 1650";
computadores.procesador = "Intel Core i7";

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadores);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

function Producto(nombre,precio,disponible){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1=new Producto("Computador", 50000000,true);
const producto2=new Producto("Portatil", 55000000, true);

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
console.log(producto1);
console.log(producto2);