// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: Mariana Ardila Liscano

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una colección de n elementos que pueden ser de diferente tipo de datos y tienen relación entre sí.
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para 
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
let persona=["Mariana", 23, "Cr 82 aa 107 a 45", false]

// Muestra el arreglo `arregloMixto` en la consola.
console.log(persona);


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que permite hacerle modificaciones a los elementos de un array, es importante porque permite actualizar la información.
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [Splice]
// Descripción: permite eliminar, modificar o agreagr un elemento en el array
// Ejemplo:

let frutas=["Manzana", "Pera", "Uvas", "Piña", "Banano", "Papaya"]
frutas.splice(3,2)
console.log(frutas)

// Método 2: [Push]
// Descripción: Permite agregar un elemento al final del array
// Ejemplo:

let verduras=["Papas", "Zanahoria", "Frijol"]
verduras.push("Cebolla")
console.log(verduras)

// Método 3: [Shift]
// Descripción: Permite eliminar el primer elemento del array
// Ejemplo:
verduras.shift()
console.log(verduras)

// Método 4: [unshift]
// Descripción: Permite agregar elementos al inicio del array
// Ejemplo:

let nombMascotas=["Rocky", "Alegra", "Eroz", "Estrella", "Bandy", "Pepito"]
nombMascotas.unshift("Misifu")
console.log(nombMascotas)

// Método 5: [Sort]
// Descripción: Permite ordenar los elementos del array, ya sea en orden alfabetico o númerico.
// Ejemplo:

let edades=[34, 23, 76, 25, 19, 23, 54, 12, 25]
edades.sort()
console.log(edades)
// Método 6: [unshift]
// Descripción: Permite invertir el orden d elos elementos.
// Ejemplo:

let nombres=["Rocio", "Ana", "Lucrecia", "Rodrigo"]
nombres.reverse()
console.log(nombres)


// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifica los elementos de un array sino que se crear otro array con las modificaciones realizadas sobre el array original. Son importantes porque permite mantener el array original
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [map]
// Descripción: Transforma cada elemento y devuelve un nuevo array.
// Ejemplo:
let duplosNumeros=[4,5,8]

let newNumber=duplosNumeros.map(m => m*2)
console.log(newNumber)

// Método 2: [filter]
// Descripción: Filtra elementos y devuelve un nuevo array.
// Ejemplo:

let multiplosDeTres=[4, 20, 9, 3, 18, 34, 27]
let multiplos=multiplosDeTres.filter(n => n%3===0)
console.log(multiplos)

// Método 3: [.slice()]
// Descripción: Permite copiar la parte de un arreglo
// Ejemplo:

let utiles=["Lapices", "Colores", "Cuadernos", "Marcadores", "Borradores", "Zapacuntas"]
let cartuchera=utiles.slice(2,4)
console.log(cartuchera)