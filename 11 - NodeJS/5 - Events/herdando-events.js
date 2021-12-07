const {inherits} = require('util')
const { EventEmitter } = require('events')

function Pessoa(nome) {
    this.name = nome;
}

inherits(Pessoa, EventEmitter)

const esposa = new Pessoa('Raquel')

esposa.on('casamento', (esposo) => {
    console.log(`${esposo}, é claro que eu, ${esposa.name} quero casar com vc!!`)
})

esposa.emit('casamento', 'Alisson')