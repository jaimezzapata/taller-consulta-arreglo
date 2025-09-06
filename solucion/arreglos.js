// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Mayerlin Cubides]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Es una estructura de datos que permite almacenar, una colección ordenada de valores de distintos tipos en una sola variable, accesible mediante un índice númerico que empieza en cero. Son objetos con propiedades y métodos especiales que facilitan la minipulación de las listas de datos, como añadir, eliminar o acceder a elementos.
 * Escribe tu explicación aquí:
 Permite manipular los datos como añadir,eliminar ó acceder a los elementos del código, de manera ordenada sinimportar los distintos tipos de variable.Siempre y cuando el indice númerido inice en 0.

 * Un arreglo es...un array que corresponde a una estructura de datos que organiza múltiples elementos del mismo tipo de forma contigua en memoria, permitiendo almacenarlos y manipularlos junstos bajo un único nombre. Cada elemento se accede mediante un indice númerico que indica su posición, usualemnte comenzando en 0. Los arreglos son útiles para manejar grandes cantidades de datos de manera eficiente y puede ser unidimencionales (como fila) ó de múltiples dimesiones, como bidimencionales(una tabla).
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/** Organización y agrupación de datos relacionados.

Acceso rápido y eficiente a los elementos por índice.

Manipulación de grandes volúmenes de datos con facilidad.

Modelo natural para representar datos complejos (objetos anidados, listas, etc.).

Optimización de rendimiento al trabajar con colecciones de elementos.

Ejemplo de uso común:

En aplicaciones web y móviles, los arreglos son muy útiles para representar listas de productos, comentarios, mensajes, respuestas de formularios, y mucho más.

 * Escribe tu explicación aquí:  Permite en el proceso de Desarrollo de Software, facilitar la busqueda de datos en listado de grandes cantidade teniendo clara la posicioón inicial de 0. Aclara y especifica el timpo de dato a consultar de manera ordenada. Garantizando la optimización de la consulta de datos.

 * Los arreglos se utilizan para...
 
 *  * Almacenar colecciones de datos relacionados.

Acceso rápido y ordenado a los elementos por índice.

Realizar transformaciones y filtrado de datos.

Almacenar y manipular datos dinámicos que cambian con el tiempo.

Representar secuencias de datos (números, fechas, etc.).

Realizar cálculos y análisis de datos.

Gestionar y mostrar listas de elementos en aplicaciones y interfaces de usuario.

Modelar estructuras de datos complejas (como pilas y colas).

Los arreglos son fundamentales en casi todos los lenguajes de programación, y son una herramienta clave en el desarrollo de software para organizar, manipular y procesar grandes cantidades de datos de forma eficiente.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí

const datosDiversos = [
  "Maye"        // string
  39,              // number
  true,            // boolean
  { nombre: "Maria", edad: 30 },  // objeto
  [1, 2, 3],       // arreglo dentro de un arreglo
  null,            // null
  undefined,       // undefined
  function() {     // función
    console.log("¡Hola desde la función!");
  }
];

// Accediendo a los elementos del arreglo
console.log(datosDiversos[0]); // "Maye" (string)
console.log(datosDiversos[1]); // 39 (number)
console.log(datosDiversos[2]); // true (boolean)
console.log(datosDiversos[3]); // { nombre: "Maria", edad: 30 } (objeto)
console.log(datosDiversos[4]); // [1, 2, 3] (arreglo)

// Llamando a la función que está dentro del arreglo
datosDiversos[7](); // ¡Hola desde la función!


// Muestra el arreglo `arregloMixto` en la consola.

console.log(arregloMixto);




// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
Un método mutable modifica el estado original de un objeto o estructura de datos.

Cambia las propiedades o elementos de la estructura directamente.

En objetos y arreglos, los métodos como push(), pop(), shift(), y unshift() son ejemplos de métodos mutables. 


 * Escribe tu explicación aquí: Permite modificar el estado interno de un objeto ó de una estructura de datos, afectando de manera permanente el dato el contrnido de la estructura original. Donde el dato que se busca mutar cambia y genera el resultado buscado seún corresponda.

 * Un método mutable es aquel que... modifica el estado interno de un objeto o estructura de datos directamente . Es decir cambia el valor de las propiedades o elementos originales, afectando permanentemente el contenido de la estructura en cuestión.

1.Modifica directamente el estado o los datos del objeto o estructura.
2.Cambia el valor original, no devuelve una copia ni una nueva versión de los datos.
3.A menudo se usa en estructuras mutables como objetos y arreglos.

 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [push ()]
// Descripción: Agrega uno o más elementos al final de un arreglo
// Ejemplo:
let arreglo1 = [1, 2, 3];
arreglo1.push(4);  // Agrega el número 4 al final del arreglo
console.log(arreglo1);  // [1, 2, 3, 4]

// Método 2: [pop ()] 
// Descripción: Elimina el último elemento de un arreglo
// Ejemplo:
let arreglo2 = [10, 20, 30, 40];
arreglo2.pop();  // Elimina el último elemento (40)
console.log(arreglo2);  // [10, 20, 30]


// Método 3: [unshift()]
// Descripción:  Agrega uno o más elementos al principio del arreglo
// Ejemplo:
let arreglo3 = [1, 2, 3];
arreglo3.unshift(0);  // Agrega el número 0 al principio
console.log(arreglo3);  // [0, 1, 2, 3]

// Método 4: [shift() ]
// Descripción:  Elimina el primer elemento de un arreglo
// Ejemplo:
let arreglo4 = [100, 200, 300];
arreglo4.shift();  // Elimina el primer elemento (100)
console.log(arreglo4);  // [200, 300]

// Método 5: [splice()]
// Descripción: Cambia el contenido de un arreglo eliminando, reemplazando o agregando elementos
// Ejemplo:
let arreglo5 = [1, 2, 3, 4, 5];
arreglo5.splice(2, 1, "nuevoElemento");  // Elimina el elemento en el índice 2 (3) y lo reemplaza con "nuevoElemento"
console.log(arreglo5);  // [1, 2, "nuevoElemento", 4, 5]


// Método 6: [reverse()]
// Descripción: Invierte el orden de los elementos de un arreglo
// Ejemplo:
let arreglo6 = [1, 2, 3, 4];
arreglo6.reverse();  // Invierte el arreglo
console.log(arreglo6);  // [4, 3, 2, 1]


// Método 7: [sort()]
// Descripción: Ordena los elementos de un arreglo en su lugar (por defecto en orden lexicográfico)
// Ejemplo:
let arreglo7 = [3, 1, 4, 2];
arreglo7.sort();  // Ordena el arreglo en orden ascendente
console.log(arreglo7);  // [1, 2, 3, 4]

// Método 8: [fill()]
// Descripción: Rellena los elementos de un arreglo con un valor estático desde una posición inicial hasta una posición final
// Ejemplo:
let arreglo8 = [1, 2, 3, 4, 5];
arreglo8.fill(0, 2, 4);  // Rellena las posiciones 2 y 3 con 0
console.log(arreglo8);  // [1, 2, 0, 0, 5]

// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.

//Un método inmutable es aquel que no modifica el objeto o estructura de datos original sobre la cual se aplica. En lugar de cambiar el contenido de la estructura de datos directamente, un método inmutable crea y devuelve una nueva instancia con los cambios aplicados. El estado original de los datos se mantiene intacto.//
/*Son importantes por:
Evita efectos secundarios inesperados.

Hace el código más predecible y fácil de depurar.

Promueve la programación funcional.

Facilita la comparación y el uso de herramientas como caching y renderizado eficiente.*/

