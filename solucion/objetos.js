// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Jhonatan Tabares Jaramillo]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es...
 */ console.log("Un tipo de datos utilizado para definir objetos de manera conciso. Es en su esencia una lista de propiedades y valores asociadas a un objeto dentro de llaves {}.") 

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí
const nombreObjeto = {
    propiedad1: "valor1",
    propiedad2: 2,
    nombreObjeto2: {
        propiedad3: "valor3"
    }

}

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí

const computador = {
    marca:"AMD",
    kitDeFabrica: false,
    modelo:"Ryzen 5",
    sistemaOperativo: "Windows",
    versionSO: 11
}


// Muestra el objeto `computador` en la consola.

console.log(computador);

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es...
 */ console.log("Un objeto creado mediante la funcion constructor. El constructor se utiliza cuando se desea crear varios objetos del mismo tipo. Se diferencia del literal en como se utiliza (para crear varios objetos de una base) y no se puede modificar las propiedades del constructor.") 

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

 let computadorPorConstructor = new Object();

// Asigna las propiedades aquí

computadorPorConstructor.marca = "AMD";
computadorPorConstructor.kitDeFabrica = false;
computadorPorConstructor.modelo = "Ryzen 5";
computadorPorConstructor.sistemaOperativo = "Windows";
computadorPorConstructor.versionSO = 11;


// Muestra el objeto `computadorPorConstructor` en la consola.

console.log(computadorPorConstructor);



// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

function Producto(precio, cantidad){
this.precio = precio;
this.cantidad = cantidad;
}


// Crea dos instancias de `Producto`
// Escribe el código aquí
const producto1 = new Producto(2500,3)
const producto2 = new Producto(45000,1)
// Muestra las instancias en la consola
 console.log("Instancia 1 de Producto:", producto1);
 console.log("Instancia 2 de Producto:", producto2);
