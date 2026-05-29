let catalogo = [
    { nombre: "Cafe Americano", precio: 40, categoria: "bebidas" },
    { nombre: "Capuchino", precio: 55, categoria: "bebidas" },
    { nombre: "Latte Vainilla", precio: 60, categoria: "bebidas" },
    { nombre: "Muffin de Chocolate", precio: 35, categoria: "postres" },
    { nombre: "Te Verde", precio: 45, categoria: "bebidas" }
];

function prepararCafe(producto) {
    return new Promise((resolve, reject) => {

        console.log(`\n Preparando: ${producto.nombre}...`);

        setTimeout(() => {

            if (producto.categoria === "postres") {
                reject(`Falta ingrediente para: ${producto.nombre}`);
                return;
            }

            let errorEnCocina = Math.random() < 0.3;
            if (errorEnCocina) {
                reject(`Error en cocina al preparar: ${producto.nombre}`);
                return;
            }

            resolve(`Cafe preparado: ${producto.nombre}`);

        }, 2000);
    });
}

function mostrarCatalogo() {

    return new Promise((resolve, reject) => {

        console.log("--- MENU DE COFFEE CODE III ---");

        setTimeout(() => {

            if (catalogo.length > 0) {

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

                prepararCafe(catalogo[1])
                    .then(msg => console.log(msg))
                    .catch(err => console.log(err));

                prepararCafe(catalogo[3])
                    .then(msg => console.log(msg))
                    .catch(err => console.log(err));

                resolve("Catalogo mostrado correctamente");

            } else {

                reject("Error: no hay productos en el catalogo");

            }

        }, 3000);

    });

}

mostrarCatalogo()

    .then(resultado => {
        console.log(resultado);
    })

    .catch(error => {
        console.log(error);
    })

    .finally(() => {
        console.log("Proceso finalizado");
    });

module.exports = { catalogo };