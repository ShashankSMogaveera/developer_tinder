const mongoose= require('mongoose');

const connectDb= async ()=>{
    await mongoose.connect('mongodb+srv://shashanksmogaveera12:9xAZnJ8GdzGSXpJU@developer-tinder.kkhdd.mongodb.net/developer-tinder');
}

module.exports= {connectDb}