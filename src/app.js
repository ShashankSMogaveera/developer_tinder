const express= require('express');
const {connectDb}= require('./config/database')
// const {adminAuth,userAuth}=require('./middlewares/auth')
const {User}= require('./models/user')
const app= express();

app.post('/signup',async (_req,res)=>{
    const userData=new User({firstName: "shekar", lastName: "Mogaveera", email: "shekar@gmail.com", password: "Shekar@123"})
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