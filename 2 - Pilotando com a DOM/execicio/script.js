const botao = document.querySelector('button')
const janela = document.querySelector('.janela')


botao.addEventListener('click', abrirJanela )

document.addEventListener('keydown', fechaJanela)
// janela.classList.toggle('invisible')


function abrirJanela() {
    janela.classList.toggle('invisible')
}

function fechaJanela(event) {
    var tecla = event.key
    if (tecla == "Escape"){
    janela.classList.add('invisible')
}
}