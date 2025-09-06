// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [Alejandra Alvarez Naranjo]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es una estructura que nos permite guardar varios valores en una misma variable
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para optimizar espacio y almacenamiento, nos ayuda a almacenar listas de elementos relacionados,
 * tambien para filtar, ordenar y modificar datos en grupo.
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí 
let ciudadesColombia = ["Cali", "Medellin","Cartagena", "Santa Marta", "Villavicencio"];
for (let i = 0; i < ciudades.length; i++); {
    console.log (ciudades[i]);
}


// Muestra el arreglo `arregloMixto` en la consola.

let datosUsuarios = [{nombre: "Jose"}, {edad: "60"}, "Cartagena"];
for (i = 0; i < datosUsuarios.length; i++); {
    console.log (datosUsuarios [i]);
}

// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que se puede modificar despues de su creacion directamente, sin necesidad de crear un nuevo objeto o valor
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: push()
// Descripción: agrega uno o mas elementos al final del arreglo 
// Ejemplo: 
let colores = ["amarillo", "azul", "rojo", "verde"];
let longitudColores = colores.push ("morado");
console.log (colores);
console.log (longitudColores); 

// Método 2: pop ()
// Descripción: Elimina el ultimo elemento y lo devuelve, modifica el array original
// Ejemplo:
colores.pop()
console.log (colores); 


// Método 3: shift ()
// Descripción: elimina el primer elemento de un array, modifica el array original 
// Ejemplo:
 colores.shift ()
 console.log (colores); 


// Método 4:unshift()
// Descripción: Agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array. 
// Ejemplo: 
colores.unshift ("negro", "blanco")
console.log (colores);


// Método 5: splice ()
// Descripción: Cambia el contenido de un array eliminando, 
// reemplazando o agregando elementos en una posición específica
// Ejemplo:
colores.splice (2, 1, "celeste");


// Método 6: sort ()
// Descripción: Ordena los elementos del array, por defecto los ordena por cadenas de texto alfabeticamente
// Ejemplo:
colores.sort();



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable es aquel que no modifican el arreglo original, crean y devuelven un mismo arreglo.
 * Son importantes porque aumentan la seguridad del codigo y elimina efectos secundarios.
 */

// 2. Investiga y aplica 5 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: concat ()
// Descripción: concatena arreglos o elementos y devuelve uno nuevo.
// Ejemplo:
let alimentos = ["Zanahorias", "lechuga", "tomates"];
let bebidas = ["cocacola", "hit", "malta"];
console.log (alimentos)
console.log (bebidas); 
let alimentosYbebidas = alimentos.concat(bebidas);
console.log (alimentosYbebidas); 


// Método 2: join ()
// Descripción: une elementos en un string 
// Ejemplo:
let apellidos = ["Mendez", "Londoño", "Jimenez"]
let resultado = apellidos.join (" _ ");
console.log (resultado );

// Método 3:filter ()
// Descripción: devuelve un nuevo arreglo con elementos que cumplen una condición.
// Ejemplo: 
let numeroMayor = numeros.filter (n => n > 4 );
console.log (numeroMayor);
