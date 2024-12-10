const objetos = ["baston", "bolaNavidad"];

function iniciarJuego(botIniciar) {
  let telon = document.querySelector(".telon");
  telon.classList.add("telonIdo");

  if ((botIniciar.textContent = "Iniciar Juego")) {
    botIniciar.textContent = "Reinciar Juego";
  }
}

let aciertos = 0;
let errores = 0;

function baston(baston) {

    baston.classList.add('seleccionado');

}
