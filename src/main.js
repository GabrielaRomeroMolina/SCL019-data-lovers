

import {filtroDeportes, filtroGenero, filtroMedallas, filtroPaises, sortAZ, sortZA} from './data.js';
import data from './data/athletes/athletes.js';


//se crea una constante que llama la data de atletas
const dataAthlete = data.athletes
let filterData = dataAthlete   //Se crea una copia para uso vario y no interfiera con la original



//------------------------------VISUALIZACION DE DATA POR ATLETA EN LA PAGINA -------------------


window.onload = () => {
  agregarElementos(dataAthlete)       /*Esta funcion sera usada para representar la imagen */
}                                     /* de cada tarjeta de los atletas que se visualiza en el HTML*/


function agregarElementos(dataAthlete){
    let lista=document.getElementById('root');       
     lista.innerHTML=''
    dataAthlete.forEach(function(item){


    let divCard= document.createElement('div');    
    divCard.classList.add('card');

    let divContent=document.createElement('div');
        divContent.classList.add('content');

    let divFront= document.createElement('div');
        divFront.classList.add('front');
    
    let imgFront=document.createElement('img')
        imgFront.setAttribute('src',asignarAvatar(item)) /*Aqui se incluye la funcion de asignar avatar de genero*/
        imgFront.setAttribute('id', 'iconoAtleta')
    let contentFront= document.createElement('h1');
    let contenidoFront = document.createTextNode(item.name);
    
    let divBack= document.createElement('div')
        divBack.classList.add('back');
    let contentBack= document.createElement('p');
    let contenidoBack = document.createTextNode(`Pais : ${item.team} Edad : ${item.age} Estatura : ${item.height} Peso : ${item.weight} Deporte : ${item.sport} Evento : ${item.event} Medalla : ${item.medal} `);
    
        lista.appendChild(divCard);
        divCard.appendChild(divContent);
        
        divContent.appendChild(divFront);
        divFront.appendChild(imgFront);
        divFront.appendChild(contentFront);
        contentFront.appendChild(contenidoFront);
        

        divContent.appendChild(divBack);
        divBack.appendChild(contentBack);
        contentBack.appendChild(contenidoBack);
    })
  }


 

//--------------------------- BARRAS DESPLEGABLES SELECT----------------------------

// 1. Lista de países en select desplegable ------------- (EXPLICACIÓN PASO A PASO)

//constante que se va a usar para realizar el filtrado, hace recorrido de data atletas y trae el nombre de pais
const listaPaisesRepetidos = filterData.map((paises) => paises.team);

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
}
)();

 //filtro segun país e imprimir en HTML

 selectPais.addEventListener('change',()=>{
     let selecccionPais = selectPais.options[selectPais.selectedIndex].value;
     let paisFiltrado = filtroPaises(filterData,selecccionPais)
     filterData=paisFiltrado
     agregarElementos(paisFiltrado)
     alertaAviso(paisFiltrado);
 })


// 2. Lista de deportes en select desplegable

const listaDeportesRepetidos = filterData.map((deportes) => deportes.sport);
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

selectDeporte.addEventListener('change',()=>{
  let selecccionDeporte = selectDeporte.options[selectDeporte.selectedIndex].value;
  let filtradoDeporte = filtroDeportes(filterData,selecccionDeporte)
  filterData=filtradoDeporte
  agregarElementos(filtradoDeporte)
  alertaAviso(filtradoDeporte);
})


// 3.Lista de medallas en select desplegable
const listaMedallasRepetidas = filterData.map((medallas) => medallas.medal);
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


selectMedalla.addEventListener('change',()=>{
  let selecccionMedalla = selectMedalla.options[selectMedalla.selectedIndex].value;
  let filtradoMedallas = filtroMedallas(filterData,selecccionMedalla)
  filterData=filtradoMedallas
  agregarElementos(filtradoMedallas)
  alertaAviso(filtradoMedallas);
})

  
// 4.Lista de genero en select desplegable

const listaGenerosRepetidos = filterData.map((generos) => generos.gender);
const listaGeneros = listaGenerosRepetidos.filter((elemento, indice, array) =>
  array.indexOf(elemento) === indice);
const selectGenero = document.querySelector('#genero');
(() => {
  const generosOrdenados = listaGeneros.sort();
  generosOrdenados.forEach((genero) => {
    const opcion = document.createElement('option');
    opcion.textContent = genero;
    opcion.setAttribute('value', genero);
    selectGenero.appendChild(opcion);
  });
})();

selectGenero.addEventListener('change',()=>{
  let selecccionGenero = selectGenero.options[selectGenero.selectedIndex].value;
  let filtradoGenero = filtroGenero(filterData,selecccionGenero)
  filterData=filtradoGenero
  agregarElementos(filtradoGenero)
  alertaAviso(filtradoGenero)

})


//5. Lista para ordenar alfabeticamente de A-Z / Z-A      ---- (EXPLICACIÓN PASO A PASO)

//llamar selector DIV de HTML
const selectSort = document.querySelector('#sort'); 
// al hacer cambio de seleccion se lleva  a cabo la siguiente condicion 
selectSort.addEventListener('change', (event) => { 
    
 //se crea constante que va a traer el value  del select de HTML
    const seleccionOrden = event.target.value;   

     // si la opcion seleccionada es A-Z 
    if (seleccionOrden === 'A-Z') {  
      //se crea constante que indicará que se ordenara de A-Z la data de atletas usando el filtrado sortAZ  que se llama de DATA.JS           
      const ordenFiltrado = sortAZ(filterData); 
      //y eso se aplicará a las tarjetas con info de atletas (la funcion que tiene los DIV .card)  
      agregarElementos(ordenFiltrado);
    }
    // se hace el mismo proceso de A-Z para la opcion Z-A
    if (seleccionOrden === 'Z-A') {
      const ordenFiltrado = sortZA(filterData);
      agregarElementos(ordenFiltrado);
      
    }
});

/*----------------- AGREGAR AVATAR A TARJETAS DE ATLETAS -------------------------------------------------------*/


//---- (EXPLICACIÓN PASO A PASO)
//se crea una funcion que recibe la data de atleta como parametro 
function asignarAvatar(atleta) {
  //si el genero es M este ingresara el avatar de hombre
  if (atleta.gender=="M") {
    return 'imagen/avatarMasculino.png'

  // de lo contrario ingrsará el avatar de una mujer  
  } else {
    return 'imagen/avatarFemenino.png'
  }          
}
//luego se ingresa la funcion asignarAvatar(atleta) a el elemento creado mas arriba (al principio linea 43) 
//en la funcion agregarElementos para incorporar la imagen con un append.child



//Aparicion de alerta al no haber concidencia entre los select
  function alertaAviso (atleta){
  
  if (atleta.length == 0 ){
    let resetSelect = document.getElementsByTagName('select');

    resetSelect[0].selectedIndex = 0;


    filterData = dataAthlete
    alert("no hay coincidencia")


        
  }
  
} 

/*for (let i = 0 ; i < resetSelect.length; i = 0; i) {

}
let=i
for (let i= 0; index < array.length; index++) {
  const element = array[index];
  
}*/


//--------------- FUNCIONAMIENTO DE MODAL DE BANNER------------------- (EXPLICACIÓN PASO A PASO)

    // traer el modal 
let modal = document.getElementById('modalBanner');

// accionar boton de modal
let btn = document.getElementById('botonModal');

// llamar la etiqueta span donde esta la X para cerrar
let span = document.getElementsByClassName('cerrarModal')[0];

// al hacer click el boton se abre el modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// se cierra al dar click en X 
span.onclick = function() {
  modal.style.display = 'none';
}

