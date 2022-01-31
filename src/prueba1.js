const $select = document.querySelector("#miSelect");



const opcionCambiada = () => {
  console.log("Cambio");
};

$select.addEventListener("change", opcionCambiada);

const agregar = () => {
  const option = document.createElement('option');
  const valor = new Date().getTime();
  option.value = valor;
  option.text = valor;
  $select.appendChild(option);
};

const limpiar = () => {
  for (let i = $select.options.length; i >= 0; i--) {
    $select.remove(i);
  }
};

const mostrar = () => {
  const indice = $select.selectedIndex;
  if(indice === -1) return; // Esto es cuando no hay elementos
  const opcionSeleccionada = $select.options[indice];
  alert(`Texto: ${opcionSeleccionada.text}. Valor: ${opcionSeleccionada.value}`);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#btnAgregar").addEventListener("click", agregar);
  document.querySelector("#btnLimpiar").addEventListener("click", limpiar);
  document.querySelector("#btnMostrar").addEventListener("click", mostrar);
});