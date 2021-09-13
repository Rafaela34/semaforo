"use strict"
const lampada = document.getElementById("lampada")
let idInterval

function ligaDesliga (estadoLiga, estadoDesliga) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = estadoLiga
    desligar.disabled = estadoDesliga
}
function lampadaInteira() {
    return !lampada.src.includes("quebrada")
}
function ligarLampada(evento) {
    if (lampadaInteira()){
        lampada.src = "img/ligada.jpg"
        ligaDesliga(true, false)
    }
    if (evento) pararPiscar()
}
function desligarLampada(evento) {
    if (lampadaInteira()) {
        lampada.src = "img/desligada.jpg"
       ligaDesliga(false, true)
    }
    if (evento) pararPiscar()
}
function quebrarLampada() { 
    lampada.src = "img/quebrada.jpg"
    ligaDesliga(true, true)
}

function lampadaDesligada() {
    return lampada.src.includes("desligada")
}
function trocarImagem(){
    if (lampadaDesligada()){
        ligarLampada()
    }else{
        desligarLampada()
    }
}

function pararPiscar() {
    clearInterval(idInterval)
}

function piscarLampada(){
    pararPiscar()
    idInterval = setInterval (trocarImagem, 1000)
}
//eventos
document.getElementById("ligar")
.addEventListener("click", ligarLampada)

document.getElementById("desligar")
.addEventListener("click", desligarLampada)


document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
document.getElementById("lampada").addEventListener("mouseout", desligarLampada)
document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)
document.getElementById("piscar").addEventListener("click",piscarLampada)
 