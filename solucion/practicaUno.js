// Ejercicio de Aplicación Práctica: Gestión de una Playlist
console.log("\n--- EJERCICIO DE APLICACIÓN: GESTIÓN DE PLAYLIST ---");

const playlistInicial = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355 },
    { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
    { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: 482 },
];

// 1. Añadir una nueva canción al FINAL de la playlist.
//    Utiliza un método mutable: .push()
//    Canción a añadir: { titulo: "Imagine", artista: "John Lennon", duracion: 183 }
console.log("1. Añadir canción al final:");
playlistInicial.push({ titulo: "Imagine", artista: "John Lennon", duracion: 183 });
console.log(playlistInicial);
console.log("------------------------");

// 2. Eliminar la PRIMERA canción de la playlist.
//    Utiliza un método mutable: .shift()
console.log("2. Eliminar primera canción:");
playlistInicial.shift();
console.log(playlistInicial);
console.log("------------------------");

// 3. Crear una NUEVA playlist que contenga solo los títulos de las canciones.
//    Utiliza un método inmutable: .map()
console.log("\n3. Crear playlist solo con títulos:");
const titulosPlaylist = playlistInicial.map(cancion => cancion.titulo);
console.log(titulosPlaylist);
console.log("------------------------");

// 4. Crear una NUEVA playlist que contenga solo las canciones que duren más de 400 segundos.
//    Utiliza un método inmutable: .filter()
console.log("\n4. Crear playlist con canciones largas:");
const cancionesLargas = playlistInicial.filter(cancion => cancion.duracion > 400);
console.log(cancionesLargas);
console.log("------------------------");

// 5. Encontrar la primera canción en la playlist que sea de "Eagles".
//    Utiliza un método inmutable: .find()
console.log("\n5. Encontrar canción de Eagles:");
const cancionEagles = playlistInicial.find(cancion => cancion.artista === "Eagles");
console.log(cancionEagles);
console.log("------------------------");
