let phrase = "yo no soy daqui yo soy del mexico";

let myArray = phrase.split(" ");



// manipulando arrays

let cars = ["celta", "corolla", "voyage"]

//adicionar um carro no fim

cars.push("mazda");

console.log(cars)


//adicionar no começo

cars.unshift("rx-8")

console.log(cars)


//remover do fim
cars.pop()

console.log(cars)


//remover do começo
cars.shift()

console.log(cars)

// pegar somente um ou mais itens em qq posiçao do array

console.log(cars.slice(1,3))


//remover um ou mais items em qq posiçao do array
cars.splice(1, 1)

console.log(cars)



// encontrar a posiçao

cars.indexOf('mazda')

console.log(cars.indexOf('mazda'))



function Car(carName, model, topSpeed){


    this.nome = carName
    this.modelo = model
    this.topSpeed = topSpeed
}

let celta = new Car("Celta", "2007 1.0", 170)

const resposta = typeof celta.topSpeed == "number" ? celta : "Velocidade incorreta!" 


console.log(resposta);


// try catch e throw p/ erros

try {
    if (celta.topSpeed > 170) {
        throw 'Não é um celta, é uma máquina!'
    }
}
catch (e) {
    console.error(e);
}



// for

for (let i = 0 ; i > 0; i--){
    if (i===5) {
        //vai acabar o loop aqui e ignorar o console.log ali embaixo
        continue;
    }

    console.log(i);
}


// for of 

let voyage = new Car("Voyage", "2015 1.6", 200)

let carros = [celta, voyage];

for(carro of carros){
    console.log(carro);
}

















