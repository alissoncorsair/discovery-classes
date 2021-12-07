const singers = ['NGC Daddy', 'MD Chefe', "Bon Jovi", "Borges"]

console.log(singers.length)


for (let singer of singers) {
    console.log(singer)
}

const borges = singers.find(borges => borges === 'Borges')
console.log(borges)