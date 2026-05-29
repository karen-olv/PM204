const { catalogo } = require("./MCocina");

let pedidos = [];
let caja = { totalAcumulado: 0 };

function agregarPedido(producto, callback) {

    if (producto.precio === 0) {
        console.log(` Pedido rechazado antes de agregar: ${producto.nombre}`);
        callback(` Pedido cancelado: ${producto.nombre}`);
        return;
    }

    pedidos.push(producto);
    console.log(` Pedido agregado: ${producto.nombre} - $${producto.precio}`);

    setTimeout(() => {

        let pedidoListo = Math.random() > 0.2;

        if (pedidoListo) {
            callback(` Pedido listo: ${producto.nombre}`);
        } else {
            callback(` Pedido cancelado: ${producto.nombre}`);
            pedidos = pedidos.filter(p => p.nombre !== producto.nombre);
        }

    }, 3000);
}

function notificacion(mensaje) {
    console.log(mensaje);
}

function iniciarCaja() {

    agregarPedido(catalogo[0], notificacion);
    agregarPedido(catalogo[2], notificacion);
    agregarPedido(catalogo[3], notificacion);

    setTimeout(() => {

        const subtotal = pedidos.reduce((acc, pedido) => acc + pedido.precio, 0);

        const IVA_PORCENTAJE = 0.16;
        const iva = subtotal * IVA_PORCENTAJE;
        const total = subtotal + iva;

        caja.totalAcumulado = total;

        console.log("--- PEDIDOS REGISTRADOS EN CAJA ---");
        console.table(pedidos);

        console.log(`Subtotal: $${subtotal}`);
        console.log(`IVA (16%): $${iva.toFixed(2)}`);
        console.log(`Total: $${total.toFixed(2)}`);

    }, 4000);

}

iniciarCaja();

module.exports = { pedidos, caja };