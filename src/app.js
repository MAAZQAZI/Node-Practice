const express= require('express');
const app=express();
//You need to require path npm module like this
const path = require('path'); 
const  requests=require('requests');
// console.log(path.join(__dirname));
const staticPath=path.join(__dirname,"../public");
const tempath=path.join(__dirname,"../templates");

app.set('view engine','hbs');
app.set('views',tempath);

app.use(express.static(staticPath));
app.get("/maaz",(req,res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=f2ca362519a90f8f59b5bf904e09630f`)
    .on("data", (chunk) => {
       
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(`City name is ${arrData[0].name} and temperature is ${arrData[0].main.temp}`);
        res.send(`City name is ${arrData[0].name} and temperature is ${arrData[0].main.temp}`);
        
    })
    .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
    });
    
    });


app.get(`/about`,(req,res)=>{
    res.send('About page bro');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});