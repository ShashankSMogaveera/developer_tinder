const Mongoose= require('mongoose');

const userSchema=new Mongoose.Schema({
    firstName : {
        type: String,
        require: true,
        trim: true,
        minLength: 3,
        maxLength: 25
    },
    lastName : {
        type: String,
        require: true,
        trim: true,
        minLength: 1,
        maxLength: 25
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        validate(value){
            const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if(! emailRegex.test(value)){
                throw new Error('incorrect Email pattern ')
            }
        },
        minLength: 13
    },
    password: { 
        type: String,
        minLength: 6,
        maxLength: 30,
        trim: true,
        validate(value){
            const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[.@$*\\-_])[a-zA-Z0-9.@$*\\-_]{6,30}$/;
            if(!passwordRegex.test(value)){
                throw new Error('incorrect password pattern');
            }
        }
    },
    age: {
        type: Number,
        min: 12
    },
    gender: {
        type: String,
        trim: true,
        validate(value){
            if(!['male','female'].includes(value.toLowerCase())){
                throw new Error('invalid gender')
            }
        }
    },
    skills: {
        type:[String],
    },
    profilePhoto: {
        type:String,
        default: "https://play-lh.googleusercontent.com/EotxkWC4dXajaesh2iVgdIB5-o6pINoas_k-z7nVjRGSu4k9QZwMZIcRNXyUWGn3rg"
    },
    description: {
        type:String,
        default: 'not available'
    }
},{
    timestamps: true
})

const User=Mongoose.model("User", userSchema);

module.exports= {User}