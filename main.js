// 01 Seleccion de los Elemntos del DOM
const button = document.querySelector('#crear');
const contenedor = document.querySelector('#contenedor');
const titulo = document.querySelector('#titulo');

console.log(button);
console.log(titulo);

// 02 Funcion 
button.addEventListener('click', function () {
  // paso 1
  const parrafo = document.createElement('p');
  // paso 2
  parrafo.textContent = 'Soy un parrafo';
  // paso 3
  contenedor.appendChild(parrafo);

  titulo.style.color = 'blue';
  titulo.style.fontSize = '50px';
})

// Modificar estilos de un Elemnto
// document.addEventListener('DOMContentLoaded', function () {
//   titulo.style.color = 'blue';
//   titulo.style.fontSize = '50px';
// })







// const formatPizzaName = (nombre)=>{
//   const accents = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
//   return (nombre.split("").map((letra)=> accents[letra] || letra).join(''));
// }