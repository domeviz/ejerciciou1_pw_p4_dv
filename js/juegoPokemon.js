var intentos = 0;
var puntaje = 0;
var respuestaCorrecta = 4;

function verificarRespuesta(respuesta) {
    intentos++;

    if (respuesta === respuestaCorrecta) {
        mostrarMensaje("Felicitaciones, has seleccionado la opción correcta. Tu puntaje es: " + calcularPuntaje());
        cambiarImagen();
    } else {
        if (intentos === 3) {
            mostrarMensaje("Se acabaron los intentos.");
            reiniciarJuego();
        } else {
            mostrarMensaje("Pokemon incorrecto, intentalo de nuevo.");
        }
    }
    actualizarInformacion();
}

function mostrarMensaje(mensaje) {
    var mensajeElement = document.getElementById("mensaje");
    mensajeElement.textContent = mensaje;
    mensajeElement.style.display = "block";
}

function ocultarMensaje() {
    var mensajeElement = document.getElementById("mensaje");
    mensajeElement.style.display = "none";
}

function calcularPuntaje() {
    var diferencia = 3 - intentos;
    if (diferencia >= 0) {
        return 5 - diferencia * 2;
    } else {
        return 1;
    }
}

function cambiarImagen(){
    var imagenElement = document.getElementById("imagen");
    imagenElement.src = "../img/pcolor.jpg";
}
function reiniciarJuego() {
    intentos = 0;
    puntaje = 0;
    respuestaCorrecta = 4;
    actualizarInformacion();
}

function actualizarInformacion() {
    document.getElementById("intentos").textContent = intentos;
    document.getElementById("puntaje").textContent = puntaje;
    ocultarMensaje();
}
