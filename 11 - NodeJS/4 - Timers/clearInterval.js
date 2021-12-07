const timeOut = 1000
let i = 1;
const checking = () => {
    console.log('checking! ' + i )
    i++;
}

const intervalo = setInterval(checking, timeOut);

setTimeout(() => clearInterval(intervalo), 4000)