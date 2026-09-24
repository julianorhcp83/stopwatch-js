const display = document.getElementById('display');

let intervalo;
let tempoAcumulado = 0;
let tempoInicio = 0;
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
        tempoInicio = Date.now();
        intervalo = setInterval(() => {
            let tempoAtual = tempoAcumulado + (Date.now() - tempoInicio);
            display.innerText = formatarTempo(tempoAtual);
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
