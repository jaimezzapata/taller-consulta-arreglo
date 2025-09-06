// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [PAOLA ANDREA MOLINA VALDERRAMA]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**es una estructura de datos que te permite almacenar una colección ordenada de valores. 
 * Escribe tu explicación aquí:
 * Un arreglo es una serie de datos que poseen una posición, la cual comienza en cero, poseen un orden que debe mantenerse. 
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.

//l uso más básico es almacenar una lista de ítems. Por ejemplo, una aplicación de comercio electrónico utiliza arreglos para mantener la lista de productos en el carrito de compras, o una red social para almacenar los nombres de los amigos de un usuario.
 //Escribe tu explicación aquí:
//Los arreglos se utilizan para...
 //- Para Almacenar listas de elementos
// - Para representar datos en formato de tabla, donde cada elemento del arreglo es una fila
// - Para estructuras de datos más complejas, como las colas 
// - Para realizar acciones como filtrar, mapear o buscar elementos que cumplan con una condición específica.
// - Para  mejorar el rendimiento donde el acceso a datos es frecuente y crítico.


// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí

const productos = [
  'productoEconomico',
  'productoDelux',
  'productoPremium'
];

const tipoProducto = [
  'gaming',
  'RGB',
  'inalámbrico'
];

const datosProducto = [productos, tipoProducto];

console.log(datosProducto);

 // Muestra el arreglo `arregloMixto` en la consola.
/* [
  [ 'productoEconomico', 'productoDelux', 'productoPremium' ],
  [ 'gaming', 'RGB', 'inalámbrico' ]
]*/


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/** Es un método en programación que tiene la capacidad de cambiar el estado interno de un objeto sobre el cual es llamado. 
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que no devuelve un nuevo objeto con el cambio, sino que modifica el objeto original directamente.
 */


// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
//console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [PUSH]
// Descripción: Este método añade uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo. 
// Ejemplo:
let frutas = ['manzana', 'banana'];
let nuevaLongitud = frutas.push('uva', 'naranja');

console.log(frutas); // ['manzana', 'banana', 'uva', 'naranja']
console.log(nuevaLongitud); // 4

// Método 2: [POP]
// Descripción: Este método elimina el último elemento de un arreglo y lo devuelve. 
// Ejemplo:
let vegetales = ['zanahoria', 'apio', 'brócoli'];
let ultimoElemento = vegetales.pop();

console.log(vegetales); // ['zanahoria', 'apio']
console.log(ultimoElemento); // 'brócoli'

// Método 3: [SHIFT]
// Descripción: Este método elimina el primer elemento de un arreglo y lo devuelve, desplazando los demás elementos a un índice inferior.
// Ejemplo:
let nombres = ['Ana', 'Juan', 'Luis'];
let primerElemento = nombres.shift();

console.log(nombres); // ['Juan', 'Luis']
console.log(primerElemento); // 'Ana'

// Método 4: [UNSHIFT]
// Descripción: Este método añade uno o más elementos al inicio de un arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo:
let numeros = [3, 4, 5];
let nuevaLongitud = numeros.unshift(1, 2);

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(nuevaLongitud); 

// Método 5: [SPLICE]
// Descripción: Este método es versátil y permite añadir, eliminar o reemplazar elementos en cualquier posición del arreglo.
// array.splice(indiceInicial, cantidadParaEliminar, ...elementosParaAnadir)
// Ejemplo:
let animales = ['perro', 'gato', 'loro', 'pez'];
// Eliminar 'gato' y 'loro' (2 elementos a partir del índice 1)
animales.splice(1, 2);
console.log(animales); // ['perro', 'pez']

//Añadir 'tortuga' e 'iguana' en el índice 1 sin eliminar nada
animales.splice(1, 0, 'tortuga', 'iguana');
console.log(animales); // ['perro', 'tortuga', 'iguana', 'pez']

// Método 6: [SORT]
// Descripción: Este método ordena los elementos de un arreglo en su lugar y devuelve el arreglo ordenado. Por defecto, ordena los elementos como cadenas de texto
// Ejemplo:
let letras = ['c', 'a', 'b'];
    letras.sort();
    console.log(letras); // ['a', 'b', 'c']

let numerosDesordenados = [10, 2, 25];
numerosDesordenados.sort();
console.log(numerosDesordenados); // [10, 2, 25] (ordenado como cadenas)

