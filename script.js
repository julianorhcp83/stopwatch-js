const display = document.getElementById('display');
const btnIniciar = document.getElementById('btn-iniciar');
const btnParar = document.getElementById('btn-parar');
const btnReiniciar = document.getElementById('btn-reiniciar');

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
    if(rodando){
        rodando = false;
        clearInterval(intervalo);
        tempoAcumulado+= (Date.now() - tempoInicio);

        btnIniciar.innerText = "Retomar";
    }
}

function reiniciarCronometro(){
    rodando = false;
    clearInterval(intervalo);
    tempoAcumulado = 0;
    
    display.innerText = "00:00:00";
    btnIniciar.innerText = "Iniciar";

}  

btnIniciar.addEventListener('click', iniciarCronometro);
