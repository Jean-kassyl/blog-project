const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const homeContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur distinctio fugit 
maxime qui voluptatibus asperiores expedita magni illum debitis quidem? Nisi doloremque 
fuga numquam reiciendis suscipit, nam quas eveniet at quis voluptatibus corrupti.`

app.set("view engine", "ejs")
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index', {content: homeContent})
})
const PORT = process.env.PORT || "3000"

app.listen(PORT ,() => {
    console.log("port is serving on port "+ PORT)
})