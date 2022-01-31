

import data from './data/athletes/athletes.js';

const dataAthlete = data.athletes

for (let i = 0; i<dataAthlete.length; i++){
  console.log(dataAthlete[i].name);
  console.log(dataAthlete[i].medal);
};




infoAthlete = document.getElementById("athlete1");
console.log(infoAthlete.innerHTML);



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


