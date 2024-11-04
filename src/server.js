require('dotenv').config();
const express = require('express');
const path = require('path');



const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


//config template 
app.set('views',path.join(__dirname,'views/'));
app.set('view engine', 'ejs');

//khai báo route
app.get('/', (req,res)=>{
    res.send('Hello World!');
});

app.get('/abc', (req,res)=>{
    // res.send('<h1>fuck you</h1>');
    res.render('sample.ejs');
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});