const {validate}=require('axa-utils')
const{models:{User,Policie}}=require('axa-data')

/**
 * Retrieves the user linked to a policie number 
 * 
 * @param {string} id - the id of the Policie
 * 
 * @throws {Error} - if Policie does not exist
 * @throws {Error} - if User with id does not exist
 * 
 * @returns {string} - returns the name of the user
 */

 module.exports=function(id){
     validate.string(id,'id')

     return(async()=>{
 
         const policie=await Policie.findOne({id:id})
         if(!policie) throw Error('Policie does not exist')

         userId=policie.clientId
         const user=await User.findOne({ id: userId }, { __v:0}).lean()
        
            if (!user) throw Error(`User with id ${id} does not exist.`)
            if(user.role=='admin'){
                name=user.name

                return await name

            }
            else throw Error(`User with id ${id} is not admin.`)
            

     })()
 }