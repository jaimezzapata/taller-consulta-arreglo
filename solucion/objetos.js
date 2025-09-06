// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Mariana Ardila Liscano
// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es la representación de los atributos de un objeto, se compone de clave y valor, estos atributos, pueden ser caracterísicticas y métodos.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí


const perro={
    nombre:`Bandy`,
    edad:14,
    sexo:`Macho`,
    ladrar(){
    console.log("wuo, wua, wuao!")
}
}

console.log(perro)

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí

const computador={
    marca:`Asus Vibook`,
    precio:`3.000.000`,
    modelo:`Core 7`,
    memoriaRam:`40gb`,
    resImagen:"1080px"

}
console.log(computador)


// Muestra el objeto `computador` en la consola.


// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es...
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

// Asigna las propiedades aquí

const pc= new Object();
pc.marca=`Ausu Vibook`
pc.precio=`3.000.000`
pc.modelo=`Core 7`
pc.memoriaRam=`40Gb`
pc.resImagen="1080px"

// Muestra el objeto `computadorPorConstructor` en la consola.

console.log(pc)
// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombProducto, cantidad){
this.nombProducto=nombProducto
this.cantidad=cantidad
}


// Crea dos instancias de `Producto`
// Escribe el código aquí
let productoUno=new Producto(`Tablet`,4)
let productoDos=new Producto(`silla`, 20)

console.log("Instancia de producto 1:", productoUno)
console.log("Instancia de producto 2:", productoDos)

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
