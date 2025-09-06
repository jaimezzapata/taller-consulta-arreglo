// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Jean Carlo Medina Delgado]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es una manera texual y directa de definir atributos; Se declara el objeto se iguala con llaves, y delimitados por comas 
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
/**const objetoCualquiera = {
*                               atributo1: 'caracteristica o valor',
*                               atributo2: 'caracteristica o valor',
*                               atributo3: 'caracteristica o valor',
*                               atributo4: 'caracteristica o valor',
*                               atributo5: 'caracteristica o valor',                          
}
*/
// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
let computador1 = {
    marca:'asus',
    almacenamiento:'500gb',
    color: 'negro',
    ram: '16gb',
    pantalla:'14inch'
};



// Muestra el objeto `computador` en la consola.
console.log(computador1) // objeto completo
//esta seria la sintaxis para mostrar los atributos de dicho objeto
console.log(computador1.marca)
console.log(computador1.almacenamiento)
console.log(computador1.color)
console.log(computador1.ram)
console.log(computador1.pantalla)



// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es definir una funcion que sirve como plantilla y crear metodos y propiedades
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
let computador2 = new Object()

// Asigna las propiedades aquí
computador2.marca = 'asus'
computador2.almacenamiento = '500gb'
computador2.color = 'negro'
computador2.ram = '16gb'
computador2.pantalla = '14 inch'

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computador2)

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(marca, almacenamiento, color, ram, pantalla ) {
  this.marca = marca;
  this.almacenamiento = almacenamiento;
  this.color = color;
  this.ram = ram;
  this.pantalla = pantalla
}

// Crea dos instancias de `Producto`
let producto1 = new Producto('lenovo','256gb','plateado','8gb','24inch')
let producto2 = new Producto('lenovo','256gb','plateado','8gb','24inch')


// Muestra las instancias en la consola
console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);
