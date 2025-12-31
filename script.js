function iniciarMagia() {
    const portal = document.getElementById('portal');
    const clarao = document.getElementById('clarão-luxo');
    const textoExp = document.getElementById('explosao-texto');
    const stage = document.getElementById('main-stage');
    const final = document.getElementById('etapa-final');
    const btnSom = document.getElementById('controle-som');

    document.getElementById('som-clique').play();
    portal.classList.add('aberto');

    setTimeout(() => { document.getElementById('som-porta').play(); }, 500);

    setTimeout(() => {
        clarao.classList.add('ativo');
        textoExp.classList.add('ativo');
        
        var end = Date.now() + (4 * 1000);
        var colors = ['#ffffff', '#fcf6ba', '#bf953f'];
        (function frame() {
          confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0, y: 0.6 }, colors: colors });
          confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors: colors });
          if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }, 6000);

    setTimeout(() => {
        clarao.classList.remove('ativo');
        textoExp.classList.remove('ativo');
        stage.style.opacity = '0';
        setTimeout(() => { stage.style.display = 'none'; }, 2000); 
    }, 9500);

    setTimeout(() => {
        final.style.display = 'flex'; 
        setTimeout(() => { 
            final.classList.add('visivel');
            iniciarCarrossel();
        }, 50);
        
        btnSom.style.display = 'flex';
        const musica = document.getElementById('musica-festa');
        musica.play();
        musica.volume = 0.7;
    }, 10500);
}

function iniciarCarrossel() {
    const fotos = document.querySelectorAll('.foto-carrossel');
    let index = 0;
    if (fotos.length <= 1) return;
    setInterval(() => {
        fotos[index].classList.remove('active');
        index = (index + 1) % fotos.length;
        fotos[index].classList.add('active');
    }, 4000);
}

function alternarSom() {
    const musica = document.getElementById('musica-festa');
    const btnSom = document.getElementById('controle-som');
    if (musica.paused) {
        musica.play();
        btnSom.innerHTML = "🔊";
    } else {
        musica.pause();
        btnSom.innerHTML = "🔇";
    }
}