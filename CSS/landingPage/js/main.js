 
//animacion inicial 
 AOS.init({
     offset:1
 });

 //menu responsive
 let nav = document.querySelector('nav');
 document.querySelectorAll('.search, .exit').forEach(function (element) {
    element.addEventListener('click', function () {
        console.log('Clic en el botón');
        nav.classList.toggle('active');
    });
});

