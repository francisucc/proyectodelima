function validar() {
    var usuario = document.getElementById("usuario").value; 
    var clave = document.getElementById("clave").value;

    if (usuario === "Francis" && clave === "clave123") {
        window.location.href = "./index2.html";
    } else {
        alert("Usuario y/o clave incorrecto(s)");
    }
}

function limpiar() {
    document.getElementById("usuario").value = ""; 
    document.getElementById("clave").value = "";
}
function precio() {
    var v1 = parseInt(document.getElementById("Origen").value);
    var v2 = parseInt(document.getElementById("Destino").value);

    if (v1 === 1 && v2 === 1) {
        document.getElementById("resultado").textContent = "El precio es 1000 Dólares";
    } else if (v1 === 1 && v2 === 2) {
        document.getElementById("resultado").textContent = "El precio es 900 Dólares";
    } else if (v1 === 1 && v2 === 3) {
        document.getElementById("resultado").textContent = "El precio es 800 Dólares";
    } else if (v1 === 2 && v2 === 1) {
        document.getElementById("resultado").textContent = "El precio es 800 Dólares";
    } else if (v1 === 2 && v2 === 2) {
        document.getElementById("resultado").textContent = "El precio es 200 Dólares";
    } else if (v1 === 2 && v2 === 3) {
        document.getElementById("resultado").textContent = "El precio es 100 Dólares";
    } else if (v1 === 3 && v2 === 1) {
        document.getElementById("resultado").textContent = "El precio es 500 Dólares";
    } else if (v1 === 3 && v2 === 2) {
        document.getElementById("resultado").textContent = "El precio es 1000 Dólares";
    } else if (v1 === 3 && v2 === 3) {
        document.getElementById("resultado").textContent = "El precio es 1000 Dólares";
    } else {
        document.getElementById("resultado").textContent = "Combinación no válida";
    }
}

function limpiarResultado() {
    document.getElementById("resultado").textContent = "";
}















   