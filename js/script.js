const boton = document.getElementById("botonMenu");
const menu = document.getElementById("menu");

// MENÚ
boton.addEventListener("click", function () {

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

    }

});

// MENSAJE
const mensaje = document.getElementById("mensaje");

if (mensaje) {

    const hora = new Date().getHours();

    if (hora < 12) {

        mensaje.innerHTML = "Buenos días, bienvenido al Boxeo Mexicano";

    }
    else if (hora < 18) {

        mensaje.innerHTML = "Buenas tardes, disfruta la historia del Boxeo Mexicano";

    }
    else {

        mensaje.innerHTML = "Buenas noches, conoce la cultura del Boxeo Mexicano";

    }

}

// SLIDER SOLO EN INDEX
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {

    const slider = document.getElementById("slider");

    const imagenes = [

        "images/Boxeo.jpg",
        "images/Boxeo2.jpg",
        "images/Boxeo3.jpg"

    ];

    let indice = 0;

    setInterval(() => {

        indice++;

        if (indice >= imagenes.length) {

            indice = 0;

        }

        slider.src = imagenes[indice];

    }, 3000);

}