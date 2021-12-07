const questions = [
    "O que aprendi hoje?",
    "O que me deixou bolado? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]
let answers = []

const ask = (index = 0) => process.stdout.write(questions[index] + '\n')


ask()
let i = 1;
process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
Perguntas e suas respostas
    
    ${questions[0]}
    R:${answers[0]}

    ${questions[1]}
    R:${answers[1]}

    ${questions[2]}
    R:${answers[2]}

    ${questions[3]}
    R:${answers[3]}
    
    
    `)
})