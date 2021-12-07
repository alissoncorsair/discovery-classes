// const random = (number, Math) =>
//     Math.floor(Math.random() * number)

// console.log(random(22, Math))

// n pode usar loop c/ for etc

// deve retornar algo e nao pode afetar nada do mundo externo

const factorial = x => {

    if(x===0){
        return 1
    }

    return x * factorial(x-1)
}

console.log(factorial(3))