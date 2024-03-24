(function () {
    var agregarProducto = document.getElementById("addProducto");
    var abrirCarrito = document.getElementById("openCarrito");
    var cancelarCarrito = document.getElementById("cancelCarrito");
    var menuCarrito = document.getElementById("menuProductos");

    // Update button opens a modal dialog
    abrirCarrito.addEventListener("click", function () {
    menuCarrito.showModal();
    });
    // Form cancel button closes the dialog box
    agregarProducto.addEventListener("click", function () {
    menuCarrito.close();
    });
    cancelarCarrito.addEventListener("click", function () {
    menuCarrito.close();
    })
})();