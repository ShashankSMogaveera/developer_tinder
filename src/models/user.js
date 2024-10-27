const Mongoose= require('mongoose');

const userSchema=new Mongoose.Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
})

const User=Mongoose.model("User", userSchema);

module.exports= {User}