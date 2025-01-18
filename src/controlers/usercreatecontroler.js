import  express from 'express';
import userModal from '../modals/userModal.js'
const routes = express.Router();

routes.post('/register',async(req,res,next)=>{
console.log("it controler call");
const {username,email,password,} = req.body;
if(!username||!email||!password){
    const error = new Error("All data requre");
    error.statusCode = 400
    next(error)
    return;
}
let userexsit = await userModal.findOne({useremail:email});

if(userexsit){
    const error = new Error("user Alrady exsit")
    error.statusCode = 409;
    next(error)
}

 const userinstace = await userModal.create(
{
    username:username,
    password:password,
    useremail:email
}
)

res.status(201).send({
    Message:"user Creted",
    id:userinstace._id
})

})

export default routes;