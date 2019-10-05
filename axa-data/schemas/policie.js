const mongoose=require('mongoose')
const{Schema}=mongoose

module.exports=new Schema({
    id:{
        type:String,
        required:true
    },
    amountInsured:{
        type:Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    inceptionDate: {
        type: Date,
        required:true
    },
    installmentPayment:{
        type:Boolean,
        requried:true
    },
    clientId:{
        type:String,    
        required:true
    }
})