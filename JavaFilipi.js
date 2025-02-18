<script>
function buscarProductos() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let productos = document.getElementsByClassName("producto");

    for (let i = 0; i < productos.length; i++) {
        let nombre = productos[i].querySelector(".nombre-producto").innerText.toLowerCase();
        if (nombre.includes(input)) {
            productos[i].style.display = "block"; // Muestra el producto si coincide
        } else {
            productos[i].style.display = "none"; // Oculta el producto si no coincide
        }
    }
}
</script>
