import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';



//FUNCIONAMIENTO DE MODAL DE BANNER

    // traer el modal 
let modal = document.getElementById("modalBanner");

// accionar boton de modal
let btn = document.getElementById("botonModal");

// llamar la etiqueta span donde esta la X para cerrar
let span = document.getElementsByClassName("cerrarModal")[0];

// al hacer click el boton se abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// se cierra al dar click en X 
span.onclick = function() {
  modal.style.display = "none";
}


