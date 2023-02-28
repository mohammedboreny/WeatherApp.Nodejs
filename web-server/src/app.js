const express=require('express')

const app=express();


app.get('',(req,res)=>{
    res.send('<h1>Hello express!</h1>')
})

app.get('/help',(req,res)=>{
    res.send([{
        name:'mohammed',
        age:26
    }])
})


app.get('/about',(req,res)=>{
res.send('<h1> title </h1>')
})

app.get('/weather',(req,res)=>{
res.send({
    forecast:"",
    location:{
        lat:0,
        lng:0
    }
})
})



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});