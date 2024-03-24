(function () {
    var addVideoGame = document.getElementById("obtenerJuego");
    var abrirInfoProducto = document.getElementsByClassName("abrirInfoProducto");
    var salidaInfoProducto = document.getElementById("cancelProducto");
    var menuInfoProducto = document.getElementById("infoDelProducto");

    // Update button opens a modal dialog
    for (var i = 0; i < abrirInfoProducto.length; i++) {
        abrirInfoProducto[i].addEventListener("click", function () {
            menuInfoProducto.showModal();
        });
    }
    // Form cancel button closes the dialog box
    addVideoGame.addEventListener("click", function () {
    menuInfoProducto.close();
    });
    salidaInfoProducto.addEventListener("click", function () {
    menuInfoProducto.close();
    })
})();