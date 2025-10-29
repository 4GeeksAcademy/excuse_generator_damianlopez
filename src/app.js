import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quien = [
  'El perro',
  'Mi abuela',
  'El cartero',
  'Mi pájaro',
  'Un ninja vegano',
  'Mi gemelo malvado',
  'Un alienígena confundido',
  'La llama del vecino',
  'Un viajero del tiempo',
  'Mi amigo imaginario',
  'El repartidor de pizza',
  'Una cabra con jetpack'
];

let accion = [
  'se comió',
  'orinó sobre',
  'aplastó',
  'rompió',
  'teletransportó',
  'hackeó',
  'pintó con témpera',
  'gritó a',
  'convirtió en espaguetis',
  'se casó accidentalmente con',
  'escondió bajo tierra',
  'lanzó al espacio'
];

let que = [
  'mis deberes',
  'mi teléfono',
  'el coche',
  'mi dignidad',
  'el router del Wi-Fi',
  'mis calcetines favoritos',
  'el mando de la tele',
  'mi almuerzo',
  'el retrato familiar',
  'mi solicitud de empleo',
  'el informe final',
  'la presentación de PowerPoint'
];

let cuando = [
  'antes de clase',
  'mientras dormía',
  'mientras hacía ejercicio',
  'durante el almuerzo',
  'mientras rezaba',
  'justo antes del apocalipsis',
  'durante una videollamada',
  'mientras meditaba',
  'en medio de un baile de TikTok',
  'cuando intentaba ser productivo',
  'mientras me duchaba',
  'cuando estaba en el baño'
];

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generarExcusa() {
  return `${getRandom(quien)} ${getRandom(accion)} ${getRandom(que)} ${getRandom(cuando)}.`;
}

window.onload = function () {
  const excuseElement = document.querySelector('#excuse');
  const button = document.querySelector('#generateExcuse');

  function mostrarExcusaConAnimacion() {
    excuseElement.classList.add('fade-out');
    setTimeout(() => {
      excuseElement.innerHTML = generarExcusa();
      excuseElement.classList.remove('fade-out');
      excuseElement.classList.add('fade-in');
    }, 400);
  }

  // Primera excusa al cargar
  mostrarExcusaConAnimacion();

  // Evento del botón
  button.addEventListener('click', () => {
    mostrarExcusaConAnimacion();
  });
};