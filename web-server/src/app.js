// to create server side
const express = require('express')
// to access assets
const path = require('node:path');

const hbs=require('hbs')

const partialPath=path.join(__dirname,'../templates/partials')

const app = express();

// setup handlebars hbs  engine and views location and partials
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(partialPath);

// setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather app",
        name:"mohammed"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "about me",
        age:27
    })
})
app.get('/help', (req, res) => 
   res.render('help', {message:'How can i help you !',title:'help page'})
)



app.get('/weather', (req, res) => {
    res.send({
        forecast: "",
        location: {
            lat: 0,
            lng: 0
        }
    })
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});