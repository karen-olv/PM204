MCocina
let catalogo = [
    { nombre: "Cafe Americano", precio: 40, categoria: "bebidas" },
    { nombre: "Capuchino", precio: 55, categoria: "bebidas" },
    { nombre: "Latte Vainilla", precio: 60, categoria: "bebidas" },
    { nombre: "Muffin de Chocolate", precio: 35, categoria: "postres" },
    { nombre: "Te Verde", precio: 45, categoria: "bebidas" }
];
console.log("--- MENU DE COFFEE CODE II ---");
console.table(catalogo);

let productos_baratos = catalogo.filter(producto => producto.precio <= 45);
console.log("\n--- Productos baratos ---");
console.table(productos_baratos);

let productos_caros = catalogo.filter(producto => producto.precio > 45);
console.log("\n--- Productos caros---");
console.table(productos_caros);

let bebidas = catalogo.filter(producto => producto.categoria === "bebidas");
console.log("\n--- Bebidas---");
console.table(bebidas);

let postres = catalogo.filter(producto => producto.categoria === "postres");
console.log("\n--- Postres ---");
console.table(postres);

let buscar_producto = catalogo.find(producto => producto.nombre === "Capuchino");
console.log("\n--- PRODUCTO ENCONTRADO ---");
console.log(buscar_producto);

module.exports = { catalogo, bebidas, postres, productos_baratos, productos_caros };