import  express from 'express';
import userModal from '../modals/userModal.js'
const routes = express.Router();

routes.post('/add',async(req,res,next)=>{
const {data, id} = req.body;
if(!data||!id){
    const error = new Error("All filld are reqird");
    error.statusCode = 400;
    next(error)
}
 
let k = data.appname||false
let n = data.userid||false
let p = data.password||false
console.log(k,n,p)
if(!k||!n||!p){
    const error = new Error("All filld are reqird")
    error.statusCode = 400;
    next(error)
}
try {
    const userfinder = await userModal.findById(id);
    const temp =userfinder.userdata;
temp.push({
    appname:data.appname,
    userid:data.userid,
    password:data.password
})
console.log(temp)

const userinstace = await userModal.findByIdAndUpdate(id,{userdata:temp})
console.log(userinstace);
res.send("data added")
}
catch{
    
    const error = new Error("User Not Found")
    error.statusCode = 400;
    next(error)
}


})

export default routes;