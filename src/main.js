

import data from './data/athletes/athletes.js';

//se crea una constante que llama la data de atletas
const dataAthlete = data.athletes

//se hace un ciclo de lectura de data para poder extraer contenido
for (let i=0; i<dataAthlete.length; i++){
  console.log(dataAthlete[i].name);
  console.log(dataAthlete[i].sport);
  console.log(dataAthlete[i].medal);
 
};

//------------------------------visualizacion en pagina de data-------------------

window.onload = () => {
  agregarElementos(dataAthlete)
}

    let lista=document.getElementById("root");
    dataAthlete.forEach(function(item){

    let divCard= document.createElement("div");    
        divCard.classList.add("card");
    let divContent=document.createElement("div");
        divContent.classList.add("content");
    let divFront= document.createElement("div");
        divFront.classList.add("front");
    let contentFront= document.createElement("p");
    let contenido = document.createTextNode(item.name);
    
    let divBack= document.createElement("div")
        divBack.classList.add("back");
    let contenidoBack = document.createTextNode("reverso");
    
        lista.appendChild(divCard);
        divCard.appendChild(divContent);
        divContent.appendChild(divFront);
        divFront.appendChild(contentFront);
        contentFront.appendChild(contenido);
        divBack.appendChild(contenidoBack);
        divContent.appendChild(divBack);
    })
    


//--------------lista desplegable select-----------------

// Lista de países en select desplegable
const listaPaisesRepetidos = dataAthlete.map((paises) => paises.team);
const listaPaises = listaPaisesRepetidos.filter((elemento, indice, array) =>
  array.indexOf(elemento) === indice);
const selectPais = document.querySelector('#paises');
(() => {
  const paisesOrdenados = listaPaises.sort();
  paisesOrdenados.forEach((pais) => {
    const opcion = document.createElement('option');
    opcion.textContent = pais;
    opcion.setAttribute('value', pais);
    selectPais.appendChild(opcion);
  });
})();


// Lista de deportes en select desplegable
const listaDeportesRepetidos = dataAthlete.map((deportes) => deportes.sport);
const listaDeportes = listaDeportesRepetidos.filter((elemento, indice, array) =>
  array.indexOf(elemento) === indice);
const selectDeporte = document.querySelector('#deporte');
(() => {
  const deportesOrdenados = listaDeportes.sort();
  deportesOrdenados.forEach((deporte) => {
    const opcion = document.createElement('option');
    opcion.textContent = deporte;
    opcion.setAttribute('value', deporte);
    selectDeporte.appendChild(opcion);
  });
})();


//--------------- FUNCIONAMIENTO DE MODAL DE BANNER---------------
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

