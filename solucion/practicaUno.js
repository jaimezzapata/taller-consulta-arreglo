// Ejercicio de Aplicación Práctica: Gestión de una Playlist
console.log("\n--- EJERCICIO DE APLICACIÓN: GESTIÓN DE PLAYLIST ---");

const playlistInicial = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355 },
    { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
    { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
];

// 1. Añadir una nueva canción al FINAL de la playlist.
//    Utiliza un método mutable.
//    Canción a añadir: { titulo: "Imagine", artista: "John Lennon", duracion: 183 }
console.log("\n1. Añadir canción al final:");
// Escribe tu código aquí

console.log("\n1. Añadir canción al final:");

const playlistInicial = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355 },
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
];

const nuevaCancion = { titulo: "Imagine", artista: "John Lennon", duracion: 183 };

playlistInicial.push(nuevaCancion);

console.log("Playlist actualizada:", playlistInicial);


// 2. Eliminar la PRIMERA canción de la playlist.
//    Utiliza un método mutable.
console.log("\n2. Eliminar primera canción:");
// Escribe tu código aquí

console.log("\n2. Eliminar primera canción:");

const playlistInicial = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355 },
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
  { titulo: "Imagine", artista: "John Lennon", duracion: 183 }
];

const eliminada = playlistInicial.shift();

console.log("Canción eliminada:", eliminada);
console.log("Playlist después de eliminar la primera canción:", playlistInicial);


// 3. Crear una NUEVA playlist que contenga solo los títulos de las canciones.
//    Utiliza un método inmutable. El arreglo original no debe cambiar.
console.log("\n3. Crear playlist solo con títulos:");
// Escribe tu código aquí

console.log("\n3. Crear playlist solo con títulos:");

const playlistInicial = [
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
  { titulo: "Imagine", artista: "John Lennon", duracion: 183 }
];

const soloTitulos = playlistInicial.map(cancion => cancion.titulo);

console.log("Playlist original (sin cambios):", playlistInicial);
console.log("Nueva playlist solo con títulos:", soloTitulos);


// 4. Crear una NUEVA playlist que contenga solo las canciones que duren más de 400 segundos.
//    Utiliza un método inmutable.
console.log("\n4. Crear playlist con canciones largas:");
// Escribe tu código aquí

console.log("\n4. Crear playlist con canciones largas:");

const playlistInicial = [
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
  { titulo: "Imagine", artista: "John Lennon", duracion: 183 }
];

const cancionesLargas = playlistInicial.filter(cancion => cancion.duracion > 400);

console.log("Playlist original (sin cambios):", playlistInicial);
console.log("Nueva playlist (canciones > 400 seg):", cancionesLargas);


// 5. Encontrar la primera canción en la playlist que sea de "Eagles".
//    Utiliza un método inmutable y muestra el objeto de la canción encontrada.
console.log("\n5. Encontrar canción de Eagles:");
// Escribe tu código aquí

console.log("\n5. Encontrar canción de Eagles:");

// Playlist original
const playlistInicial = [
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
  { titulo: "Imagine", artista: "John Lennon", duracion: 183 }
];

const cancionDeEagles = playlistInicial.find(cancion => cancion.artista === "Eagles");

console.log("Playlist original (sin cambios):", playlistInicial);
console.log("Primera canción de Eagles encontrada:", cancionDeEagles);
