const{validate}=require('axa-utils')
const{models:{Policie}}=require('axa-data')


 /**
 * Registers a new policie 
 * 
 * @param {string} id - the id of the Policie
 * @param {number} amountInsured - the amountInsured of the Policie
 * @param {string} email - the email of the Client
 * @param {string} inceptionDate - the inceptionDate of the Policie
 * @param {boolean} installmentPayment - the installmentPayment of the Policie
 * @param {string} clientId - the id of the Client
 * 
 * @throws {Error} - if Policie already exists
 * 
 * @returns {Object} - returns the Policie
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