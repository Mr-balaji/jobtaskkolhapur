const mongoose = require("mongoose");


const  autoincrement = require("mongoose-auto-increment"); 

const useSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:false

        },
        email:{
            type:String,
            required:false

        },
        password:{
            type:String,
            required:false

        },
    }
)

autoincrement.initialize(mongoose.connection);
useSchema.plugin(autoincrement.plugin,"user");

const User  = mongoose.model("user",useSchema);

module.exports = User;

