import mongoose from "mongoose";


const  centionInstance = async()=>{
    try{
        const dbtech = await mongoose.connect('mongodb+srv://sandhakirinita:ritam@cluster0.yakvx.mongodb.net/passwordManger');
        console.log("db cencted")
    }
    catch(err){
        console.log(err)
    }
   
}
export default centionInstance;
