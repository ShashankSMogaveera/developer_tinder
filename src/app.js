const express= require('express');
const {connectDb}= require('./config/database')
// const {adminAuth,userAuth}=require('./middlewares/auth')
const {User}= require('./models/user')
const app= express();

app.use(express.json())

app.post('/signup',async (req,res)=>{
    // console.log(req.body);
    const userData=new User(req.body)
    try{
        await userData.save();
        res.send('user signedup successfully')
    }catch(err){
        res.status(400).send('user signup unsuccessfull')
    }
})

connectDb().then(()=>{
    console.log('database connected');
    app.listen(6767,(_req,_res)=>{
        console.log('server running ')
    });
}).catch(()=>{
    console.log(`couldn't establish connection with database`);
})