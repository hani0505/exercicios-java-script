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





function verificarAprovacao() {
    var notaProva = parseFloat(document.getElementById("notaProva").value);
    var notaTrabalho = parseFloat(document.getElementById("notaTrabalho").value);
    var numeroFaltas = parseInt(document.getElementById("numeroFaltas").value);

    var notaFinal = (notaProva + notaTrabalho) / 2;

    var resultadoAprovacao;
    if (notaProva >= 7 && notaTrabalho >= 6 && numeroFaltas <= 10) {
        resultadoAprovacao = "Aluno Aprovado!";

        
    } else {
        resultadoAprovacao = "Aluno Reprovado!"
    }

    document.getElementById("resultado").textContent = resultadoAprovacao;
}

function verificarModeloHonda() {
    var modelo = document.getElementById("modeloInput").value.toLowerCase();
    switch (modelo) {
        case "civic":
        case "city":
        case "motos hondas":
            alert("esse é um modelo Honda")
            
            break;
    
        default:
            alert("não encontramos esse modelo, digite novamente!")
            break;
    }
}


function calcularPotencia() {
    var numeroBase = parseFloat(document.getElementById("numeroBase").value);
    var expoente = parseInt(document.getElementById("expoente").value);

    var resultado = Math.pow(numeroBase, expoente);

    var resultadoElemento = document.getElementById("resultadoEx");
    resultadoElemento.textContent = "Resultado: " + resultado;
}








