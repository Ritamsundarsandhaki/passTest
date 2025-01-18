import express from 'express';
import centionInstance from './src/config/db.js'
import cors from 'cors'
import userroutes from './src/routers/userroutes.js'
const app = express();

centionInstance();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("the server is in home")
})

app.use('/user',userroutes)
app.use((err,req,res,next)=>{
    console.log(err.stack);
    const StatusCode = err.statusCode || 500;
    res.status(StatusCode).json({ Message: err.message });
})
app.listen(5,()=>{
    console.log("The server is start in http://localhost:5");
})