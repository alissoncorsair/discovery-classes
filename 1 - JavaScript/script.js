function Car(carName, model, topSpeed) {


    this.nome = carName
    this.modelo = model
    this.topSpeed = topSpeed
}

let celta = new Car("Celta", "2007 1.0", 171)

let voyage = new Car("Voyage", "2015 1.6", 200)

let carros = [celta, voyage];

//percorrer os arrays
for(carro of carros){
    console.log(carro);
}

//percorrer o número de arrays
for (let carro in voyage) {
    console.log(carro);
    console.log(voyage[carro]);
}

