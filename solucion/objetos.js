// Investigación #1: Objeto Literal

// 1. Definición:
// Un objeto literal en JavaScript es una forma directa de crear un objeto usando llaves {}.
// Su propósito es agrupar datos relacionados bajo una misma entidad.

const computador = {
  marca: "Dell",
  modelo: "XPS 13",
  ramGB: 16,
  tieneSSD: true,
  puertos: ["USB-C", "HDMI", "Thunderbolt"],
  procesador: {
    marca: "Intel",
    modelo: "i7-1250U",
    nucleos: 10
  }
};

// Investigación #2: Objeto por Constructor

// 1. Definición:
// Un objeto por constructor se crea usando funciones o clases. A diferencia del objeto literal,
// permite generar múltiples instancias con la misma estructura.

// 2. Constructor con new Object()
const computador2 = new Object();
computador2.marca = "HP";
computador2.modelo = "Envy";
computador2.ramGB = 8;
computador2.tieneSSD = false;
computador2.puertos = ["USB-A", "Ethernet"];
computador2.procesador = {
  marca: "AMD",
  modelo: "Ryzen 5",
  nucleos: 6
};

// 3. Constructor personalizado
function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

const producto1 = new Producto("Mouse inalámbrico", 29.99, true);
const producto2 = new Producto("Monitor 24 pulgadas", 199.99, false);
