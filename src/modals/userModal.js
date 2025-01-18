import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },useremail:{
            type:String,
            required:true,
        },
        userdata:[
            {
            }
            
        ]
    }
)
const user = mongoose.model("user",UserSchema,"pmdbUsers");

export default user;