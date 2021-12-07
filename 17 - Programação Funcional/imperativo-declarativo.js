//imperativo: faça da seguinte forma

//stateful = guarda estados, valores...

let number = 2

function squareF(number) {
    return number*number
}

console.log(squareF(2))



//declarativo: "o que fazer" e não "como fazer".

//stateless = não guarda estados, valores... a resposta não irá variar.

const square = n => n*n

console.log(square(2))