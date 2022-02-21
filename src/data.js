// estas funciones son de ejemplo

//funcion para filtrar por pais desde nacionalidad
export const filtroPaises = (data, valor) =>{
  const tomarPais = data.filter(atleta =>(atleta.team===valor));
  return tomarPais;
};


//funcion para filtrar por deporte
export const filtroDeportes = (data, valor) =>{
  const tomarDeporte = data.filter(atleta =>(atleta.sport===valor));
  return tomarDeporte;
};


//funcion para filtrar por medallas
export const filtroMedallas = (data, valor) =>{
  const tomarMedalla = data.filter(atleta =>(atleta.medal===valor));
  return tomarMedalla;
};


//funcion para filtrar por genero
export const filtroGenero = (data, valor) =>{
  const tomarGenero = data.filter(atleta =>(atleta.gender===valor));
  return tomarGenero;
};


//funcion para ordenar alfabeticamente en base al nombre del atleta
export const sortAZ = (order) => {
  const ordenarAZ = order.sort((a, b) => ((a.name.toUpperCase() > b.name.toUpperCase()) 
  ? 1 : -1)); 
  return ordenarAZ;
};

export const sortZA = (order) => {
  const ordenarZA = order.sort((a, b) => ((a.name.toUpperCase() < b.name.toUpperCase())
   ? 1 : -1));
  return ordenarZA;
};


