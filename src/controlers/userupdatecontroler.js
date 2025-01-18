import  express from 'express';
import userModal from '../modals/userModal.js'
const routes = express.Router();

routes.put('/remove',async(req,res,next)=>{
    const {data,id} = req.body;
    const removeElementAtIndex = (array, index) => {
        if (index < 0 || index >= array.length) {
          return array; 
        }
        return array.filter((_, i) => i !== index);
      };

    if(!data||!id){
        const error = new Error("All filld are reqird");
        error.statusCode = 400;
        next(error)
    }

    const userfinder = await userModal.findById(id);
    if(!userfinder){
        const error = new Error("User Not found");
        error.statusCode = 400;
        next(error)
    }
    let arr = userfinder.userdata;
    try{
        let updatearr = removeElementAtIndex(arr,data);
        console.log(updatearr)
        const userinstace = await userModal.findByIdAndUpdate(id,{userdata:updatearr});
        console.log(userinstace)
    }
    catch{
        const error = new Error("Server is Besys");
        error.statusCode = 402;
        next(error)
    }
   

    res.status(201).json({
        Message:"Removed The element",
    })

})

export default routes;