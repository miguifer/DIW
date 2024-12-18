let copos = document.querySelector(".copos");

function nevar() {
  copos.classList.add("nevar");
  setTimeout(eliminarNevar, 10000, copos);
}

function eliminarNevar() {
  copos.classList.remove("nevar");
}
