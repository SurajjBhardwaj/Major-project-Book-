
import { mongoose } from "mongoose";

const connectDB = handler => async (req,res)=>{

    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    else{

        await mongoose.connect(process.env.URI);
        console.log("database connected");
        return handler(req,res);

    }
}


export default connectDB;