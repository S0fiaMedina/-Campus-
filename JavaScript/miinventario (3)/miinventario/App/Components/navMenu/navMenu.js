export class NavMenu extends HTMLElement{ //se crea el componente
    constructor() {
      super(); //adquiere las propiedades del html
      this.render(); //llama al metodo de renderizacion visual
    }
    render() {
      // se crean los estilos y se llama a una hoja de estilos
      this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./App/Components/navMenu/menuStyle.css";
        </style>
        <nav class="navbar navbar-expand-lg bg-body-tertiary mt-3">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="#" data-verocultar='["p"]' aria-current="page" >Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-verocultar='["ps"]'>Parametros del sistema</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-verocultar='["v"]'>Ventas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-verocultar='["c"]'>Compras</a>
                </li>
                </ul>
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
      `;
      this.querySelectorAll(".nav-link").forEach((val, id) => { //itera sobre los objetos .navlink
        val.addEventListener("click", (e)=>{ //cuando se les hace click...
            let data = JSON.parse(e.target.dataset.verocultar); //transforma la data a un obj de js
            let mainContent = document.querySelector('#mainContent'); //llama al elemento dentro de <main>
            mainContent.innerHTML= ""; //se resetea el contenedor
            switch (data[0]){
              case 'p': //si el primer elemento es p
                mainContent.innerHTML="<product-component></product-component>"; //se muestra web component de esta etiqueta
                break;
              case 'v':
                  mainContent.innerHTML="<task-list-ok></task-list-ok>"; //si no, se muestra este otro componente 
                  break;
            }
            e.stopImmediatePropagation(); // Evita que otros elementos o funciones asociadas con el mismo evento se activen.
            e.preventDefault(); //previene el comportamiento predeterminado de un evento.
        })
    });
  }
  
}     
customElements.define("nav-menu", NavMenu); //conecta el componente al dom
