//querySelector
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading';


//querySelectorAll
//  const enlaces = document.querySelectorAll('.navegacion a');
  // for (let i=0;i<enlaces.length;++i){
    // enlaces[i].style.color='red' ;  //modificar estilo de los elementos seleccionados con querySelectorAll()
  // }
  // enlaces[0].textContent = 'Nuevo Texto para enlace';
  // //Crear un elemento nuevo y agregarlo al DOM
  // var newElement =document.createElement('p')   //'P' es el tag del parrafo, no se puede cambiar
  // newElement.classList.add("parrafo");          //agregamos una clase llamada "parrafo"
  // newElement.innerHTML="Este es mi primer párrafo";    //creamos contenido html dentro del nodo que creamos
  // document.body.appendChild(newElement)           //se añade como hijo del body

//   const nuevoEnlace = Document.createElement('a');

//   nuevoEnlace.href = 'nuevo-enlace.html';

//  nuevoEnlace.textContent = 'Un Nuevo Enlace';

//  nuevoEnlace.classList.add('navegacion__enlace');

//   const navegacion = document.querySelector('.navegacion');

//   navegacion.appendChild(nuevoEnlace);

//  console.log(nuevoEnlace);

// console.log(1);

//  window.addEventListener('load', function(){
//    console.log(3);
//  })
//  console.log(2);

//  console.log(5);

// window.onscroll = function(){
//    console.log('Scrolling...');
//     }

const datos = {
  nombre: '',
  email: '',
  mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

 const botonEnviar = document.querySelector('.boton--primario');
 botonEnviar.addEventListener('click', function(evento){
   console.log(evento);
  //  evento.preventDefault();
   // alert ('Has pulsado el Botón Enviar ¿Deseas Continuar?');
   // console.log('Enviando Formulario...');
 });

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(evento){
  // console.log(`Nombre: ${this.nombre.value}`);
  evento.preventDefault();

  const {nombre, email, mensaje} = datos;

  if(nombre === ''|| email === ''|| mensaje === ''){
    mostrarError('Todos los campos son obligatorios');
    
    return;
  } 

  console.log(nombre);
  console.log(email);
  console.log(mensaje);

  
  console.log('Enviando formulario...');
  mostrarMensaje('Mensaje enviado Correctamente')
});

// console.log(`Nombre: ${nombre}`);



function leerTexto(e){
  // console.log(`${nombre.value}, ${email.value}, ${mensaje.value}`);
  // console.log('Escribiendo...');
  // console.log(datos);
  datos[e.target.id] = e.target.value;
  console.log(e);
};

function mostrarMensaje(mensaje){
  const correcto = document.createElement('P');
  correcto.classList.add("correcto");
  correcto.textContent = mensaje;
  formulario.appendChild(correcto);

  setTimeout(() => {
    correcto.remove();
  }, 3000);
}

function mostrarError(mensaje){
  const error = document.createElement('P');
  error.classList.add("error");
  error.textContent = mensaje
  error.innerText = mensaje ;
  console.error("Hubo un error");
  formulario.appendChild( error );

  setTimeout(() => {
    error.remove();
  }, 3000);

}