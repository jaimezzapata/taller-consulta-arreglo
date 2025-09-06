// Taller de Investigación sobre Objetos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 1: El Mundo de los Objetos

// Investigación #1: Objeto Literal
// 1. Define qué es un objeto literal en JavaScript.
/**
 * Escribe tu explicación aquí: 
 * Un objeto literal es un molde o plantilla donde se puede guardar información de algo por ejemplo una persona, carro,
 *  perro, zapato, libro, ETC y dentro de este molde o plantilla la información que se guarda serian las propiedades o
 * caracteristicas de dicho molde (objeto)
 */

// 2. Muestra la sintaxis básica para crear un objeto literal.
/* let nombreDelObjeto Le das un nombre a la "caja" donde guardas la información. = {} Las llaves 
delimitan el objeto. Todo lo que está adentro son sus datos y acciones y el ejemplo final quedaria así.*/

let nombreDelObjeto = {
  propiedad1: valor1,
  propiedad2: valor2,
  propiedad3: valor3,
};

// 3. Crea un objeto literal llamado `computador` con 5 propiedades.
// Escribe el código aquí

let computador = {
  marca: "Lenovo",
  modelo: "IdeaPad 5",
  memoriaRAM: "8 GB",
  tieneSSD: true,
  sistemaOperativo: "Windows 11"
};

// Muestra el objeto `computador` en la consola.

console.log(computador.marca);        
console.log(computador.modelo);         
console.log(computador.memoriaRAM);      
console.log(computador.tieneSSD);        
console.log(computador.sistemaOperativo); 

// Investigación #2: Objeto por Constructor
// 1. Define qué es un objeto por constructor y su diferencia con el literal.
/**
 * Escribe tu explicación aquí:
 * Un objeto por constructor es una instancia de una función constructora, creada mediante el operador new,
 * que inicializa propiedades y métodos en un nuevo objeto utilizando this como referencia al contexto de la instancia,
 * permitiendo la creación múltiple y consistente de objetos con una estructura común
 */

// 2. Crea un objeto utilizando el constructor `new Object()` y asígnale las mismas propiedades del objeto `computador`.
// Escribe el código aquí

let computadorPorConstructor = new Object();

// Asigna las propiedades aquí

computadorPorConstructor.marca = "Lenovo";
computadorPorConstructor.modelo = "IdeaPad 5";
computadorPorConstructor.memoriaRAM = "8 GB";
computadorPorConstructor.tieneSSD = true;
computadorPorConstructor.sistemaOperativo = "Windows 11";

// Muestra el objeto `computadorPorConstructor` en la consola.

console.log(computadorPorConstructor.marca); 
console.log(computadorPorConstructor.modelo); 
console.log(computadorPorConstructor.memoriaRAM); 
console.log(computadorPorConstructor.tieneSSD); 
console.log(computadorPorConstructor.sistemaOperativo); 

// 3. Crea una función constructora llamada `Producto` y crea dos instancias.
// Escribe la función constructora aquí

function Producto(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
}

// Crea dos instancias de `Producto`
// Escribe el código aquí

let producto1 = new Producto("Laptop", 1500, "Electrónicos");
let producto2 = new Producto("Mouse", 25, "Accesorios");

// Muestra las instancias en la consola
// console.log("Instancia 1 de Producto:", producto1);
// console.log("Instancia 2 de Producto:", producto2);

console.log("Instancia 1 de Producto:", producto1);
console.log("Instancia 2 de Producto:", producto2);