const objetos = ["baston", "bolaNavidad"];

let aciertos = 0;
let errores = 0;

function iniciarJuego(botIniciar) {
  let telon = document.querySelector(".telon");
  telon.classList.add("telonIdo");

  if ((botIniciar.textContent = "Iniciar Juego")) {
    botIniciar.textContent = "Reinciar Juego";
  }
}

let objeto = document.querySelector(".objeto");
objeto.textContent = objetos[0];

function fotoClick(foto) {
  let objeto = document.querySelector(".objeto");

  if (objeto.textContent == "baston" && foto.name == 'baston') {
    baston.classList.add("seleccionado");
    objeto.textContent = objetos[1];
  } else if (objeto.textContent == "bolaNavidad" && foto.name == 'bolaNavidad') {
    bolaNavidad.classList.add("seleccionado");
  }
}
