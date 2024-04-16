import './App/Components/product/regProduct.js';
import './App/Components/product/lstProduct.js';
export class ProductComponent extends HTMLElement{
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./App/Components/product/productStyle.css";
        </style>
        <div class="container">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active mnuproducto" aria-current="page" data-verocultar='["#regProduct",["#lstProduct"]]' href="#">Crear Producto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mnuproducto" data-verocultar='["#lstProduct",["#regProduct"]]' href="#">Listar Producto</a>
            </li>
          </ul>        
        </div>
        <div class="container" id="regProduct" style="display:block;">
          <reg-product></reg-product>
        </div>
        <div class="container" id="lstProduct" style="display:none;">
          <lst-product></lst-product>
        </div>
      `;
      this.querySelectorAll(".mnuproducto").forEach((val, id) => {
        val.addEventListener("click", (e)=>{
            let data = JSON.parse(e.target.dataset.verocultar);
            let cardVer = document.querySelector(data[0]);
            cardVer.style.display = 'block';
            data[1].forEach(card => {
                let cardActual = document.querySelector(card);
                cardActual.style.display = 'none';
            });
            e.stopImmediatePropagation();
            e.preventDefault();
        })
    });
  }
  
}     
customElements.define("product-component", ProductComponent);