// Para ordenar números correctamente, se usa una función de comparación
numerosDesordenados.sort((a, b) => a - b);
console.log(numerosDesordenados); // [2, 10, 25]

// Método 7: [REVERSE]
// Descripción: Este método invierte el orden de los elementos de un arreglo en su lugar.
// Ejemplo:
let lista = [1, 2, 3, 4];
lista.reverse();
console.log(lista); // [4, 3, 2, 1]

// Método 8: [FILL]
// Descripción: Este método cambia todos los elementos de un arreglo, o de una porción de él, por un valor estático.
// Ejemplo:
let arrayVacio = new Array(3);
arrayVacio.fill('a');
console.log(arrayVacio); // ['a', 'a', 'a']



// Investigación #5: Métodos Inmutables (Immutable Methods)

// 1. Define qué es un método inmutable y por qué son importantes.

/**Un método inmutable es aquel que no modifica el objeto original sobre el que se aplica. En su lugar, crea y devuelve una nueva instancia del objeto con los cambios, dejando el original completamente intacto. Es importante porque, al no alterar el estado de un objeto, se evitan efectos secundarios inesperados. Además, es más fácil rastrear el origen de un error cuando los objetos no cambian. Si un objeto inmutable tiene un valor incorrecto, sabes que el problema está en la creación de ese objeto, no en una modificación posterior.
 * 
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que permite sacar una copia de un objeto original para hacer modificaciones, sin que este objeto original se vea afectado. Estos son utilis cuando solo necesitas una versión del objeto y quieres ser eficiente con la memoria.
 */



// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
//console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [SLICE]
// Descripción: Este método crea una copia superficial del arreglo, o de una porción de él, y la devuelve como un nuevo arreglo. El arreglo original permanece sin cambios.
// Ejemplo:
const originales = ['manzana', 'banana', 'cereza', 'dátil'];
const copia = originales.slice(1, 3);

console.log(originales); // ['manzana', 'banana', 'cereza', 'dátil']
console.log(copia);      // ['banana', 'cereza']


// Método 2: [CONCAT]
// Descripción: Se utiliza para combinar dos o más arreglos. Devuelve un nuevo arreglo que contiene los elementos de los arreglos con los que se está trabajando, sin modificar ninguno de ellos. 
// Ejemplo:
const frutas = ['manzana', 'banana'];
const masFrutas = ['naranja', 'uva'];
const todasLasFrutas = frutas.concat(masFrutas);

console.log(frutas);          // ['manzana', 'banana']
console.log(masFrutas);       // ['naranja', 'uva']
console.log(todasLasFrutas);  // ['manzana', 'banana', 'naranja', 'uva']


// Método 3: [MAP]
// Descripción: Crea un nuevo arreglo al aplicar una función a cada elemento del arreglo original. La función se ejecuta una vez por cada elemento y el valor de retorno se añade al nuevo arreglo 
// Ejemplo:
const numeros = [1, 2, 3, 4];
const duplicados = numeros.map(num => num * 2);

console.log(numeros);     // [1, 2, 3, 4]
console.log(duplicados);  // [2, 4, 6, 8]

// Método 4: [FILTER]
// Descripción: Este método crea un nuevo arreglo que contiene solo los elementos del arreglo original que pasan una prueba (una función de prueba que devuelve true). Los elementos que no pasan la prueba no se incluyen.
// Ejemplo:
const edades = [15, 20, 25, 17, 30];
const mayoresDeEdad = edades.filter(edad => edad >= 18);

console.log(edades);           // [15, 20, 25, 17, 30]
console.log(mayoresDeEdad);    // [20, 25, 30]

// Método 5: [JOIN]
// Descripción: Combina todos los elementos de un arreglo en una nueva cadena de texto. No modifica el arreglo original. Se puede especificar un separador para colocar entre cada elemento de la cadena. 
// Ejemplo:
const palabras = ['Hola', 'a todos', 'aquí'];
const frase = palabras.join(' ');

console.log(palabras); // ['Hola', 'a todos', 'aquí']
console.log(frase);    // "Hola a todos aquí"

// Método 6: [FIND]
// Descripción:Este método recorre el arreglo y devuelve el primer elemento que cumpla con la condición que le indiques. Si no encuentra ningún elemento que cumpla con la condición, devuelve undefined
// Ejemplo:

