// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Tu nombre completo aquí]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 

* Escribe tu explicación aquí:
 * Un arreglo es un esquema de datos que permite almacenar una colección ordenada de elementos bajo un solo nombre en el que cads elem,ento tiene una posiciónm determinada
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para gestionar y organizar colecciones de datos relacionados entre si, son flexibles ya que pueden contener cualquier tipo de dato
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí

const arregloMixto = [
  // Número
  123, 
  
  // String
  'Hola, Mundo', 
  
  // Boolean
  true,
  
  // Objeto
  { nombre: 'Juan', edad: 30 },
  
  
  ['rojo', 'verde', 'azul'],
  
  // Función
  function() {
    console.log('Esto es una función dentro de un arreglo.');
  },
];

// Muestra el arreglo `arregloMixto` en la consola.

console.log(arregloMixto[0]); // Salida: 123
console.log(arregloMixto[3].nombre); // Salida: 'Juan'
console.log(arregloMixto[4][1]); // Salida: 'verde'

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que al momento de aplicarle un arreglo cambia o muta el arreglo original en lugar de crear una copia nueva, modifica el arreglo como in the spot :)
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push()]
// Descripción: Agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo:
const frutas = ['manzana', 'banana'];
console.log('Arreglo antes de push():', frutas); 

frutas.push('naranja');
console.log('Arreglo después de push():', frutas);

// Método 2: [pop()]
// Descripción:  Elimina el último elemento de un arreglo y devuelve ese elemento.


// Ejemplo:

const series = ['Breaking Bad', 'The Office', 'Stranger Things'];
console.log('Arreglo antes de pop():', series); 

const ultimaSerie = series.pop();
console.log('Elemento eliminado:', ultimaSerie); 
console.log('Arreglo después de pop():', series); // Salida: ['Breaking Bad', 'The Office']


// Método 3: [shift()]
// Descripción:  Elimina el primer elemento de un arreglo y devuelve ese elemento.
// Ejemplo: 
const numbers = [1, 2, 3, 4];
console.log('Arreglo antes de shift():', numeros); // Salida: [1, 2, 3, 4]

const primerNumero = numeros.shift();
console.log('Elemento eliminado:', primerNumero); // Salida: 1
console.log('Arreglo después de shift():', numeros); // Salida: [2, 3, 4]


// Método 4: [unshift()]
// Descripción:  Agrega uno o más elementos al inicio de un arreglo y devuelve la nueva longitud del arreglo.
// Ejemplo:
const planetas = ['Marte', 'Júpiter'];
console.log('Arreglo antes de unshift():', planetas); // Salida: ['Marte', 'Júpiter']

planetas.unshift('Mercurio', 'Venus');
console.log('Arreglo después de unshift():', planetas); // Salida: ['Mercurio', 'Venus', 'Marte', 'Júpiter']


// Método 5: [splice ()]
// Descripción: Agrega, elimina o reemplaza elementos en cualquier posición del arreglo. Recibe tres parámetros: la posición de inicio, el número de elementos a eliminar y los elementos a agregar.
// Ejemplo:

const animales = ['perro', 'gato', 'loro', 'pez'];
console.log('Arreglo antes de splice():', animales); // Salida: ['perro', 'gato', 'loro', 'pez']

// Eliminar 'loro' y 'pez' y agregar 'conejo' y 'tortuga'
animales.splice(2, 2, 'conejo', 'tortuga');
console.log('Arreglo después de splice():', animales); // Salida: ['perro', 'gato', 'conejo', 'tortuga']


// Método 6: [sort()]
// Descripción:  Ordena los elementos de un arreglo en su lugar, ya sea de forma ascendente (por defecto) o descendente, según el criterio que le pases.
// Ejemplo:
const estudiantes = ['Juan', 'Ana', 'Pedro', 'Sofía'];
console.log('Lista de estudiantes antes:', estudiantes);

// Ordenamos la lista alfabéticamente
estudiantes.sort();

console.log('Lista de estudiantes después (ordenada):', estudiantes);
// Salida: ['Ana', 'Juan', 'Pedro', 'Sofía']

// Otro ejemplo con números
const puntajes = [100, 2, 50, 8];
console.log('Puntajes antes:', puntajes);

// Para ordenar números correctamente, se necesita una función de comparación
puntajes.sort((a, b) => a - b);

console.log('Puntajes después (ordenados):', puntajes);
// Salida: [2, 8, 50, 100]

// Método 7: [reverse()]
// Descripción:  Invierte el orden de los elementos en un arreglo, es decir, el primer elemento pasa a ser el último y viceversa.
// Ejemplo:
const pasosReceta = ['batir', 'mezclar', 'hornear'];
console.log('Pasos de la receta antes:', pasosReceta);

