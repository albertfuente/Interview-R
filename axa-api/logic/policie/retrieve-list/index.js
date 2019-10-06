const {validate}=require('axa-utils')
const{models:{User,Policie}}=require('axa-data')

 /**
 * Retrieves a list of policies link to a user name 
 * 
 * @param {string} clientName - the name of the Client
 * 
 * @throws {Error} - if User does not exist
 * @throws {Error} - if no Policies ara available for that client
 * 
 * @returns {Object} - returns the policies for the user
 */

 module.exports=function(clientName){
     validate.string(clientName,'clientName')
     
        
     return(async()=>{
        const user=await User.findOne({name:clientName})
        if(!user) throw Error('User does not exist')

        if(user.role=='admin'){
            const policies= await Policie.find({}).lean()
            if(!policies) throw Error('No policies available')
            

            const result=policies.filter(items=>{
                /* items.id=items._id.toString()
                delete items._id */
                return items.clientId===user.id
            })
            return result

        }else{
            throw Error('You have no admin rights')
        }

     })()

 }