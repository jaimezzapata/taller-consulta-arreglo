// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: Leidys Diana Aparicio Bello

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.

/**
 * Escribe tu explicación aquí:
 * Un objeto literal es... Una forma simple de agrupar informacin relacionada en un solo lugar para que sea más fácil usarla.
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
let objeto = {
    clave1: valor1,
    clave2: valor2,
    clave3: valor3
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí
let computador = {
    marca: "lenovo",
    modelo: "13",
    color: "negra",
    almacenamiento: "512GB",
    ram: "16GB"
};

// Muestra el objeto `computador` en la consola.
console.log("Objeto computador:", computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:la diferencia que hay entre un objeto literal y un objeto por constructor es que el objeto literal escribes los datos directamente mientras que el objeto por constructor se crea a través de una constructora que define las propiedades que ellas tendrán.
 * Un objeto por constructor es una plantilla que sirve para crear objetos.
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí
let constructoromputador = new Object();

// Asigna las propiedades aquí
constructorcomputador.marca = "lenovo";
constructorcomputador.modelo = "13"; 
constructorcomputador.color = "negra";
constructorcomputador.almacenamiento = "512GB";  
constructorcomputador.ram = "16GB";


// Muestra el objeto `computadorPorConstructor` en la consola.
console.log("Objeto computador por constructor:", constructorcomputador);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
let Producto = function(nombre, marca) {
    this.nombre = nombre;
    this.marca= marca;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
let producto1 = new Producto("televisor", "LG");
let producto2 = new Producto("celular", "Samsung");

// Muestra las instancias en la consola
console.log("Instancia del Producto1:", producto1);
console.log("Instancia del Producto2:", producto2);
