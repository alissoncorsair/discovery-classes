class Parafuso {
    constructor() {
        if (this.constructor === Parafuso)
        throw new Error('Classe abstrata não pode ser instanciada')
    }
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() {super()}

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'philips'
    }
}


// let parafuso = new Parafuso
let fenda = new Fenda
let philips = new Philips

// console.log(parafuso.tipo)
console.log(fenda.tipo)
console.log(philips.tipo)
