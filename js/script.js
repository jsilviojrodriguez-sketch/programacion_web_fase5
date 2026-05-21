document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("botonMenu");
    const menu = document.getElementById("menu");
    const modo = document.getElementById("modoOscuro");

    // ===== MENÚ HAMBURGUESA =====
    boton.addEventListener("click", () => {
        menu.classList.toggle("activo");
        boton.classList.toggle("activo");
    });

    // CERRAR MENÚ AL HACER CLICK EN UN LINK
    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("activo");
            boton.classList.remove("activo");
        });
    });

    // ===== MODO OSCURO =====
    modo.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    // ===== MENSAJE POR HORA (TU CÓDIGO MEJORADO) =====
    const mensaje = document.getElementById("mensaje");
    const hora = new Date().getHours();

    if (hora < 12) {
        mensaje.innerHTML = "Buenos días, bienvenido al Boxeo Mexicano";
    } else if (hora < 18) {
        mensaje.innerHTML = "Buenas tardes, disfruta la historia del Boxeo Mexicano";
    } else {
        mensaje.innerHTML = "Buenas noches, conoce la cultura del Boxeo Mexicano";
    }

    // ===== SLIDER =====
    const imagenes = [
        "images/Boxeo.jpg",
        "images/Boxeo2.jpg",
        "images/Boxeo3.jpg"
    ];

    let indice = 0;
    const slider = document.getElementById("slider");

    setInterval(() => {
        indice = (indice + 1) % imagenes.length;
        slider.src = imagenes[indice];
    }, 3000);

});