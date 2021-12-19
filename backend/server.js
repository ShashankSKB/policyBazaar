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

// const info1= new mongoose.Schema(
//     {
//     Owner: {type:String,required:true},
//     Mobile: {type:Number,required:true},
//     Email: {type:String,required:true},
//     Address: {type:String,required:true},
//     City: {type:String,required:true},
//     State: {type:String,required:true},
//     Pincode: {type:Number,required:true},

//     }
// )

// const info2= new mongoose.Schema(
//     {
//         Nname: {type:String,required:true},
//         Nage: {type:Number,required:true},

//     }
// )

// const info3= new mongoose.Schema(
//     {
//         Owner: {type:Number,required:true},
//     Mobile: {type:Number,required:true},
//     Email: {type:Number,required:true},
//     Address: {type:Number,required:true},
//     City: {type:Number,required:true},
//     State: {type:Number,required:true},
//     Pincode: {type:Number,required:true},

//     }
// )

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