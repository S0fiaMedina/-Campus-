// se define la data - separada en las categorias de las tareas
let pendingTasks = [];
let completedTasks = [];
let failedTasks = [];

let id = 0;

//Obtiene elementos 
const registerForm = document.querySelector("#add-task"); 
const submitTask = document.querySelector("#submitTask");
const pendingDiv = document.querySelector('#pending-tasks');
const failedDiv = document.querySelector('#failed-tasks');
const completedDiv = document.querySelector('#done-tasks');


//verifica que el formulario no este vacio
submitTask.addEventListener('click' , (e)=>{
    e.preventDefault(); //Evita que el navegador se recargue
    const registerForm = document.querySelector("#add-task");
    const inputs =  Array.from(registerForm.children); //Obtiene un array de los inputs
    //Iterar sobre los hijos de register task para comprobar
    const checked = inputs.every(input => input.value !== '');
    checked ? this.newTask(e) : alert("Faltan datos");
})

//Crea nueva tarea
function newTask(e){
    //transformacion a formData
    const infoTask = Object.fromEntries(new FormData(registerForm).entries());
    // se crea un estado : pending y se adjunta el id
    infoTask.state = "pending"; 
    infoTask.id = id;

    id++;
    pendingTasks.push(infoTask);
    renderTasks(pendingTasks, pendingDiv)
}
//renderiza el template
function renderTasks(data, category){
    category.innerHTML= ``;
    data.forEach(element => {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML += `
    <h3 id="description" data-id="">${element.taskDescription}</h3>
    <div class="task__info-main">
        <span class="priority">${element.taskPriority}</span>
        <span class="responsable">@${element.taskResponsible}</span>
    </div>
    <div class="task__info-date">
        <span class="start-date">${new Date(element.initialDate).toLocaleDateString()}</span>
        <span class="end-date">${new Date(element.finishDate).toLocaleDateString()}</span>
    </div>
    <div class="task__info-check ${element.id}">
        <button class="complete-check" data-id="${element.id}">Completed</button>
        <button class="failed-check" data-id="${element.id}">Failed</button>
    </div>
    `
    category.append(task);
     // Selecciona los botones dentro de la tarea actual y agrega event listeners
     task.querySelectorAll('.complete-check').forEach(button => {
        
        button.addEventListener('click', () => handleTask('completed', button.dataset.id, task));
    });

    task.querySelectorAll('.failed-check').forEach(button => {
        button.addEventListener('click', () => handleTask('failed', button.dataset.id, task));
    });
    })
    //selecciona los botones
}
function handleTask(action, taskId,element){
    
    const taskIndex = pendingTasks.findIndex(task => task.id === taskId);
    const task = pendingTasks.find(task => task.id === Number(taskId));



    pendingTasks.splice(taskIndex, 1);
    element.remove();
    registerForm.reset();

    
    if (action !== 'completed'){
        failedTasks.push(task);
        renderTasks(failedTasks, failedDiv);
        failedDiv.querySelectorAll('.task__info-check').forEach(element => element.remove());

    } else {
        completedTasks.push(task);
        renderTasks(completedTasks, completedDiv);
        completedDiv.querySelectorAll('.task__info-check').forEach(element => element.remove());
    }
}