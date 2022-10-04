const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const homeContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur distinctio fugit 
maxime qui voluptatibus asperiores expedita magni illum debitis quidem? Nisi doloremque 
fuga numquam reiciendis suscipit, nam quas eveniet at quis voluptatibus corrupti.`

const aboutContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Facilis praesentium eligendi atque excepturi accusantium. 
Amet ab explicabo quaerat, itaque optio animi magnam quibusdam 
vero voluptate repudiandae quos fuga quasi nostrum minima quisquam in. 
Eveniet saepe consectetur voluptatibus esse eaque quam, voluptatum aliquam 
quibusdam neque commodi recusandae odit fugit, nesciunt delectus illo 
necessitatibus sit alias qui minima. Illo nemo repellat laudantium ullam, 
impedit non cupiditate corporis architecto, ut commodi praesentium nihil 
dolores a cum explicabo voluptates veniam similique sint? Modi, voluptas!`

app.set("view engine", "ejs")
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index', {content: homeContent, title: "my life in brief"})
})

app.get('/about', function(req, res){
    res.render('about', {content: aboutContent})
})

app.get('/contact', function(req, res){
    res.render('contact')
})

app.get('/create-post', function(req, res){
    res.render('createPost')
})

app.post('/create-post', function(req, res){

    res.redirect('createPost')
})

app.get('/:single', (req, res) => {
    const single = req.params.single;
    console.log(single)
    res.render('singlePost', {content: homeContent, title: single})
   
})






const PORT = process.env.PORT || "3000"

app.listen(PORT ,() => {
    console.log("port is serving on port "+ PORT)
})