import {getProducts} from '../../../Apis/product/productApi.js';
import {postProducts} from '../../../Apis/product/productApi.js';
export class RegProduct extends HTMLElement{
    constructor() {
      super();
      this.render(); //llama a render
      this.saveData(); //llama a savedata
    }
    render() {

      this.innerHTML = /* html */`
        <div class="card mt-3">
            <div class="card-header">
                Registro de productos
            </div>
            <div class="card-body">
            <form id="frmDataProduct">
                <div class="row">
                    <div class="col-3">
                        <label for="id" class="form-label">Id. Producto</label>
                        <input type="text" class="form-control" id="id" name="id" aria-describedby="emailHelp">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="nombreProduct" class="form-label">Nombre Producto</label>
                        <input type="text" class="form-control" id="nombreProduct" name ="nombreProduct">
                    </div>
                    <div class="col">
                        <label for="price" class="form-label">Valor Unit</label>
                        <input type="number" class="form-control" id="price" name="price">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                    <div class="container mt-4 text-center">
                        <a href="#" class="btn btn-primary"  id="btnNuevo">Nuevo cliente</a>
                        <a href="#" class="btn btn-danger" id="btnCancelar">Cancelar registro</a>
                        <a href="#" class="btn btn-success" id="btnGuardar">Guardar cliente</a>
                        <a href="#" class="btn btn-warning" id="btnEditar">Editar cliente</a>
                        <a href="#" class="btn btn-danger" id="btnEliminar">Eliminar cliente</a>
                    </div>
                    </div>
                </div> 
            </form>
            </div>
        </div>
      `;
  }
  saveData = () =>{
    const frmRegistro = document.querySelector('#frmDataProduct');
    //EVENTO
    document.querySelector('#btnGuardar').addEventListener("click", (e) =>{
        const datos = Object.fromEntries(new FormData(frmRegistro).entries()); //toma la data form
        postProducts(datos); //llama a la funcion de la api
        e.stopImmediatePropagation(); //evita el comportameinto predeterminado para los eventos
        e.preventDefault();
    })
}  
}     
customElements.define("reg-product", RegProduct);