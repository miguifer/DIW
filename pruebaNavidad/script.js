// El archivo js...
// Así os ahorro el gran trabajo y sudor que supone crearlo y así Miguel está obligado a no integrarlo en el HTML

function elem_visibles(){
    let reno = document.querySelector('.renos');
    let hoho = document.querySelector('.hohoho');
    let destellos = document.querySelector('.destellos');

    reno.classList.toggle('volar');
    hoho.classList.toggle('visible');
    destellos.classList.toggle('visible2');

}