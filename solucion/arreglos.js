// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Leidys Diana Aparicio Bello

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una estructura
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para guardar varios valores en una sola variable.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
let mixto = [
  "Holis",        
  20,            
  true,  
  { nombre: "Diana", edad: 18 },
  [1, 2, 3],     
  null         
];

// Muestra el arreglo `arregloMixto` en la consola.
console.log(mixto);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que cambia o modifica el valor original de un arreglo.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

let frutas = ["Manzana", "Banano", "Pera", "Uva"];
console.log("Arreglo inicial:", frutas);

// Método 1: push
// Descripción: agrega al final
// Ejemplo:
frutas.push("Mango");
console.log("push:", frutas);


// Método 2: pop 
// Descripción: → elimina el último
// Ejemplo:
frutas.pop();
console.log("pop:", frutas);


// Método 3: shift
// Descripción: elimina el primero
// Ejemplo:
frutas.shift();
console.log("shift:", frutas);

// Método 4: unshift
// Descripción: agrega al inicio
// Ejemplo:
frutas.unshift("Fresa");
console.log("unshift:", frutas);

// Método 5: splice
// Descripción: elimina y/o agrega en cualquier posición
// Ejemplo:
frutas.splice(2, 1, "Kiwi"); // en la posición 2 elimina 1 y agrega "Kiwi"
console.log("splice:", frutas);

// Método 6: sort 
// Descripción: ordena el arreglo
// Ejemplo:
frutas.sort();
console.log("sort:", frutas);

// Metodo 7: reverse →
// Descripcion: invierte el orden del arreglo
frutas.reverse();
console.log("reverse:", frutas);

// Metodo 8: fill 
//Descripcion: rellena con un valor
frutas.fill("Sandía", 1, 3); // desde índice 1 hasta antes del 3
console.log("fill:", frutas);


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica el arreglo original Son importantes porque evitando cambios accidentales.
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

let numeros = [1, 2, 3, 4, 5];

// Método 1: map
// Descripción: Crea un nuevo arreglo aplicando una función a cada elemento.
let dobles = numeros.map(n => n * 2);
console.log("map:", dobles);

// Método 2: filter
// Descripción: Devuelve un nuevo arreglo con los elementos que cumplen una condición.
let pares = numeros.filter(n => n % 2 === 0);
console.log("filter:", pares);

// Método 3: slice
// Descripción: Devuelve una parte del arreglo sin modificar el original.
let primerosTres = numeros.slice(0, 3);
console.log("slice:", primerosTres);

// Método 4: concat
// Descripción: Une dos o más arreglos en uno nuevo.
let masNumeros = numeros.concat([6, 7]);
console.log("concat:", masNumeros);

// Método 5: reduce
// Descripción: Aplica una función a todos los elementos y devuelve un único valor.
let suma = numeros.reduce((acum, n) => acum + n, 0);
console.log("reduce:", suma);

// Método 6: join
// Descripción: Devuelve un string con todos los elementos separados por un delimitador.
let texto = numeros.join("-");
console.log("join:", texto);

// Método 7: toReversed (ES2023)
// Descripción: Devuelve una copia invertida sin modificar el original.
let invertidos = numeros.toReversed();
console.log("toReversed:", invertidos);

// Método 8: toSorted (ES2023)
// Descripción: Devuelve una copia ordenada sin alterar el arreglo original.
let ordenados = numeros.toSorted();
console.log("toSorted:", ordenados);

// Método 9: toSpliced (ES2023)
// Descripción: Devuelve una copia con elementos eliminados o reemplazados.
let spliced = numeros.toSpliced(2, 1, 99);
console.log("toSpliced:", spliced);

// Método 10: flatMap
// Descripción: Aplica map y aplana el resultado en un nuevo arreglo.
let duplicados = numeros.flatMap(n => [n, n * 2]);
console.log("flatMap:", duplicados);
