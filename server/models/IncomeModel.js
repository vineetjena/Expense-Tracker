const mongoose=require("mongoose");

const IncomeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        default:"Income"

    },
    date:{
        type:Date,
        required:true

    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
    }
    
},{timestamps: true})

module.exports=mongoose.model('Income',IncomeSchema)