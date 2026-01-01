//querrySelector
const heading = document.querySelector('.header__texto h2') // siempre nos devuelve 0 o 1 elementos
heading.textContent = 'Nuevo Heading';
heading.classList.add('Nueva-clase');
console.log(heading);

//querrySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

//createElement o generar un nuevo enlace
const nuevoEnlace = document.createElement('A') //recomienda usar mayusculas y sin apertura y cierre

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregar el Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos 
console.log(1);
window.addEventListener('load', function () { //load espera a que el JS y los archivos que dependas de HTML estén listos
    console.log(3);
});

window.onload = function () {
    console.log(4);
}

document.addEventListener('DOMContentLoaded', function () { // Solo espera por el HTML, pero no espera  CSS o imagenes 
    console.log(2);
});
console.log(5);

//Seleccionar Elementos y Asociarles un Evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (evento) {
//    console.log(evento);
//    evento.preventDefault(); // Muy útil para formularios
//    console.log('enviando formulario');
// });


//Validar el formulario

// const { nombre, email, mensaje } = datos;

// console.log(nombre);
// console.log(email);
// console.log(mensaje);

//Enviar el formulario

console.log('Enviando Formulario');

//Eventos de los Inputs y Textarea 
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// en vez de repetir tantas lineas de código usamos lo siguiente

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento) {
    //console.log(evento.target.value);
    datos[evento.target.id] = evento.target.value;
    // console.log(datos);
}

//Eventos de submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Valir el formulario
    const { nombre, email, mensaje } = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //corta la ejecución del código
    };

    //Enviar el formulario correctamente
    mostrarAlerta('Mensaje enviado correctamente'); {

    };

    function mostrarAlerta(mensaje, error = null) {
        const alerta = document.createElement('P');
        alerta.textContent = mensaje;

        if (error) {
            alerta.classList.add('error');
        } else {
            alerta.classList.add('correcto');
        }

        formulario.appendChild(alerta);

        //Desaparezca después de 5 segundos 
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }

});
