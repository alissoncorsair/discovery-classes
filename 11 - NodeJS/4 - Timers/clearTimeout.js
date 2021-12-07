const timeOut = 2000
const finished = () => console.log("done")

let timer = setTimeout(finished, timeOut)

clearTimeout(timer)
