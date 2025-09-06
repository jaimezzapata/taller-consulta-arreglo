// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 

* Un objeto literal es una estructura de datos que permite almacenar y organizar información diversa en cuanto a los tipos de datos y su respectiva funcionalidad que peretenezcan a un mismo concepto, de este modo logra agruparlos permitiendo mayor legibilidad y representación en el código.

*/

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí

const nombreObjeto = {
    clave1: valor1,
    clave2: valor2,
    clave3: valor3,
    // n-cantidad de propiedades
 };

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
const computador = {
    // Propiedad string
    marca: "HP",
    
    // Propiedad number
    precio: 700.00,
    
    // Propiedad boolean
    encendido: false,
    
    // Propiedad array
    perifericos: ["teclado", "mouse", "monitor", "audífonos"],
    
    // Propiedad objeto anidado
    procesador: {
        marca: "Intel",
        modelo: "Core i7-12700K",
        ram: 32,
        velocidad: 3.6,
        generacion: 12,
        nucleo: 10,
    }}

     encender: function(encender) {{
    this.encendido = true;
    console.log("El computador se está encendiendo");
  }
};
// Muestra el objeto `computador` en la consola.

console.log(computador.marca); // "Dell"
console.log(computador.procesador.modelo); // "Core i7-12700K"
console.log(computador.perifericos[0]); // "teclado"

// Usando el método
computador.encender(); // "El computador se está encendiendo..."
console.log(computador.encendido); // true

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es una forma de crear más de un objeto que compartan la misma plantilla o estructura, cada vez que se usa dicha estructura se puedde obtener un bojeto con las mismas propiedades cuyo factor diferencial sería principalmente y potencialemente los valores que tomen, la diferencia entre ambos radica principalemente en la eficiencia y reusabilidad que sea requerida, los objetos por constructor permiten mayor facilidad y rapidez en cuanto al código.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

const computador2 = new Object();



// Asigna las propiedades aquí
computador2.marca = 'HP';
computador2.ramGB = 32;
computador2.estaEncendido = false;
computador2.perifericosConectados = ['mouse', 'teclado'];
computador2.procesador = new Object();
computador2.procesador.modelo = 'HP 70';
computador2.procesador.nucleos = 10;
computador2.procesador.velocidadGHz = 3.6;


// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computador2);

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

// Crea dos instancias de `Producto`

const laptop = new Producto('Laptop HP', 700.00, true);
const tecladoSoundless= new Producto('Teclado Soundless', 150.00, false);


// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);
console.log(laptop);
console.log(tecladoSoundless);
