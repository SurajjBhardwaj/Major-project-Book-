//next js router 
import user from "../../models/usermodel";
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{
    if(req.method == 'POST'){

        console.log(req.body);

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

        try {
           await p.save();
           console.log("data saved in database");

           res.status(200).json({success:"data saved"});
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


