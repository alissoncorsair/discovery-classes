const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('Evento', (nome) => {
    console.log("Oi, amigue " + nome);
})

ev.emit('Evento', "Alisson")
ev.emit('Evento', "Raquel")
