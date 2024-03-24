let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito(){
    if (productosEnCarrito && productosEnCarrito.length > 0) {  
        contenedorCarritoVacio.classList.add('disabled');
        contenedorCarritoProductos.classList.remove('disabled');
        contenedorCarritoAcciones.classList.remove('disabled');
        contenedorCarritoComprado.classList.add('disabled');
    
        contenedorCarritoProductos.innerHTML = "";
        //agregar productos al html
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement('div');
            div.classList.add('carrito-producto');
    
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-tiulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id=${producto.id}>
                <i class="bi bi-trash-fill"></i>
            </button>
            `
            contenedorCarritoProductos.append(div);
        });
    } else{
        contenedorCarritoVacio.classList.remove('disabled');
        contenedorCarritoProductos.classList.add('disabled');
        contenedorCarritoAcciones.classList.add('disabled');
        contenedorCarritoComprado.classList.add('disabled');
    
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}
cargarProductosCarrito();


//se asignan los productos al html generado por js
function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1); //borra en la posicion index un producto
    cargarProductosCarrito();

    localStorage.setItem('productos-en-carrito',JSON.stringify(productosEnCarrito));
}


/*--- vaciaddo del carrito---*/
botonVaciar.addEventListener('click', vaciarCarrito);


function vaciarCarrito(){
    // se vacia el carrito, se actualiza la informacion en el json y se actualiza la visualizacion de la pagina
    productosEnCarrito.length = 0;
    localStorage.setItem('productos-en-carrito',JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acumulador, producto) => acumulador + (producto.cantidad*producto.precio), 0);
    contenedorTotal.innerText = `$${totalCalculado}`;

}

/*--- vaciaddo del carrito cuando se compra---*/
botonComprar.addEventListener('click', comprarCarrito);


function comprarCarrito(){
    // se vacia el carrito, se actualiza la informacion en el json y se actualiza la visualizacion de la pagina
    productosEnCarrito.length = 0;
    localStorage.setItem('productos-en-carrito',JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();

    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.add('disabled');
    contenedorCarritoAcciones.classList.add('disabled');
    contenedorCarritoComprado.classList.remove('disabled');
}