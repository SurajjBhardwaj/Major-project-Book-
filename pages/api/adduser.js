//next js router 

import user from "../../models/usermodel";
// import connectDB from "@/middleware/mongoose";
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{

    if(req.method == 'POST'){

        let p = new user({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email,
            phone:req.body.phone,
            city:req.body.city,
            state:req.body.state,
            type:req.body.typeOfBook,
            password:req.body.password
        });

       await p.save();
       try {
        res.status(200).json({sucess:"Data is saved properly"});
       } catch (error) {
        res.status(404).json({error:"data can not be saved"});
       }

    }
    else {
        res.status(404).json({error: "this method is not allowed here"}); 
    }
    // let users = await user.find();
    // console.log();

}


export default connectDb(handler);


