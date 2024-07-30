// main.js

// Función para encriptar texto
function encriptarTexto(texto) {
    const llaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    

    return texto.replace(/[eioua]/g, match => llaves[match]);
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    const llaves = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    

    return texto.replace(/enter|imes|ai|ober|ufat/g, match => llaves[match]);
}

// Función para copiar texto al portapapeles
function copiarTexto(texto) {
    const textoTemporal = document.createElement('textarea');
    textoTemporal.value = texto;
    document.body.appendChild(textoTemporal);
    textoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(textoTemporal);
}

// Función para validar el texto ingresado y convertir a minúsculas
function validarTexto(event) {
    const textarea = event.target;
    let texto = textarea.value;
    texto = texto.toLowerCase().replace(/[^a-z\s]/g, '');
    textarea.value = texto;
}

// Eventos para los botones
document.querySelector('.boton__encriptar').addEventListener('click', () => {
    const textoIngresado = document.querySelector('.entrada__texto').value;
    const textoEncriptado = encriptarTexto(textoIngresado.toLowerCase());
    mostrarTexto(textoEncriptado);
});

document.querySelector('.boton__desencriptar').addEventListener('click', () => {
    const textoIngresado = document.querySelector('.entrada__texto').value;
    const textoDesencriptado = desencriptarTexto(textoIngresado.toLowerCase());
    mostrarTexto(textoDesencriptado);
});

document.querySelector('.boton__copiar').addEventListener('click', () => {
    const textoACopiar = document.querySelector('.mensaje__instruccion').textContent;
    copiarTexto(textoACopiar);
});

// Evento de entrada para el textarea
document.querySelector('.entrada__texto').addEventListener('input', validarTexto);

// Función para mostrar el texto encriptado o desencriptado en la sección derecha
function mostrarTexto(texto) {
    const mensajeInstruccion = document.querySelector('.mensaje__instruccion');
    const botonCopiar = document.querySelector('.boton__copiar');
    const imagenMuñeco = document.querySelector('.imagen__muñeco');
    const mensajeVacio = document.querySelector('.mensaje__vacío');
    const contenedorDerecha = document.querySelector('.derecha');

    mensajeInstruccion.textContent = texto;
    botonCopiar.classList.remove('oculto');
    imagenMuñeco.style.display = 'none';
    mensajeVacio.style.display = 'none';
    contenedorDerecha.classList.add('derecha--texto-mostrado');
}

// Función para manejar la animación de los botones
function agregarAnimacionBotones() {
    document.querySelectorAll('.boton__desencriptar, .boton__copiar').forEach(button => {
        button.addEventListener('mousedown', function () {
            this.classList.add('boton--presionado_gris');
        });

        button.addEventListener('mouseup', function () {
            this.classList.remove('boton--presionado_gris');
        });

        button.addEventListener('mouseleave', function () {
            this.classList.remove('boton--presionado_gris');
        });
    });

    document.querySelectorAll('.boton__encriptar').forEach(button => {
        button.addEventListener('mousedown', function () {
            this.classList.add('boton--presionado_azul');
        });

        button.addEventListener('mouseup', function () {
            this.classList.remove('boton--presionado_azul');
        });

        button.addEventListener('mouseleave', function () {
            this.classList.remove('boton--presionado_azul');
        });
    });
}

// Llamar a la función para agregar la animación a los botones
agregarAnimacionBotones();
