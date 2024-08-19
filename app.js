// Validar texto para que solo contenga letras minúsculas
function validarTexto(texto) {
  
  // Permitir solo letras minúsculas y espacios
  const regex = /^[a-z\s]+$/;
  return regex.test(texto);
}

// Filtrar la entrada del usuario para aceptar solo letras minúsculas y espacios
function filtrarEntrada(event) {
  const key = event.key;
  if (!/[a-z\s]/.test(key)) {

    // Evitar la entrada de caracteres no permitidos
    event.preventDefault(); 
  }
}

  
  // Mostrar texto encriptado/desencriptado y manejar visibilidad
  function mostrarTextoEncriptado(texto) {
    const rectanguloTexto = document.getElementById('rectangulo_texto');
    const mensaje = document.getElementById('mensaje');
    const botonCopiar = document.querySelector('.boton__copiar');
    
    if (texto.trim() !== '' && validarTexto(texto)) {
    muñeco.style.visibility = 'hidden';
    rectanguloTexto.style.visibility = 'hidden';
    
    // Mostrar el textarea y el botón de copiar
    mensaje.style.visibility = 'visible';
    botonCopiar.style.visibility = 'visible';
    
    // Colocar el texto en el textarea
    mensaje.value = texto;
    } else {
      mensaje.style.visibility = 'hidden';
      botonCopiar.style.visibility = 'hidden';

      muñeco.style.visibility ='visible';
      rectanguloTexto.style.visibility = 'visible';

      
    }
  }
  

// Encriptar texto
function encriptarTexto() {
    const texto = document.getElementById('encriptador__texto').value;
    const textoEncriptado = texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    
    mostrarTextoEncriptado(textoEncriptado);
  }
  
  // Desencriptar texto
  function desencriptarTexto() {
    const texto = document.getElementById('encriptador__texto').value;
    const textoDesencriptado = texto
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
    
    mostrarTextoEncriptado(textoDesencriptado);
  }
  

  // Copiar al portapapeles
  function copiarPortapapeles() {
    const mensaje = document.getElementById('mensaje');
    mensaje.select();
    document.execCommand('copy');
    
    // Mensaje de confirmación opcional
    alert('Texto copiado al portapapeles!');
  }
  

  // Esta función se ejecuta cuando la página se carga
window.onload = function() {
    // Selecciona el textarea por su ID
    var textarea = document.getElementById('encriptador__texto');
    // Elimina los espacios en blanco al principio y al final del contenido
    textarea.value = textarea.value.trim();
}