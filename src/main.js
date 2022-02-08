


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

/*window.onload = () => {
  agregarElementos(dataAthlete)
}*/

    let lista=document.getElementById("root");
    dataAthlete.forEach(function(item){

    let divCard= document.createElement("div");    
        divCard.classList.add("card");

    let divContent=document.createElement("div");
        divContent.classList.add("content");

    let divFront= document.createElement("div");
        divFront.classList.add("front");
    let contentFront= document.createElement("p");
    let contenidoFront = document.createTextNode(item.name);
    
    let divBack= document.createElement("div")
        divBack.classList.add("back");
    let contentBack= document.createElement("p");
    let contenidoBack = document.createTextNode(`Pais : ${item.team} Edad : ${item.age} Estatura : ${item.height} Peso : ${item.weight} Deporte : ${item.sport} `);
    
        lista.appendChild(divCard);
        divCard.appendChild(divContent);
        
        divContent.appendChild(divFront);
        divFront.appendChild(contentFront);
        contentFront.appendChild(contenidoFront);

        divContent.appendChild(divBack);
        divBack.appendChild(contentBack);
        contentBack.appendChild(contenidoBack);
    })
    


//--------------lista desplegable select-----------------

// Lista de países en select desplegable

//constante que se va a usar para realizar el filtrado, hace recorrido de data atletas y trae el nombre de pais
const listaPaisesRepetidos = dataAthlete.map((paises) => paises.team);

//constante que se va a usar en la seleccion de pais ,  hace filtrado de paises por key, posicion y array, donde tomara el indice de cada key dentro del array (solo de pais por la variable anterior)sin repetirse
const listaPaises = listaPaisesRepetidos.filter((elemento, indice, array) =>
  array.indexOf(elemento) === indice);

//creacion de lista que se va a agregar en el DIV PAISES de html
const selectPais = document.querySelector('#paises');
(() => {
  //ordena la lista de paises de la variable anterior de manera alfabetica
  const paisesOrdenados = listaPaises.sort();
  paisesOrdenados.forEach((pais) => {

   // al ordenar  con el codigo anterior se veran reflejados con la etiqueta option en HTML
    const opcion = document.createElement('option');
    opcion.textContent = pais;
    opcion.setAttribute('value', pais);

    //para visualizar se crea un hijo con la etiqueta opcion que ira dentro de select
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



// Lista de generos en select desplegable

const listaGenerosRepetidos = dataAthlete.map((generos) => generos.gender);
const listaGeneros = listaGenerosRepetidos.filter((elemento, indice, array) =>
  array.indexOf(elemento) === indice);
const selectGenero = document.querySelector('#generos');
(() => {
  const generosOrdenados = listaGeneros.sort();
  generosOrdenados.forEach((genero) => {
    const opcion = document.createElement('option');
    opcion.textContent = genero;
    opcion.setAttribute('value', genero);
    selectGenero.appendChild(opcion);
  });
})();

// Lista de medallas en select desplegable
const listaMedallasRepetidas = dataAthlete.map((medallas) => medallas.medal);
const listaMedallas = listaMedallasRepetidas.filter((elemento, indice, array) =>
  array.indexOf(elemento) === indice);
const selectMedalla = document.querySelector('#medallas');
(() => {
  const medallasOrdenadas = listaMedallas.sort();
  medallasOrdenadas.forEach((medalla) => {
    const opcion = document.createElement('option');
    opcion.textContent = medalla;
    opcion.setAttribute('value', medalla);
    selectMedalla.appendChild(opcion);
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

