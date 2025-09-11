// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Jhonatan Tabares Jaramillo]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es...
 */ console.log("Son una clase de objetos especiales, diseñados para guardar datos y informacion.") 

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para...
 */ console.log("Se utilizan para almacenar y manejar diferentes tipos de datos ordenados.") 

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí

const arregloMixto = ["dato 1", 2, true, 2.99]

// Muestra el arreglo `arregloMixto` en la consola.
console.log(arregloMixto)


// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que...
 */ console.log("permite modificar la informacion del arreglo original")

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: push()
// Descripción: Permite agregar nuevos items al arreglo 
// Ejemplo:
const arreglo1 = ["dato 1", 2, true, 2.99]
arreglo1.push("Dato 5");
console.log(arreglo1)

// Método 2: pop()
// Descripción: Elimina el ultimo elemento del arreglo
// Ejemplo:
const arreglo2 = ["dato 1", 2, true, 2.99]
arreglo2.pop();
console.log(arreglo2)

// Método 3: shift()
// Descripción: Elimina el primer elemento del arreglo
// Ejemplo:
const arreglo3 = ["dato 1", 2, true, 2.99]
arreglo3.shift();
console.log(arreglo3)

// Método 4: unshift()
// Descripción: Agrega un nuevo elemento al principio del arreglo
// Ejemplo:
const arreglo4 = ["dato 1", 2, true, 2.99]
arreglo4.unshift("Dato 0");
console.log(arreglo4)

// Método 5: splice()
// Descripción: Agrega o elimina datos del arreglo
// Ejemplo:
const arreglo5 = ["dato 1", 2, true, 2.99]
arreglo5.splice(2, 0, "dato nuevo");
console.log(arreglo5)

// Método 6: fill()
// Descripción: Rellena los elementos especificados en una matriz con un valor.
// Ejemplo:
const arreglo6 = ["dato 1", 2, true, 2.99]
arreglo6.fill("Dato Fill", 2, 4);
console.log(arreglo6)



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que... Son importantes porque...
 */  console.log("aquello que NO permite modificar la informacion del arreglo original, lo cual es importante porque  ayuda a prevenir efectos secundarios que puedan causar errores en el codigo. ")

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: map()
// Descripción: Crea una nueva matriz llamando a una función para cada elemento de la matriz.
// Ejemplo:

const arreglo7 = ["dato 1", 2, true, 2.99]
const newArr = arreglo7.map(Math.sqrt)
console.log(arreglo7,newArr)


// Método 2: filter()
// Descripción: crea una nueva matriz llena de elementos que pasan una prueba proporcionada por una función.
// Ejemplo:

const arreglo8 = [19, 25, 6, 2.99]
const result = arreglo8.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(arreglo8.filter(checkAdult))

// Método 3: find()
// Descripción: El método devuelve el valor del primer elemento que pasa una prueba.
// Ejemplo:


const arreglo9 = [19, 25, 6, 2.99];

function checkAge(age) {
  return age > 18;
}
console.log(arreglo9.find(checkAge))

// Método 4: some()
// Descripción: El método verifica si algún elemento de la matriz pasa una prueba (proporcionada como una función de devolución de llamada).
// Ejemplo:

const arreglo10 = [19, 25, 6, 2.99];
console.log(arreglo10.some(checkAdult))
function checkAdult(age) {
  return age > 18;
}

// Método 5: findIndex()
// Descripción: El método () ejecuta una función para cada elemento de la matriz y devuelve el índice (posición) del primer elemento que pasa una prueba.
// Ejemplo:

const arreglo11 = [19,25,6,2.99]

arreglo11.findIndex(checkAge)

function checkAge(age){
    return age > 18;
}

console.log(arreglo11)

// Método 6: indexOf()
// Descripción: El método devuelve la posición de la primera aparición de un valor en una cadena.
// Ejemplo:

const arreglo12 = [19,"dato2",6,2.99];
let arreglo12ejemplo = arreglo12.indexOf("dato2");
console.log(arreglo12ejemplo)

// Método 7: slice()
// Descripción: Devuelve los elementos seleccionados en un nueva arreglo.
// Ejemplo:

const arreglo13 = ["dato 1", 2, true, 2.99];
const arreglo13ej = arreglo13.slice(1,3);
console.log(arreglo13ej);

// Método 8: reduce()
// Descripción: Ejecuta una función reductora para el elemento del arreglo.
// Ejemplo:

const arreglo14 = [19,25,6,2.99];

function myFunc(total,num){
    return total - num;
}

console.log(arreglo14.reduce(myFunc));

//Método 9: forEach()
//Descripción: Llama a la funcion para cada elemento en el arreglo
//Ejemplo:

const arreglo15 = ["dato 1", 2, true, 2.99]

function myFunction() {
    return Math.floor(Math.random() * 10);
}

arreglo15.forEach(myFunction)


//Método 10: isArray()
//Descripción: devuelve verdadero si un objeto es un arreglo, de lo contrario falso.
//Ejemplo:

const arreglo16 = ["dato 1", 2, true, 2.99]
let arreglo16ej = Array.isArray(arreglo16);
console.log(arreglo16ej)