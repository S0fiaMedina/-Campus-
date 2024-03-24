const newMemberAddBtn = document.querySelector('.addMemberBtn');

/*obtencion de elementos del formulario*/
const darkBg = document.querySelector('.dark_bg');
const popupForm = document.querySelector('.popup'); // Corrected selector
const crossBtn = document.querySelector('.closeBtn'); // Corrected selector
const submitBtn = document.querySelector('.submitBtn');
const modalTitle = document.querySelector('.modalTitle');
const popupFooter = document.querySelector('.popupFooter');
const imgInput = document.querySelector('.img');
const form = document.querySelector('form');
const uploadimg = document.querySelector('#uploadimg');

/*obtencion de los datos del formulario*/
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let age = document.getElementById('age');
let city = document.getElementById('city');
let position = document.getElementById('position');
let salary = document.getElementById('salary');
let sDate = document.getElementById('sDate');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

/*OBTENCION DE DATOS PARA MOSTRAR BOTONES*/
const entries = document.querySelector('.entries');
const paginationBtns = document.querySelectorAll('pagination button');

/* OBTENCION DE DATOS DE LA TABLA*/
let tabSize = document.getElementById('table-size');



/*--- VARIABLES GLOBALES ---*/

//recupera el valor bajo la clave 'userProfile
//JSON.parse convierte objetos json a objetos javascript para ser manejados
// de lo contrario, se hace una lista vacia
let originalData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []; 
let getData = [...originalData] //desestructuracion del json
let isEdit = false; 
let editId;
//conifguracion inicial de como se muestra la informacion
let arrayLength = 0;
let tableSize = 10;
let startIndex = 1;
let endIndex = 0;
let currentIndex = 1;
let maxIndex = 0;

showInfo();

/*--- AGREGAR MIEMBRO  //  ABRIR EL POPUP---*/
newMemberAddBtn.addEventListener('click', ()=> {

    submitBtn.innerText = "Submit";
    modalTitle.innerText = "Fill the Form"
    popupFooter.style.display = 'block';
    imgInput.src = "img/pic1.png"; // cambia el src de la imagen
    /*al agregar active, se muestra el formulrio*/
    darkBg.classList.add('active');
    popupForm.classList.add('active');
})

/* --- CERRAR EL POOPUP ---*/
crossBtn.addEventListener('click', ()=>{
    darkBg.classList.remove('active');
    popupForm.classList.remove('active');
    form.reset(); // Este atributo permite resetear el formulario cuando se vuelve a abrir el popup
})

/*--- LEER EL ARCHIVO DE LA IMAGEN ---*/
uploadimg.onchange = function(){ //onchange es el evento de cambiar el valor de entrada en un input
    if (uploadimg.files[0].size < 1000000){ //si el tamaño del primer archivo recibido por el input  es menor a 1mb
        let fileReader = new FileReader();

        fileReader.onload = function(e){ //cuando se active el evento de que se ha leido exitosamente el archivo
            let imgUrl = e.target.result; //accede al resultado de el evento
            imgInput.src = imgUrl; //la imagen ahora adquiere la ruta del arhivo que se ha subido
        }
        fileReader.readAsDataURL(uploadimg.files[0]); //leer el contenido de un archivo como una URL de datos. 
    } else{
        alert("This file is too large")
    }

} 
//calcula cuanto se puede mostrar
function preloadCalculations(){
    array = getData; // toma la data
    arrayLength = array.length; // toma la longitud de la data
    maxIndex = arrayLength / tableSize; // se divide la longitud por el tamaño de la tabla

    if ( (arrayLength % tableSize) > 0){ //si sobra...
        maxIndex++; //se incrementa la cantidad maxima de cosas por mostrar
    }
}

/*--- AÑADE BOTONES ---*/
function displayIndexBtn(){
    preloadCalculations();
    const pagination = document.querySelector('.pagination');

    pagination.innerHTML = "";

    pagination.innerHTML = `<button onclick="prev()" class="prev">Previous</button>`;

    for (let i=1; i <= maxIndex; i++){ //muestra la cantidad posible de botones en relacion a la cantidad de datos
        pagination.innerHTML  += `<button onclick="paginationBtn(${i})" index="${i}">${i}</button>` //agrega los botones

    }
    pagination.innerHTML += `<button onclick="next()" class="next">Next</button>`
    highlightIndexBtn();
}

/*MUESTRA EL NUMERO DE CORREOS QUE ESTAN EN PANTALLA ACTUALMENTE*/
function highlightIndexBtn(){
    startIndex = ((currentIndex -1)* tableSize) +1; //comienzo de la siguiente seccion de mostrar correos
    endIndex = (startIndex + tableSize) -1;

    if ( endIndex > arrayLength){ // si el indice maximo se pasa de  la longitud de la lista...
        endIndex = arrayLength;
    }

    if ( maxIndex >= 2){
        let nextBtn = document.querySelector('.next');
        nextBtn.classList.add('act');
    }

    entries.textContent = `Showing ${startIndex} to ${endIndex} of ${arrayLength} entries`;

    paginationBtns.forEach(btn =>{
        btn.classList.remove('active');

        //muestra el boton que contiene la seccion de informacion que se muestra actualmente
        if (btn.getAttribute('index') === currentIndex.toString()){
            btn.classList.add('active');
        }
    })

    showInfo();

}

