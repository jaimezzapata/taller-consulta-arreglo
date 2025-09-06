// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Paola Andrea Arismendy Cardeño

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Son colecciones ordenadas de elementos, donde cada elemento tiene un indice numérico que incia en cero. 
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * los arreglos se usan para almacenar colecciones de datos (como una lista de nombres o números) en una sola variable, lo que permite gestionar múltiples valores de manera más eficiente que usando variables separadas.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
const datosMixtos = [
  "Texto",             // string
  42,                  // number
  true,                // boolean
  null,                // null
  undefined,           // undefined
  [1, 2, 3],           // array anidado
  { nombre: "Ana" },   // objeto
  function() {         // función
    console.log("Hola desde la función en el arreglo");
  }
];

// Muestra el arreglo `arregloMixto` en la consola.
console.log(datosMixtos[0]); 
console.log(datosMixtos[5]); 
datosMixtos[7]();           


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * un método mutable es aquel que modifica el objeto o array original sobre el que se llama, en lugar de crear una copia
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: push()
// Descripción: Añade uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo:

let frutas = ["manzana", "banana"];
console.log("Antes de push:", frutas);

frutas.push("naranja", "uva");
console.log("Después de push:", frutas);

// Método 2: pop()
// Descripción: Elimina el último elemento de un arreglo y lo devuelve. Este método cambia la longitud del arreglo.
// Ejemplo:
let colores = ["rojo", "verde", "azul"];
console.log("Antes de pop:", colores);

let eliminado = colores.pop();
console.log("Después de pop:", colores);
console.log("Elemento eliminado:", eliminado);

// Método 3: shift()
// Descripción: Elimina el primer elemento de un arreglo y lo devuelve. Este método cambia la longitud del arreglo.
// Ejemplo:
let numeros = [10, 20, 30];
console.log("Antes de shift:", numeros);

let eliminado = numeros.shift();
console.log("Después de shift:", numeros);
console.log("Elemento eliminado:", eliminado);

// Método 4: unshift()
// Descripción: Añade uno o más elementos al principio de un arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo:
let animales = ["perro", "gato"];
console.log("Antes de unshift:", animales);

let nuevaLongitud = animales.unshift("conejo", "hamster");
console.log("Después de unshift:", animales);
console.log("Nueva longitud:", nuevaLongitud);

// Método 5: splice()
// Descripción: Cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos en el lugar.
// Ejemplo:
let dias = ["lunes", "martes", "miércoles", "jueves"];
console.log("Antes de splice:", dias);

dias.splice(2, 1, "sábado", "domingo");
console.log("Después de splice:", dias);

// Método 6: reverse()
// Descripción: Invierte el orden de los elementos del arreglo original. El arreglo se modifica en sitio.
// Ejemplo:
let numeros = [1, 2, 3, 4, 5];
console.log("Antes de reverse:", numeros);

numeros.reverse();
console.log("Después de reverse:", numeros);


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el objeto o arreglo original sobre el que se aplica, sino que en su lugar devuelve una nueva copia modificada dejando intactos los datos originales.
 * Son importantes porque:
 * 1.Evitan efectos secundarios al no alterar el estado original.
 * 2.Facilitan la depuración y el mantenimiento ya que los datos no cambian.
 * 3.Evitan problemas de sincronización porque nadie puede modificar el estado compartido. 
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: map()
// Descripción: Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original. 
// Ejemplo:
const numeros = [1, 2, 3];
const doblados = numeros.map(n => n * 2);

console.log("Original:", numeros);   
console.log("Nuevo:", doblados);     

// Método 2: filter()
// Descripción: Crea un nuevo arreglo con todos los elementos que pasan una condición dada.
// Ejemplo:
const edades = [18, 21, 16, 25];
const adultos = edades.filter(edad => edad >= 18);

console.log("Original:", edades);   
console.log("Nuevo:", adultos); 


// Método 3: slice()
// Descripción: Devuelve una copia superficial de una porción del arreglo dentro de un nuevo arreglo, sin modificar el original.
// Ejemplo:
const letras = ["a", "b", "c", "d"];
const subarreglo = letras.slice(1, 3);

console.log("Original:", letras);     
console.log("Nuevo:", subarreglo); 

// Método 4: concat()
// Descripción: Devuelve un nuevo arreglo que es la combinación del arreglo original con otros arreglos o valores.
// Ejemplo:
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = arr1.concat(arr2);

console.log("Original:", arr1);       
console.log("Nuevo:", combinado);     

// Método 5: join()
// Descripción: Devuelve una cadena concatenando todos los elementos del arreglo, separados por un separador. No modifica el arreglo original.
// Ejemplo:
const palabras = ["Hola", "mundo"];
const frase = palabras.join(" ");

console.log("Original:", palabras);   
console.log("Nuevo (string):", frase);