// 

//
/**
 * Escribe tu explicación aquí: Como su nombre lo dice al ser inmutable mantiene le código de fácil modificaipon sin que sea permanente el cambio del mismo, facilitando la depuración en su momento de parte del código, en el momento que se requiera. Adicional facilita la comparción y el uso de herramientas como caching, haciendo más eficiente el renderizado.
 * 
 * Un método inmutable es aquel que...  que no modifica el objeto o estructura de datos original sobre el cual se aplica. Son importantes porque...Evita los efectos secundarios inesperados que puede resulta en el caso de los métodos mutables.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [concat()]
// Descripción: Combina dos o más arreglos y devuelve un nuevo arreglo sin modificar los arreglos originales.
// Ejemplo:
let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];
let combinado = arreglo1.concat(arreglo2);  // Devuelve un nuevo arreglo combinado
console.log(combinado);  // [1, 2, 3, 4, 5, 6]
console.log(arreglo1);  // [1, 2, 3] (El arreglo original no ha cambiado)

// Método 2: [slice()]
// Descripción: Crea una copia superficial de una porción de un arreglo, sin modificar el arreglo original.
// Ejemplo:
let arreglo3 = [10, 20, 30, 40, 50];
let subArreglo = arreglo3.slice(1, 4);  // Crea un nuevo arreglo con los elementos entre los índices 1 y 4 (sin incluir el índice 4)
console.log(subArreglo);  // [20, 30, 40]
console.log(arreglo3);  // [10, 20, 30, 40, 50] (El arreglo original no ha cambiado)

// Método 3: [map()]
// Descripción: Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original.
// Ejemplo:
let arreglo4 = [1, 2, 3];
let multiplicado = arreglo4.map(x => x * 2);  // Devuelve un nuevo arreglo con cada valor multiplicado por 2
console.log(multiplicado);  // [2, 4, 6]
console.log(arreglo4);  // [1, 2, 3] (El arreglo original no ha cambiado)

// Método 4: [filter()]
// Descripción: Crea un nuevo arreglo con los elementos que pasen una condición especificada.
// Ejemplo:

let arreglo5 = [10, 20, 30, 40, 50];
let mayoresDe30 = arreglo5.filter(x => x > 30);  // Devuelve un nuevo arreglo con elementos mayores que 30
console.log(mayoresDe30);  // [40, 50]
console.log(arreglo5);  // [10, 20, 30, 40, 50] (El arreglo original no ha cambiado)

// Método 5: [reduce()]
// Descripción: Aplica una función acumuladora en cada elemento del arreglo, devolviendo un único valor, pero no modifica el arreglo original.
// Ejemplo:

let arreglo6 = [1, 2, 3, 4];
let sumaTotal = arreglo6.reduce((acumulador, valorActual) => acumulador + valorActual, 0);  // Suma todos los elementos
console.log(sumaTotal);  // 10
console.log(arreglo6);  // [1, 2, 3, 4] (El arreglo original no ha cambiado)