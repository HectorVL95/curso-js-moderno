"use strict"

const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
}

Object.seal( producto )

producto.disponible = false;
producto.image = "imagen.jpg";

delete producto.precio;


console.log(producto); 
