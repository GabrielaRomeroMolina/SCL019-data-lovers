

import data from './data/athletes/athletes.js';

//se crea una constante que llama la data de atletas
const dataAthlete = data.athletes

//se hace un ciclo de lectura de data para poder extraer contenido
for (let i=0; i<dataAthlete.length; i++){
  console.log(dataAthlete[i].name);
  console.log(dataAthlete[i].sport);
  console.log(dataAthlete[i].medal);
 
};

//---------------------------------------------visualizacion en pagina de data----------

//creacion de variables para traer info
let info1, info2, info3

info1 = dataAthlete[4].name;
info2 = dataAthlete[4].sport;
info3 = dataAthlete[4].medal;

// se crea una variable donde se unen las anteriores
let infoGeneral = info1+info2+info3;

console.log ("info", infoGeneral);

// con el uso de innerhtml se visualiza la informacion anterior en las casilas
document.getElementById("line1").innerHTML= info1;
document.getElementById("line2").innerHTML= info2;
document.getElementById("line3").innerHTML= info3;





/*let dataAtletas = ["name","gender","height","weight","sport","team","noc","event","medal"]
console.log(dataAtletas[1]);*/


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


