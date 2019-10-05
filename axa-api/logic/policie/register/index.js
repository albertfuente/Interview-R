const{validate}=require('axa-utils')
const{models:{Policie}}=require('axa-data')

/**
 * Registers a new policie
 * 
 * @param {*} id
 * 
 * 
 */

 module.exports=function(id,amountInsured,email,inceptionDate,installmentPayment,clientId){
     
     validate.string(id,'id')
     validate.number(amountInsured,'amountInsured')
     validate.string(email,'email')
     validate.email(email,'email')
     validate.string(inceptionDate,'inceptionDate')
     validate.boolean(installmentPayment,'installmentPayment')
     validate.string(clientId,'clientId')

     return(async()=>{
         const policie=await Policie.findOne({id})

         if(policie)throw Error(`policie with id ${id} already exsits`)

         await Policie.create({id:id, amountInsured:amountInsured, email:email, inceptionDate:inceptionDate, installmentPayment:installmentPayment,clientId:clientId})
         return policie
     })()
 }