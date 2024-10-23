const express= require('express');

const app= express();

app.use('/',(_req,res)=>{
    res.send('hii from /')
})

app.listen(6767);