// Invertimos el orden de los pasos
pasosReceta.reverse();

console.log('Pasos de la receta después (invertidos):', pasosReceta);
// Salida: ['hornear', 'mezclar', 'batir']

// Método 8: [fill()]
// Descripción:  Rellena un arreglo con un valor estático desde una posición inicial hasta una posición final. Es útil para inicializar arreglos o para reemplazar múltiples elementos de una vez.
// Ejemplo:

const asientosDisponibles = ['A1', 'A2', 'A3', 'B1', 'B2'];
console.log('Asientos antes:', asientosDisponibles);

// Cambiamos los asientos del 'A2' al 'B1' a 'Ocupado'
asientosDisponibles.fill('Ocupado', 1, 4);

console.log('Asientos después (modificados):', asientosDisponibles);
// Salida: ['A1', 'Ocupado', 'Ocupado', 'Ocupado', 'B2']


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el arreglo inicial sobre el que se aplica, por el contrario crea y devuelve un nuevo arreglo, el inciial permanee intacto haciéndolo así más predecible y seguro. Son importantes porque permiten preveer y asegurar que los datos originales no sean modificados, asimismo, son buenos en casos de aplicaciones que gestionan estados completos, por úlyimo, posibilita encadenar varias operaciones en una línea de código
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");


// Método 1: [concat()]
// Descripción: Combina dos o más arreglos o elementos y devuelve un nuevo arreglo.


// Ejemplo:
const letras = ['a', 'b'];
const numeros = [1, 2];

console.log('Arreglo original de letras:', letras); // Salida: ['a', 'b']

// Se crea un nuevo arreglo combinado
const combinacion = letras.concat(numeros);

console.log('Nuevo arreglo combinado:', combinacion); // Salida: ['a', 'b', 1, 2]
console.log('Arreglo original de letras (sin cambios):', letras); // Salida: ['a', 'b']



// Método 2: [slice ()]
// Descripción: Extrae una porción de un arreglo y la devuelve como un nuevo arreglo. No incluye el elemento en la posición final.

// Ejemplo:

const colores = ['rojo', 'verde', 'azul', 'amarillo'];
console.log('Arreglo original de colores:', colores); // Salida: ['rojo', 'verde', 'azul', 'amarillo']

// Se extrae una porción desde el índice 1 hasta el 3 (sin incluir el 3)
const coloresDestacados = colores.slice(1, 3);

console.log('Nuevo arreglo de colores destacados:', coloresDestacados); // Salida: ['verde', 'azul']
console.log('Arreglo original de colores (sin cambios):', colores); // Salida: ['rojo', 'verde', 'azul', 'amarillo']



// Método 3: [map()]
// Descripción: Crea un nuevo arreglo al aplicar una función a cada elemento del arreglo original.


// Ejemplo:
const precios = [10, 20, 30];
console.log('Arreglo original de precios:', precios); // Salida: [10, 20, 30]

// Se crea un nuevo arreglo con los precios duplicados
const preciosDuplicados = precios.map(precio => precio * 2);

console.log('Nuevo arreglo con precios duplicados:', preciosDuplicados); // Salida: [20, 40, 60]
console.log('Arreglo original de precios (sin cambios):', precios); // Salida: [10, 20, 30]



// Método 4: [filter()]
// Descripción: Crea un nuevo arreglo que contiene solo los elementos del arreglo original que cumplen una condición específica.


// Ejemplo:
const edades = [15, 22, 18, 17, 35];
console.log('Arreglo original de edades:', edades); // Salida: [15, 22, 18, 17, 35]

// Se crea un nuevo arreglo con solo las edades mayores o iguales a 18
const adultos = edades.filter(edad => edad >= 18);

console.log('Nuevo arreglo de adultos:', adultos); // Salida: [22, 18, 35]
console.log('Arreglo original de edades (sin cambios):', edades); // Salida: [15, 22, 18, 17, 35]

// Método 5: [join ()]
// Descripción: Une todos los elementos de un arreglo en una cadena de texto. No modifica el arreglo original.


// Ejemplo:
const palabras = ['Hola', 'mundo', 'desde', 'JavaScript'];
console.log('Arreglo original de palabras:', palabras); // Salida: ("Hola", "mundo", "desde", "JavaScript")

// Se crea una nueva cadena de texto uniendo los elementos
const frase = palabras.join(' ');

console.log('Nueva cadena de texto:', frase); // Salida: "Hola mundo desde JavaScript"
console.log('Arreglo original de palabras (sin cambios):', palabras); // Salida: ["Hola", "mundo", "desde", "JavaScript"]