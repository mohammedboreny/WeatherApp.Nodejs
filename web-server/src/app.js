// to create server side
const express = require('express')
// to access assets
const path = require('node:path');
const forecast = require('./utils/forecast')
const geocode=require('./utils/geocode')
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
  if (!req.query.address) {
    return res.send({error:"you must provide an address"})
    }

    geocode(req.query.address, (error, {longitude,latitude,country_name}={}) => {
        if (error) {
            return res.send({error})
        }
        forecast(latitude, longitude, (error,data) => {
            if (error) {
                return 'somthing went wrong'
            }
            res.send({
                country_name,
                forcast:data.weather_descriptions
                
            })
        })
    })
   
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
      return res.send({error:"you must provide a search term"})
    }
    console.log(req.query.search);
    res.send({
        products:[]
    })
})

app.get('/help/*', (req, res) => {
    res.render('page404', {
        text:'help article not found'
    })
})



app.get('*', (req, res) => {
    res.render('page404', {
        text:"page not found"
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});