function visibilidadElemento(id, visible) {
    let elemento = document.getElementById(id);
    elemento.style.visibility = visible ? 'visible' : 'hidden';
}


function encriptarTexto() {
    let texto = document.getElementById('encriptador__texto').value;
    let mensajeEncriptado = document.getElementById('mensaje');

    let textoTemporal = texto
    .replace(/a/gi, "#a#")
    .replace(/e/gi, "#e#")
    .replace(/i/gi, "#i#")
    .replace(/o/gi, "#o#")
    .replace(/u/gi, "#u#");

    let textoCifrado = textoTemporal
    .replace(/#a#/gi, "ai")
    .replace(/#e#/gi, "enter")
    .replace(/#i#/gi, "imes")
    .replace(/#o#/gi, "ober")
    .replace(/#u#/gi, "ufat");

    if(texto.length !== 0) {
        mensajeEncriptado.value = textoCifrado;
        visibilidadElemento("rectangulo__mensaje", true);
        visibilidadElemento("mensaje__encriptado", false);

    } else {
        visibilidadElemento("rectangulo__mensaje", false);
        visibilidadElemento("mensaje__encriptado", true);
    }
}

function desencriptarTexto() {
    let texto = document.getElementById('encriptador__texto').value;
    let mensajeEncriptado = document.getElementById('mensaje');


    let textoTemporal = texto 
    .replace(/ai/gi, "#a#")
    .replace(/enter/gi, "#e#")
    .replace(/imes/gi, "#i#")
    .replace(/ober/gi, "#o#")
    .replace(/ufat/gi, "#u#");

    let textoDescifrado = textoTemporal
    .replace(/#a#/gi, "a")
    .replace(/#e#/gi, "e")
    .replace(/#i#/gi, "i")
    .replace(/#o#/gi, "o")
    .replace(/#u#/gi, "u");

    if (texto.length != 0) {
        mensajeEncriptado.value = textoDescifrado;
        visibilidadElemento("rectangulo__mensaje", true);
        visibilidadElemento("mensaje__encriptado", false);
    }
}

function copiarPortapapeles() {
    let textoaCopiar = document.getElementById('mensaje');
    textoaCopiar.select();
    textoaCopiar.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(textoaCopiar.value).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}