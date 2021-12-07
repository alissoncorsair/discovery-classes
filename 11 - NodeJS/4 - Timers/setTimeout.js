const timeOut = 3000
const finished = () => console.log("done")
const log = () => console.log("Número")


setTimeout(finished, timeOut)
setTimeout(log, 1000)
setTimeout(log, 2000)
setTimeout(log, 3000)
// setTimeout(console.log("Dois", 2000))
// setTimeout(console.log("Três", 3000))