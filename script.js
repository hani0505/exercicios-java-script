window.alert('bem vindo qual seu nome?')
let nome = prompt('escreva seu nome')
alert(`prazer, ${nome} , aqui é um site total interarivo`)


function teste() {
    let num = Number(window.prompt('qual seu número?'))
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÌMPAR</strong>'
    }
    let res = document.querySelector("section#result")
    res.innerHTML =  `<p>O resultado vai aparecer aqui...</p>`
    res.innerHTML += `<p> O resultado de ${num} é ${tipo}  </p>`
}



let contador = 0
let res = document.querySelector('section#resultt')

function conta() {
    contador ++
    res.innerHTML = `<p>O contador é ${contador}.</p>`
}
function zerar() {
    contador = 0
    res.innerHTML = null
}


function idade() {
    let dado = Number(window.prompt('digite o ano que você nasceu'))
    let res = 2023 - dado
    alert(`você tem ${res} anos`)
}


