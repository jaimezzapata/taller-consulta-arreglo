// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [PAOLA ANDREA MOLINA VALDERRAMA]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
//Creación rápida y sencilla de estructuras de datos simples y agrupadas. Es ideal para representar objetos únicos o con una estructura fija. No necesitas definir un "plano" (una clase) para algo que solo vas a usar una vez o que no requiere herencia ni un comportamiento complejo.
/**
 * Escribe tu explicación aquí:
 * Un objeto literal es una forma directa de crear un objeto sin la necesidad de utilizar un constructor o una clase. Es una lista simple de datos con sus respectivas propiedades o atributos, sin metodo, pues solo se usará una sola vez
 

// 2. Muestra la sintaxis básica para crear un objeto literal.
// Escribe el código aquí

  const usuario = {       //SE USAN LLAVEES PARA ENVOLVER EL OBJETO
  nombre: 'Juan',        //SE USAN PARES DE PROPIEDAD:VALOR       
  edad: 30,             //EL VALOR PUEDE SER CUALQUIER TIPO DE DATO String, number, boolean, array
  esActivo: true,      //EL VALOR ES BOOLEAN
  direcciones: ['Calle Falsa 123', 'Avenida Siempreviva 742']  //EL VALOR ES ARRAY
}

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí

const computador {
marca: Dell
modelo: Spectre x360
memoriaram: 16
almacenamiento: 800
esPortatil: true
}


// Muestra el objeto `computador` en la consola.

console.log (computador)

{
  marca: 'Dell',
  modelo: 'Spectre x360',
  memoriaram: 16,
  almacenamiento: 512,
  esPortatil: true
}


// Investigación #2: Objeto por Constructor

// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/** Es una instancia de una clase o una función cuyo  propósito principal es la creación de múltiples objetos con la misma estructura y funcionalidad. Es ideal cuando necesitas generar muchas instancias de un mismo "tipo" de objeto, como una lista de usuarios.
//  A diferencia de un objeto literal, que se crea de forma inmediata y estática, un objeto por constructor se crea dinámicamente utilizando la palabra clave new.
* Escribe tu explicación aquí:
 * Un objeto por constructor es el resultado de una clase, en la que se definieron los atributos y métodos con el fin de reutilizar codigo y que este pueda usarse de manera modular en varias ocasiones

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

const computador = new Object();

  // 2. se asignan las propiedades

function computador(marca, modelo, ram, almacenamiento, esPortatil) {
  this.marca = marca;
  this.modelo = modelo;
  this.ram = ram;
  this.almacenamiento = almacenamiento;
  this.esPortatil = esPortatil;
}

// 3. Se crea el objeto usando 'new'
const computadorPorConstructor = new computador('Dell', 'Spectre x360', 16, 512, true);
Otra instancia puede ser:
const computadorDeOficina = new Computador('Dell', 'Latitude', 8, 256, false);

// Muestra el objeto `computadorPorConstructor` en la consola.
console.log(computadorPorConstructor);
console.log(computadorDeOficina);


// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí
// funtion product (Codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí
const productoEconomico = new producto(T001,'Teclado Mecánico', 25000);
const productoDelux = new producto(M005, 'Monitor 4K', 2500000);


// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", productoEconomico);
// console.log("Instancia 2 de Producto:", productoDelux);
//Producto { codigo: T001, nombre: 'Teclado Mecánico', precio: 25000}
//Producto { codigo: M005, nombre: 'Monitor 4K', precio: 2500000}
