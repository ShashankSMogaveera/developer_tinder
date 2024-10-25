const express= require('express');

const app= express();

app.get('/user',(_req,res, next)=>{
    console.log("middleware 1")
    next();
},(_req,res,next)=>{
    console.log('middleware 2')
    next()
},(req,res)=>{
    res.send('route handler last')
})

app.get('/user',[(_req,res, next)=>{
    console.log("middleware 1")
    next();
}],(_req,res,next)=>{
    console.log('middleware 2')
    next()
},(req,res)=>{
    res.send('route handler last')
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