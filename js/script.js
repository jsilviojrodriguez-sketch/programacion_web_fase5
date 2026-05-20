const boton = document.getElementById("botonMenu");

const menu = document.getElementById("menu");

boton.addEventListener("click", function () {

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";
    }

});

const mensaje = document.getElementById("mensaje");

const hora = new Date().getHours();

if (hora < 12) {

    mensaje.innerHTML = " Buenos días, bienvenido al Boxeo Mexicano";

}
else if (hora < 18) {

    mensaje.innerHTML = " Buenas tardes, disfruta la historia del Boxeo Mexicano";

}
else {

    mensaje.innerHTML = " Buenas noches, conoce la cultura del Boxeo Mexicano";
}


