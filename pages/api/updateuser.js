//next js router 

import user from "../../models/usermodel";
// import connectDB from "@/middleware/mongoose";
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{

    if(req.method == 'POST'){

        console.log(req.body);
        let s = await user.findByIdAndRemove(req.body._id,req.body);
       
       try {
        res.status(200).json({sucess:"Data is updated properly"});
       } catch (error){
        res.status(404).json({error:"data can not be updated"});
       }

    }
    else {
        res.status(404).json({error: "this method is not allowed here"}); 
    }
    // let users = await user.find();
    // console.log();

}


export default connectDb(handler);


