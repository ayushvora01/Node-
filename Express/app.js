const express = require('express');
const myMiddleware = require('./Middlewares/middleware');
const morgan = require('morgan');

const app = express();

app.use(express.json());

app.use(myMiddleware)

app.use(function (req,res,next){
    console.log('Custom Middleware 2');
    next();
})

app.use(morgan('tiny'))

    let courses = [
        {id: 1, name: 'JS'},
        {id: 2, name: 'Node'},
        {id: 3, name: 'React'},
    ];

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.get('/courses', (req,res)=>{
    res.send(courses);
})

app.post('/courses',(req,res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

app.put('/courses/:id',(req,res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course)res.status(404).send('The course with the given ID was not found');
    course.name = req.body.name;
    res.send(course);
})

app.delete('/courses/:id',(req,res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course)res.status(404).send('The course with the given ID was not found');
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
})



const port = process.env.PORT || 3000;

// Route Parameters
app.get('/courses/:id',(req,res)=>{
    console.log(req.params);
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course)res.status(404).send('The course with the given ID was not found');
    res.send(course);
})


app.listen(port,()=>console.log(`Port is running on ${port}`));
