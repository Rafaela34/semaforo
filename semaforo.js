"use strict"
const semaforo = document.getElementById("semaforo")
let idInterval

function acender () {
    const amarelo = document.getElementById("amarelo")
    const verde = document.getElementById("verde")
    const vermelho = document.getElementById("vermelho")
    const automatico = document.getElementById("automatico")
}
function vermelhoLigado() {
   return semaforo.src.includes("vermelho")
}
function amareloLigado() {
    return semaforo.src.includes("amarelo")
 }
function trocarImagem(){
    if (vermelhoLigado()){
       ligarAmarelo()
    }else if(amareloLigado()){
        ligarVerde()
    }else {
        ligarVermelho()
    }
}
function piscarAuto(){
    idInterval = setInterval (trocarImagem, 1000)
}
function pararPiscar() {
    clearInterval(idInterval)
}

function ligarVermelho(evento) {
    semaforo.src = "img/vermelho.png"
    if (evento) pararPiscar()
}

function ligarAmarelo(evento) {
     semaforo.src = "img/amarelo.png"
     if (evento) pararPiscar()
}
function ligarVerde(evento) {
     semaforo.src = "img/verde.png"
     if (evento) pararPiscar()
}



document.getElementById("vermelho")
.addEventListener("click", ligarVermelho)

document.getElementById("amarelo")
.addEventListener("click", ligarAmarelo)

document.getElementById("verde")
.addEventListener("click", ligarVerde)

document.getElementById("automatico")
.addEventListener("click", piscarAuto)
