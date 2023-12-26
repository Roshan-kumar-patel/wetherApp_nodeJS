const express = require('express');
const app= express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');

//public static path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));



//routing
app.get('/', (req, res)=> {
    res.render('ibdex')
})
app.get('/about', (req, res)=> {
    res.render('about')
})
app.get('/weather', (req, res)=> {
    res.render('weather')
})
app.get('*', (req, res)=> {
    res.render('404error')
})
app.listen(port, "127.0.0.1", ()=>{
    console.log(`Server is runing at port ${port}` )
});