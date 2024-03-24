// Importacion de datos
let heroes = [];

//evento de carga
document.addEventListener('DOMContentLoaded', (e) =>{
    loadData().then(() => {
        preLoad(filterHeroes('dc'), dcDiv);
        preLoad(filterHeroes('marvel'), marvelDiv);
        loadButtons();
    });
})
//funcion asincronica para cargar la data
async function loadData(){
    const response = await fetch('js/data.json');
    heroes = await response.json(); //Una promesa que se cumple cuando se devuelve el archivo json
    return heroes
}


// FRONTEND PART
const mainContainer = document.querySelector('main'); // obetenr el codigo principal
const marvelDiv = document.getElementById("marvel-list"); // obtener la parte de marvel
const marvelHeader = document.getElementById("marvel-header");
const dcHeader = document.getElementById("dc-header"); // obetenr la parte de dc
const dcDiv = document.getElementById("dc-list");

const heroFilter = document.getElementById("heroes-filter");
const input = document.getElementById("heroes-filter-name");

const dialog = document.querySelector("dialog");

 // Función para capitalizar la primera letra de una cadena
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}




function filterHeroes(filterSelection){
    const heroesSelected = heroes.filter(hero => hero.category === filterSelection );
    return heroesSelected;
}

// adEventListener de seleccion de categorias



// // Función para cargar los botones de visualización de detalles
function loadButtons() {
    const seeHeroButtons = document.querySelectorAll(".heroe__see");

    seeHeroButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const heroId = e.currentTarget.id;
            const heroSelected = heroes.find(hero => hero.id === parseInt(heroId));
            loadDialog(heroSelected);
        });
    });
}

//Función para cargar el diálogo con los detalles del héroe seleccionado
function loadDialog(hero) {

    dialog.innerHTML = `
        <img class="hero__img__dialog" src="${hero.picture}" alt="${hero.name}">
        <div class="hero__details">
            <div class="name__container">
                <h2 class="hero__name">${hero.name}</h2>
            </div>
            <div class="desc__container">
                <h2 class="hero__text">Description</h2>
                <p>${hero.description}</p>
            </div>
            <div class="year__container">
                <h2 class="superHero__year">Year:</h2>
                <p>${hero.year}</p>
            </div>
            <button id="close-details">Close</button>
        </div>
    `;
    dialog.style.display = 'flex';

    //Event listener para el botón de cerrar
    const closeButton = document.querySelector("#close-details");
    closeButton.addEventListener("click", () => {
        dialog.style.display = 'none';
    });
}
function preLoad( heroesSelected, category){

    if ( category.style.display === 'none') {
        
        category.style.display = "grid";
    }
    console.log(category)
    if (document.querySelector(".found") !== null){
        found = document.querySelector(".found");
        found.remove();
    }
    category.style.display="grid";
    category.innerHTML = '';

    heroesSelected.forEach(hero => {
        category.innerHTML += `
        <div class="heroe ${hero.category}">
            <img class="hero__img" src="${hero.picture}" alt="">
            <h2 class="heroe__name">${hero.name}</h2>
            <button id="${hero.id}" class="heroe__see"><i class="bi bi-eye"></i></button>
        </div>
        `;
    });
    
    loadButtons();
}
function heroeFound(hero){
    console.log("estoy en el heroeFound")

    marvelHeader.style.display = 'none';
    marvelDiv.style.display = 'none';
    dcHeader.style.display = 'none';
    dcDiv.style.display = 'none';
    if (document.querySelector(".found") !== null){
        found = document.querySelector(".found");
        found.remove();
    }

        mainContainer.innerHTML += `
        <div class="heroe found">
            <img class="hero__img found-img" src="${hero.picture}" alt="">
            <h2 class="heroe__name">${hero.name}</h2>
            <button id="${hero.id}" class="heroe__see"><i class="bi bi-eye"></i></button>
        </div>
        `;
    ;
    loadButtons();
}
// FILTRADO POR texto
input.addEventListener('change', (e) =>{
    console.log("filtrado")
    const searchText = capitalizeFirstLetter(e.currentTarget.value);
    const heroSelected = heroes.find(hero => hero.name.includes(searchText));
   heroeFound(heroSelected);
});



// FILTRADO POR SELECCION
heroFilter.addEventListener('change', (e)=>{
    if (input.value !== ''){
        input.value = ''; 
        window.location.reload()
        e.currentTarget.value = 'all';
    };
    console.log("test");
    const filterSelection = e.currentTarget.value;
    switch(filterSelection){
        case 'dc':
            marvelHeader.style.display = 'none';
            marvelDiv.style.display = 'none';
            dcHeader.style.display = 'flex';
            dcDiv.style.display = 'grid';
            preLoad(filterHeroes(filterSelection), dcDiv);
            break;
        case 'marvel':
        
            dcHeader.style.display = 'none';
            dcDiv.style.display = 'none';
            marvelHeader.style.display = 'flex';
            marvelDiv.style.display = 'grid';

            preLoad(filterHeroes(filterSelection), marvelDiv);
            break
        default :
            dcHeader.style.display = 'flex';
            dcDiv.style.display = 'grid';
            preLoad(filterHeroes('dc'), dcDiv);
            marvelHeader.style.display = 'flex';
            marvelDiv.style.display = 'grid';
            preLoad(filterHeroes('marvel'), marvelDiv);
            break


    }
  
});