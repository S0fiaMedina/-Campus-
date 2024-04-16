export class TaskDo extends HTMLElement{
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = /* html */`
        <div class="card">
            <div class="card-header">
                Crear Tarea
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `;
  }
  
}     
customElements.define("task-do", TaskDo);