/* 
    Carne - 400 gr por pessoa + de 6  horas - 650
    Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
    Refrigerante/agua - 1000ml por pessoa + de 6 horas - 1500ml

    crianças valem por 0,5
*/

let adultosInput = document.getElementById('adultos')
let criancasInput = document.getElementById('criancas')
let duracaoInput = document.getElementById('duracao')
let carneResult = document.getElementById('carneResultado')
let cervejaResult = document.getElementById('cervejaResultado')
let refriResult = document.getElementById('refriResultado')


function carnePP(duracao){
    if(duracao >=6) {return 650}
    else{return 400}
}

function cervejaPP(duracao){
    if(duracao >=6) {return 2000}
    else{return 1200}
}

function refriPP(duracao){
    if(duracao >=6) {return 1500}
    else {return 1000}
    }


function calcular(){
    let adultos = adultosInput.value
    let criancas = criancasInput.value
    let duracao = duracaoInput.value

let quantidadeCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
let quantidadeCerveja = cervejaPP(duracao) * adultos
let quantidadeRefri = refriPP(duracao) * adultos + (refriPP(duracao)/2 * criancas)

carneResult.innerHTML = `<p>${quantidadeCarne/1000} kg de Carne</p>`
cervejaResult.innerHTML = `<p>${Math.ceil(quantidadeCerveja/350)} latinhas de cerveja</p>`
refriResult.innerHTML = `<p>${Math.ceil(quantidadeRefri/2000)} garrafas de 2L de refrigerante</p>`
}



function mudarCSS(){
    document.getElementsByClassName('invisibleDiv')[0].style.display = 'block'
    
}
