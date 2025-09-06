// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [johana peña henao]


// Parte 2: El Universo de los Arreglos
// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo en JavaScript es una estructura de datos que permite almacenar múltiples valores en una sola variable. Es como una lista ordenada donde cada elemento tiene una posición específica llamada índice, que comienza desde cero.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos (o arrays) son herramientas fundamentales en el desarrollo de software porque permiten organizar, manipular y acceder a múltiples datos de forma eficiente. Son como contenedores ordenados que facilitan el trabajo con grandes volúmenes de información.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí

const personas = [
  {
    nombre: "Carlos",
    edad: 35,
    correo: "carlos@example.com",
    activo: true
  },
  {
    nombre: "Lucía",
    edad: 28,
    correo: "lucia@example.com",
    activo: false
  },
  {
    nombre: "Miguel",
    edad: 42,
    correo: "miguel@example.com",
    activo: true
  }
];

// Muestra el arreglo `arregloMixto` en la consola.

personas.forEach((persona, index) => {
  console.log(`Persona ${index + 1}:`);
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Correo: ${persona.correo}`);
  console.log(`Activo: ${persona.activo ? "Sí" : "No"}`);
  console.log("----------------------");
});


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que modifica directamente el contenido de una estructura de datos en lugar de crear una copia nueva. En JavaScript, esto significa que el método cambia el valor original en memoria, afectando el estado del objeto o arreglo sobre el que se aplica.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.


// Método 1: [push()]
// Descripción: agrega  uno o más elemento al final de un arreglo y devuelve la nueva longitud del arreglo como resultado. 
// Ejemplo:

let frutas = ["manzana", "banana"];
frutas.push("naranja");
console.log(frutas); // ["manzana", "banana", "naranja"]



// Método 2: [pop()]
// Descripción:  elimina el último elemento del arreglo.
// Ejemplo:

let numeros = [1, 2, 3];
numeros.pop();
console.log(numeros); // [1, 2]


// Método 3: [shift()]
// Descripción: elimina el primer elemento de un arreglo.
// Ejemplo:

let colores = ["rojo", "verde", "azul"];
colores.shift();
console.log(colores); // ["verde", "azul"]


// Método 4: [unshift()]
// Descripción: agrega uno o más elementos al principio del arreglo.
// Ejemplo:

let animales = ["perro", "gato"];
animales.unshift("loro");
console.log(animales); // ["loro", "perro", "gato"]


// Método 5: [splice()]
// Descripción: Permite agregar, eliminar o reemplazar elementos en cualquier posición.
// Ejemplo:

let letras = ["a", "b", "d"];
letras.splice(2, 0, "c"); // Inserta "c" en la posición 2
console.log(letras); // ["a", "b", "c", "d"]



// Método 6: [reverse()]
// Descripción: Invierte el orden de los elementos del arreglo.
// Ejemplo:

let numeros = [1, 2, 3];
numeros.reverse();
console.log(numeros); // [3, 2, 1]

// Método 7: [sport()]
// Descripción: Ordena los elementos del arreglo (por defecto, como cadenas).
// Ejemplo:

let nombres = ["Carlos", "Ana", "Luis"];
nombres.sort();
console.log(nombres); // ["Ana", "Carlos", "Luis"]

// Método 8: [fill()]
// Descripción: Rellena el arreglo con un valor específico.
// Ejemplo:

let vacio = [0, 0, 0];
vacio.fill(1);
console.log(vacio); // [1, 1, 1]


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el valor original de una estructura de datos, como un arreglo u objeto, sino que devuelve una nueva copia con los cambios aplicados. Es decir, conserva el estado original y genera una versión actualizada sin alterar la fuente.
 * Los métodos inmutables son importantes ya que evitan que se genere un error en otras partes del código que este asociado con el método. Es más fácil saber cuando se hace algún cambio en un dato, ayuda a tener una mejor depuración, tener un código más limpio y predecible.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.


// Método 1: [map()]
// Descripción: Transforma cada elemento del arreglo y devuelve uno nuevo.
// Ejemplo:

const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);

console.log(numeros); // [1, 2, 3]
console.log(dobles);  // [2, 4, 6]



// Método 2: [filter()]
// Descripción: Filtra elementos según una condición y devuelve un nuevo arreglo.
// Ejemplo:

const edades = [12, 25, 17, 30];
const mayores = edades.filter(e => e >= 18);

console.log(edades);  // [12, 25, 17, 30]
console.log(mayores); // [25, 30]


// Método 3: [slice()]
// Descripción: Extrae una parte del arreglo sin modificar el original.
// Ejemplo:

const frutas = ['manzana', 'banana', 'kiwi', 'mango'];
const tropicales = frutas.slice(2);

console.log(frutas);      // ['manzana', 'banana', 'kiwi', 'mango']
console.log(tropicales);  // ['kiwi', 'mango']

// Método 4: [concat()]
// Descripción: Une arreglos o elementos en uno nuevo.
// Ejemplo:

const a = [1, 2];
const b = [3, 4];
const combinado = a.concat(b);

console.log(a);         // [1, 2]
console.log(combinado); // [1, 2, 3, 4]


// Método 5: [reduce()]
// Descripción: Reduce el arreglo a un solo valor, sin modificar el original.
// Ejemplo:

const precios = [10, 20, 30];
const total = precios.reduce((acc, val) => acc + val, 0);

console.log(precios); // [10, 20, 30]
console.log(total);   // 60

