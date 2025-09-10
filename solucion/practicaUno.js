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
playlistInicial.push({ titulo: "Imagine", artista: "John Lennon", duracion: 183 });
console.log(playlistInicial);

// 2. Eliminar la PRIMERA canción de la playlist.
//    Utiliza un método mutable.
console.log("\n2. Eliminar primera canción:");
playlistInicial.shift();
console.log(playlistInicial);

// 3. Crear una NUEVA playlist que contenga solo los títulos de las canciones.
//    Utiliza un método inmutable. El arreglo original no debe cambiar.
console.log("\n3. Crear playlist solo con títulos:");
const playlistTitulos = playlistInicial.map(cancion => cancion.titulo);
console.log("Nueva playlist de títulos:", playlistTitulos);
console.log("Playlist original intacta:", playlistInicial);

// 4. Crear una NUEVA playlist que contenga solo las canciones que duren más de 400 segundos.
//    Utiliza un método inmutable.
console.log("\n4. Crear playlist con canciones largas:");
const playlistLarga = playlistInicial.filter(cancion => cancion.duracion > 400);
console.log("Playlist canciones largas:", playlistLarga);
console.log("Playlist original intacta:", playlistInicial);

// 5. Encontrar la primera canción en la playlist que sea de "Eagles".
//    Utiliza un método inmutable y muestra el objeto de la canción encontrada.
console.log("\n5. Encontrar canción de Eagles:");
const cancionEagles = playlistInicial.find(cancion => cancion.artista === "Eagles");
console.log("Canción encontrada:", cancionEagles);
