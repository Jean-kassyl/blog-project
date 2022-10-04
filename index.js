const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')


const app = express()

const home = [
    {
        id: 1,
        title: "my life story",
        content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur distinctio fugit 
        maxime qui voluptatibus asperiores expedita magni illum debitis quidem? Nisi doloremque 
        fuga numquam reiciendis suscipit, nam quas eveniet at quis voluptatibus corrupti.`
    }
] 

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
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    const logger = () => {
        console.log(home)
    }
    res.render('index', {home: home, bigTitle: "Home"})
})

app.get('/about', function(req, res){
    res.render('about', {content: aboutContent, bigTitle: "About"})
})

app.get('/contact', function(req, res){
    res.render('contact', {bigTitle: "contact"})
})

app.get('/create-post', function(req, res){
    
    res.render('createPost', {bigTitle: "create"})
})

app.post('/create-post', function(req, res){
    const title = req.body.title;
    const content = req.body.post;
    const id = home.length + 1
    if(title && content && id){
        home.push({id, title, content})
    }
    
    res.redirect('/')
})

app.get('/posts/:single', (req, res) => {
    const single = _.lowerCase(req.params.single);
    
    
    let currentPost = home.find(post => post.title.toLowerCase() === single)
    if(!currentPost){
        res.status(404).end()
    }
    
    res.render('singlePost', {currentPost: currentPost, bigTitle: "post"})
   
})






const PORT = process.env.PORT || "3000"

app.listen(PORT ,() => {
    console.log("port is serving on port "+ PORT)
})