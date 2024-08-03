//Importo los objetos con los que voy trabajar.
import {
  eliptico,
  caminador,
  dorsal,
  poni,
  prensa,
  cintura,
  brazos,
} from "./maquinas.js";

//Almaceno los objetos en un arreglo.
const maquinas = [eliptico, caminador, dorsal, poni, prensa, cintura, brazos];

//Traigo los elementos del DOM donde mostraré la información de los objetos importados.
let machImag = document.getElementById("imago");
let machName = document.getElementById("namo");
let machUse = document.getElementById("uso");
let machMus = document.getElementById("muso");

/*Traigo los botones del carrusel y los pongo a la escucha del evento click. 
La función activada aumenta o disminuye el valor de la variable clickos, que es pasada como parámetro
y me permite acceder a los objetos del arreglo, desplegando su información en el DOM.*/
let clickos = 0;
document.getElementById("nextBut").addEventListener("click", function () {
  clickos++;
  if (clickos > maquinas.length - 1) {
    clickos = 0;
  }
  machImag.setAttribute("src", maquinas[clickos].imag);
  machName.innerHTML = maquinas[clickos].nombre;
  machUse.innerHTML = maquinas[clickos].uso;
  machMus.innerHTML = "Músculos que utilizas:" + maquinas[clickos].musculos;
});

document.getElementById("prevBut").addEventListener("click", function () {
  clickos--;
  if (clickos < 0) {
    clickos = maquinas.length - 1;
  }
  machImag.setAttribute("src", maquinas[clickos].imag);
  machName.innerHTML = maquinas[clickos].nombre;
  machUse.innerHTML = maquinas[clickos].uso;
  machMus.innerHTML = "Músculos que utilizas:" + maquinas[clickos].musculos;
});
