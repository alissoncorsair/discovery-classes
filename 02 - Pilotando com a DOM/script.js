// const letrinhas = document.querySelector('h1');


// letrinhas.style = "text-align: center; color: blue; color: rosybrown;"


// letrinhas.innerHTML += "<p>amo mesmo, serio!</p>"

const div = document.createElement('div')
div.innerText = "amo mesmo, serio!!!"


const body = document.querySelector('body')
const script = document.querySelector('body script')

body.insertBefore(div, script)