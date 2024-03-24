// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];

const  contenedorProductos = document.querySelector('#contenedor-productos');
const  botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');


function cargarProductos (productosElegidos){ //recorre el array y se le asigna su respectivo fragmento de html
    //antes de cargar los productos, se vacie el contenedor;
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement('div'); //se crea el div 
        div.classList.add("producto");
        div.innerHTML = `
        <div class="producto">
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        </div>
        `
        contenedorProductos.append(div);
    })
    //recarga los botones
    actualizarBotonesAgregar();
}

cargarProductos(productos);

//eventos de los botones
botonesCategorias.forEach(boton =>{
    boton.addEventListener('click', (e)=> {

        botonesCategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active'); //currentTarget es una referencia al objeto en el cual se lanzo el evento. 

        //para que se carguen todos los productos si se selecciona "todos"
        if (e.currentTarget.id != "todos"){
            //cargar productos de distintas categorias
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            /* o sea, el target es el boton, el cual tiene distintos id's como 'pantalon, abrigo, camiseta,etc
            y este se compara con el id de lla categoria del producto del array, lo que permite filtrar
            */
            const productoCategoria = productos.find(producto => producto.categoria.id == e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        
    })
})


function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll('.producto-agregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })
}

/*--- agregar productos al carrito ---*/
let productosEncarrito;
let productosEncarritoLS = localStorage.getItem('productos-en-carrito');


if (productosEncarritoLS){
    productosEncarrito = JSON.parse(productosEncarritoLS);
    actualizarNumerito();
} else{
    productosEncarrito = []
}




function agregarAlCarrito(e){ //toma el evento como parametro
    const idBoton = e.currentTarget.id; //toma el id delelemento al que se le aplico el addeventlistener
    const productoAgregado = productos.find(producto => producto.id === idBoton); //compara con el id del boton, que tiene el id del producto (ver fragmento de html)
    if (productosEncarrito.some(producto => producto.id === idBoton)){
        //compara a ver si el elemento ya estaba en el carrito
        const index = productosEncarrito.findIndex(producto => producto.id === idBoton); //obtiene el indice del producto que se agrega al array
        productosEncarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1; //se agrega la cantidad
        productosEncarrito.push(productoAgregado);
    }
    actualizarNumerito();

    //para guardar el array y que no se pierda cuando se vaya a caarrito.html (ya que la pagina se recarga)
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEncarrito));
}

/*PARA CAMBIAR EL NUMERO*/
function actualizarNumerito(){
    let nuevoNumerito = productosEncarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    //va sumando las cantidades de cada producto comenzando desde 0
    numerito.innerText = nuevoNumerito;
}

