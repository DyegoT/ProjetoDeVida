const patoDancante = document.getElementById('dancingDuck');

function nootNooted(novoSrc) {
    patoDancante.src = novoSrc;
}

patoDancante.addEventListener('mouseover', function(){
    nootNooted('./assets/nootNoot.webp');
});