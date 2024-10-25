const express= require('express');
const {adminAuth,userAuth}=require('./middlewares/auth')
const app= express();

app.get('/user',(_req,res, next)=>{
    console.log("middleware 1")
    next();
},(_req,res,next)=>{
    console.log('middleware 2')
    next()
},userAuth
,(req,res)=>{
    res.send('login successful')
})

app.get('/admin',[(_req,res, next)=>{
    console.log("middleware 1")
    next();
}],(_req,res,next)=>{
    console.log('middleware 2')
    next()
},adminAuth
,(req,res)=>{
    res.send('login successfull')
})

app.post('/user',(_req,res)=>{
    res.send("User data received");
})
// app.use('/',(_req,res)=>{
//     res.send('hii from /')
// })

app.listen(6767,(_req,_res)=>{
    console.log('server running ')
});