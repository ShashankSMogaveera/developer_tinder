const express= require('express');

const app= express();

app.use('/login',(_req,res)=>{
    res.send('hii fron login')
})
app.use('/',(_req,res)=>{
    res.send('hii from /')
})

app.listen(6767,(_req,_res)=>{
    console.log('server running ')
});