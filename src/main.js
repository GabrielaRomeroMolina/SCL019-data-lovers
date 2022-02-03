

import data from './data/athletes/athletes.js';

//se crea una constante que llama la data de atletas
const dataAthlete = data.athletes

//se hace un ciclo de lectura de data para poder extraer contenido
/*for (let i=0; i<dataAthlete.length; i++){
  console.log(dataAthlete[i].name);
  console.log(dataAthlete[i].sport);
  console.log(dataAthlete[i].medal);
 
};

//---------------------------------------------visualizacion en pagina de data----------



  function agregarElementos(){ 
    let lista=document.getElementById("athlete2"); 
    dataAthlete.forEach(function(item,index){
    
    let linew= document.createElement("button");    
    
    let contenido = document.createTextNode(item.name);
    
        lista.appendChild(linew);
        linew.appendChild(contenido);
    })
    }
    agregarElementos();



//FUNCIONAMIENTO DE MODAL DE BANNER
const names = dataAthlete.map(item=>item.name);
console.log(names);


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
