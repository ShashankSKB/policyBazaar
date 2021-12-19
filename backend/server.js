const express=require("express");
const res = require("express/lib/response");
const mongoose=require("mongoose");


const app=express();

app.use(express.json());


const connect =()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/");

}

const plans= new mongoose.Schema(
    {
        id:{type:Number,required:true},
        companyIcon:{type:String,required:true},
        type:{type:String,required:true},
        price:{type:Number,required:true}

    }
)

const Plan=mongoose.model("plan",plans);


app.get("/plans",async(req,res)=>{

    const data=await Plan.find().lean().exec();

    return res.status(200).send({data});
})

app.post("/plans",async(req,res)=>{

    try{
        const data=await Plan.create(req.body);
        return res.status(201).send({data});
    }
    catch(err)
    {
        console.log(err);

    }
   

    
})

app.listen(2345,async()=>{

    await connect();
    console.log("listening on port no 2345");
})