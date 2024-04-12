const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
}

// No enseña las llaves del objeto
console.log(Object.keys( producto ));

// Te enseña los valores del objeto
console.log(Object.values( producto ));

// Te enseña las llaves y valores juntos 
console.log(Object.entries(producto));