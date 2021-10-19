let kamen = document.querySelector("#kamen")
let nuzky = document.querySelector("#nuzky")
let papir = document.querySelector("#papir")
let obrazky = document.querySelector("#obrazky")
let vysledek = document.querySelector("#vysledek")
let obrazekHrac = document.querySelector("#obrazekHrac")
let obrazekPc = document.querySelector("#obrazekPc")
let randomNum
let idPcObrazek
let idHracObrazek

kamen.addEventListener("click", function(){
    obrazekHrac.src = "kamen.png"
    idHracObrazek = "kamen"
    pcTurn()
    if(randomNum == 0){
        vysledek.textContent = "remíza"
    }else if(randomNum == 1){
        vysledek.textContent = "výhra"
    }else{
        vysledek.textContent = "prohra"
    }
})

nuzky.addEventListener("click", function(){
    obrazekHrac.src = "nuzky.png"
    idHracObrazek = "nuzky"
    pcTurn()
    if(randomNum == 0){
        vysledek.textContent = "prohra"
    }else if(randomNum == 1){
        vysledek.textContent = "remíza"
    }else{
        vysledek.textContent = "výhra"
    }
})
papir.addEventListener("click", function(){
    obrazekHrac.src = "papir.png"
    idHracObrazek = "papir"
    pcTurn()
    if(randomNum == 0){
        vysledek.textContent = "výhra"
    }else if(randomNum == 1){
        vysledek.textContent = "prohra"
    }else{
        vysledek.textContent = "remíza"
    }
})

function pcTurn(){
    randomNum = Math.floor(Math.random()* 3) 
    if(randomNum == 0){
        obrazekPc.src = "kamen.png"
    }else if(randomNum == 1){
        obrazekPc.src = "nuzky.png"
    }else{
        obrazekPc.src = "papir.png"
    }
}

