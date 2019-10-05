const {validate}=require('axa-utils')
const{models:{User,Policie}}=require('axa-data')

/**
 * Retrieves a list of policies link to a user name
 * 
 * @param {*}
 * 
 * 
 */

 module.exports=function(clientName){
     validate.string(clientName,'clientName')
     
        
     return(async()=>{
        const user=await User.findOne({name:clientName})
        if(!user) throw Error('User does not exist')

        if(user.role=='admin'){
            const policies= await Policie.find({}).lean()
            if(!policies) throw Error('No policies available')

            policies.forEach(items=>{
                items.id=items._id.toString()
                delete items._id
            })
            return policies

        }else{
            throw Error('You have no admin rights')
        }

     })()

 }