const express = require ('express');



const app = express();

app.use('/user',(req,res,next)=>{
console.log('in the middleware');
res.send('<h1> User Page </h1>')

});
app.use('/',(req,res,next)=>{
    console.log('in another middleware');
    res.send('<h1> Hello, I am Mausam !!!</h1>');
    });

app.listen(3000);