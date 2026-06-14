const display = document.getElementById('display');

let intervalo;
let tempo = 0;
let rodando = false;

function formatarTempo(tempoMs){
    let min = Math.floor(tempoMs / 60000);
    let sec = Math.floor((tempoMs % 60000) / 1000);
    let ms = Math.floor((tempoMs % 1000) / 10);

    min = min.toString().padStart(2, '0');
    sec = sec.toString().padStart(2, '0');
    ms = ms.toString().padStart(2, '0');

    return `${min}:${sec}:${ms}`;
}

function iniciarCronometro(){
    if(!rodando){
        rodando = true;
        intervalo = setInterval(() => {
            tempo += 10;
            display.innerText = formatarTempo(tempo);
        }, 10);
    }
}

function pararCronometro(){
    rodando = false;
    clearInterval(intervalo);

    document.getElementById('btn-iniciar').innerText = "Retomar";
}

function reiniciarCronometro(){
    rodando = false;
    clearInterval(intervalo);
    tempo = 0;
    document.getElementById('display').innerText = "00:00:00";
    document.getElementById('btn-iniciar').innerText = "Iniciar";

}   