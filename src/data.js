// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//funcion para filtrar por pais desde nacionalidad
export const filtroPaises = (data, valor) =>{
  const tomarPais = data.filter(atleta =>(atleta.team===valor));
  return tomarPais;
};


//funcion para filtrar por pais desde nacionalidad
export const filtroDeportes = (data, valor) =>{
  const tomarDeporte = data.filter(atleta =>(atleta.sport===valor));
  return tomarDeporte;
};


//funcion para filtrar por pais desde nacionalidad
export const filtroMedallas = (data, valor) =>{
  const tomarMedalla = data.filter(atleta =>(atleta.medal===valor));
  return tomarMedalla;
};

