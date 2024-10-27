const express= require('express');
const {connectDb}= require('./config/database')
// const {adminAuth,userAuth}=require('./middlewares/auth')
const {User}= require('./models/user')
const app= express();

app.use(express.json())

app.get('/user',async (req,res)=>{
    const userEmail=req.body.email;
    try{
        const user= await User.findOne({email:userEmail});
        console.log(user)
        if(user){
            res.send(user)
        }else{
            res.status(404).send('user not found');
        }
    }catch{
        res.status(500).send('something went wrong')
    }
})

app.get('/feed',async (_req,res)=>{
    try{
        const users= await User.find({});
        res.send(users);
        
    }catch{
        res.send('something went wrong');
    }
})

app.delete('/user',async (req,res)=>{
    try{
        await User.findOneAndDelete({email:req.body.email})
        res.send('user deleted successfully');
    }catch{
        res.send('something went wrong');
    }

})

app.put('/user',async (req,res)=>{
    try{
        await User.findByIdAndUpdate(req.body.id,req.body, {runValidators: true});
        res.send('update successfull');
    }catch(err){
        res.send('something went wrong'+err.message)
    }
})

// app.put('/user',async (req,res)=>{
//     try{

//         await User.findOneAndUpdate({'email':req.body.email},req.body);
//         res.send('update successfull');
//     }catch(err){
//         res.send(`something went wrong ${err.message}`)
//     }
// })

app.post('/signup',async (req,res)=>{
    // console.log(req.body);
    const userData=new User(req.body)
    try{
        await userData.save();
        res.send('user signedup successfully')
    }catch(err){
        res.status(400).send('user signup unsuccessfull '+err.message)
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