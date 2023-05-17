receta = {};

receta.nombre = "Sandwich";
receta.ingredientes  = [];

receta.ingredientes.push({nombre:"Pan", cantidad : 2});

receta.ingredientes.push({ nombre: "Quese", cantidad: 1});

console.log(receta.ingredientes[0].nombre);

let total = 0;
for( let i = 0; i < receta.ingredientes.length;i++ ){
    total += receta.ingredientes[i].cantidad;
}

console.log("La cantidad total de ingredientes es: " + total);