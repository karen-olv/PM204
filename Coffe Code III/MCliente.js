const { catalogo } = require("./MCocina");
const { pedidos, caja } = require("./MCaja");

function separador() {
    console.log("-----------------------------------");
}

function mostrarMenu() {
    separador();
    console.log("            MENU DEL DIA");
    separador();

    catalogo.forEach((producto, index) => {
        console.log(`  ${index + 1}. ${producto.nombre}  -  $${producto.precio}`);
    });

    separador();
}

function mostrarPedidos() {

    console.log(" Pedido recibido");

    setTimeout(() => {
        separador();
        console.log(" Preparando pedido...");
        separador();
    }, 2000);

    setTimeout(() => {
        separador();
        console.log(" Empacando pedido...");
        separador();
    }, 4000);

    setTimeout(() => {

        separador();
        console.log("          TUS PEDIDOS     ");
        separador();

        if (!pedidos || pedidos.length === 0) {
            console.log(" Pedido cancelado - No hay pedidos registrados");
        } else {

            pedidos.forEach((pedido, index) => {
                console.log(`  ${index + 1}. ${pedido.nombre}  -  $${pedido.precio}`);
            });

            const cancelados = [catalogo[0], catalogo[2], catalogo[3]].filter(
                original => !pedidos.find(p => p.nombre === original.nombre)
            );

            if (cancelados.length > 0) {
                separador();
                console.log(" Pedidos cancelados:");
                cancelados.forEach(p => console.log(`  - ${p.nombre}`));
            }

            separador();
            console.log(`  TOTAL: $${caja.totalAcumulado || 0}`);
            console.log(" Pedido entregado");
        }

        separador();

    }, 7000);

}

function iniciarCliente() {
    mostrarMenu();
    mostrarPedidos();
}

iniciarCliente();