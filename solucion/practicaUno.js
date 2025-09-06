// Ejercicio de Aplicación Práctica: Gestión de una Playlist
console.log("\n--- EJERCICIO DE APLICACIÓN: GESTIÓN DE PLAYLIST ---");

const playlistInicial = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355 },
    { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
    { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
];

// 1. Añadir una nueva canción al FINAL de la playlist.
//    Utiliza un método mutable (push agrega al final y modifica el arreglo original)
console.log("\n1. Añadir canción al final:");
playlistInicial.push({ titulo: "Imagine", artista: "John Lennon", duracion: 183 });
console.log("Playlist después de añadir:", playlistInicial);


// 2. Eliminar la PRIMERA canción de la playlist.
//    Utiliza un método mutable (shift elimina el primer elemento)
console.log("\n2. Eliminar primera canción:");
playlistInicial.shift();
console.log("Playlist después de eliminar la primera:", playlistInicial);


// 3. Crear una NUEVA playlist que contenga solo los títulos de las canciones.
//    Utiliza un método inmutable (map crea un nuevo arreglo)
console.log("\n3. Crear playlist solo con títulos:");
const soloTitulos = playlistInicial.map(cancion => cancion.titulo);
console.log("Nueva playlist solo con títulos:", soloTitulos);


// 4. Crear una NUEVA playlist que contenga solo las canciones que duren más de 400 segundos.
//    Utiliza un método inmutable (filter crea un nuevo arreglo)
console.log("\n4. Crear playlist con canciones largas:");
const cancionesLargas = playlistInicial.filter(cancion => cancion.duracion > 400);
console.log("Nueva playlist con canciones largas:", cancionesLargas);


// 5. Encontrar la primera canción en la playlist que sea de "Eagles".
//    Utiliza un método inmutable (find retorna el primer elemento que cumple la condición)
console.log("\n5. Encontrar canción de Eagles:");
const cancionEagles = playlistInicial.find(cancion => cancion.artista === "Eagles");
console.log("Primera canción de Eagles encontrada:", cancionEagles);
