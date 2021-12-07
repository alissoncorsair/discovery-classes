const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res){
    const items = [
        {
            title: "S",
            content: "omething"
        },
        {
            title: "o",
            content: "h my god"
        },
        {
            title: "m",
            content: "y boy"
        },
        {
            title: "e",
            content: "veryday"
        },
        {
            title: "t",
            content: "ime is money"
        },
        {
            title: "h",
            content: "omies only pls"
        },
        {
            title: "i",
            content: " wanna be the best"
        },
        {
            title: "n",
            content: "ever give up"
        },
        {
            title: "g",
            content: "ood game"
        }
    ]
    res.render("pages/index", {
        object: items,
        subtitle: "Subtítulo para fins educativos etc etc!"
    })
})

app.get("/sobre", function (req, res){
    res.render("pages/about")
})

app.listen(8080)
console.log("running")
