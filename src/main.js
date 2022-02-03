

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



//--------------

// Lista de países en select
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

  // Lista de diciplinas en select
  const listaDisciplinasArr = dataAthlete.map((atleta) =>
    (atleta.disciplinas));
  const listaDisciplinasFuncion = () => {
    const result = [];
    listaDisciplinasArr.forEach((arr) => {
      arr.forEach((obj) => {
        result.push(obj.disciplina);
      });
    });
    return result;
  };
  const listaDisciplinasRepetidas = listaDisciplinasFuncion();
  const listaDisciplinas = listaDisciplinasRepetidas.filter(
      (elemento, indice, array) =>
        (array.indexOf(elemento) === indice));


/*
// funcionalidad select pais
selectPais.addEventListener('change', (event) => {
  const resultado = filtroData(atletas2016, 'team', event.target.value);
  main.innerHTML = cartaHTML(resultado);
});
*/


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
