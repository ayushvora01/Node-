const express = require('express');
const nodemon = require('nodemon');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send('About Page');
})

const port = process.env.PORT || 3000;

// Route Parameters
app.get('/courses/:id',(req,res)=>{
    res.send(req.params.id);
})

app.listen(port,()=>console.log(`Port is running on ${port}`));