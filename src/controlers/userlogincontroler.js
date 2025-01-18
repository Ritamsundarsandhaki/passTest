import  express from 'express';
import userModal from '../modals/userModal.js'
const routes = express.Router();

routes.post('/login',async(req,res,next)=>{
    const   {username,password} = req.body
    if(!username||!password){
        const error = new Error("All fild requred")
        error.statusCode = 400;
        next(error)
    }

    let userinstace = await userModal.findOne({username:username});
    if(!userinstace){
        const error = new Error("User not Found")
        error.statusCode = 404;
        next(error)


    }
    try{
        if(userinstace.password===password){
            res.status(200).send({
                username:userinstace.username,
                token:userinstace._id
            })
        }else{
            const error = new Error("Username or password invalid")
            error.statusCode = 401;
            next(error)
        }
    }
    catch{
        const error = new Error("Username or password invalid")
            error.statusCode = 401;
            next(error)
    }

    console.log(userinstace)
})

export default routes;