function showInfo(){
    document.querySelectorAll(".employeeDetails").forEach(info =>{ info.remove()})
    let tab_start = startIndex -1;
    let tab_end = endIndex;

    //revisa q la data sea mayor q cero
    if ( getData > 0){
        for (let i = tab_start; i < tab_end; i++){
            let staff = getData[i];

            if (staff){
                //crea la informacion de los empleados en la tabbla
                let createElement = 
                `
                <tr class="employeeDetails">
                    <td>${i+1}</td>
                    <td> <img src="${staff.picture}" alt="" width="40" height="40"></td>
                    <td>${staff.fName} ${staff.lName}</td>
                    <td>${staff.ageVal}</td>
                    <td>${staff.cityVal}</td>
                    <td>${staff.positionVal}</td>
                    <td>${staff.salaryVal}</td>
                    <td>${staff.sDateVal}</td>
                    <td>${staff.emailVal}</td>
                    <td>${staff.phoneVal}</td>

                    <td>
                        <button><i onclick="readInfo('${staff.picture}', '${staff.fName}', '${staff.lName}', '${staff.ageVal}', '${staff.cityVal}', '${staff.positionVal}', '${staff.salaryVal}', '${staff.sDateVal}', '${staff.emailVal}', '${staff.phoneVal}')" class="fa-regular fa-eye"></i></button>
                        <button><i onclick="" class="fa-regular fa-pen-to-square"></i></button>
                        <button><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
                `
            }
        }
    }
}

/*-- CARGAR LA INFORMACION (YA SEA AGREGAR O EDITAR) ---*/
form.addEventListener('submit', (e)=>{
    e.preventDefault() //indicando al navegador que no ejecute la acción predeterminada asociada con el evento.
    const information = {
        id: Date.now(),
        picture: imgInput.src == undefined ? "../img/pic1.png" : imgInput.src, //valida que el url de la imagen no sea undefined
        fName : fName.value,
        lName : lName.value,
        ageVal : age.value,
        cityVal : city.value,
        positionVal : position.value,
        salaryVal : salary.value,
        sDateVal : sDate.value,
        emailVal : emailVal.value,
        phoneVal : phone.value
    };

    if (!isEdit){
        originalData.unshift(information); //agregar informacion
    } else{
        originalData[editId] = information; //editar la informacion
    }
    getData =[...originalData];
    localStorage.setItem('userProfile', JSON.stringify(originalData)); //se almacena ee la memoria local bajo la clave userProfile

    submitBtn.innerText = "Submit";
    modalTitle.innerText = "Fill the form";

    darkBg.classList.remove('active');
    popupForm.classList.remove('active');
    form.reset();

    highlightIndexBtn();
    displayIndexBtn();
    showInfo();

    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');

    if (Math.floor(maxIndex) > currentIndex){
        nextBtn.classList.add('act');
    } else{
        nextBtn.classList.remove('act');
    }

    if (currentIndex > 1){
        prevBtn.classList.remove('act');
    }
})

/*MOSTRAR BOTON DE NEXT*/
function next(){
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');

    if ( currentIndex <= maxIndex -1){
        currentIndex++;
        prevBtn .classList.add("act");

        highlightIndexBtn();
    }

    //si el currentIndex es igual o mayor al index maximo, el boton de siguiente desparece
    if ( currentIndex > maxIndex-1){
        nextBtn.classList.remove("act");
    }

    
}

//MOSTRAR BOTON  DE PREV
function prev(){
    let prevBtn = document.querySelector('.prev');
    if ( currentIndex > 1){
        currentIndex--;
        prevBtn.classList.add('act');
        highlightIndexBtn();
    }

    if ( currentIndex <2 ){
        prevBtn.classList.remove('act');
    }
}


//calcula que botones mostrar y ocultar
function paginationBtn(i){
    currentIndex = i;

    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    highlightIndexBtn();
    
    if ( currentIndex > maxIndex -1){
        nextBtn.classList.remove('act');
    } else{
        nextBtn.add('act');
    }

    if ( currentIndex > 1){
        prevBtn.classList.add('act');
    }

    if ( currentIndex <2){
        prevBtn.classList.remove('act');
    }
}

/* CAMBIA EL TAMAÑO DE LA TABLA DE ACUERDO A CUANTAS ENTRADAS EL USUAARIO DESEE QUE SE MUESTRE */
tabSize.addEventListener('change', ()=>{
    let selectedValue = parseInt(tabSize.value);
    tabSize = selectedValue;
    currentIndex = 1;
    startIndex = 1;
    displayIndexBtn();
})
displayIndexBtn();