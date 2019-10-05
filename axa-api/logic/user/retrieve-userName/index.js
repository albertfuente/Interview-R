const {validate} = require('axa-utils')
const {models:{User} } = require('axa-data')

 /**
 * Retreives one user
 * 
 * @param {string} id - the id of the Client
 * 
 * @throws {Error} - if User does not exist
 * 
 * @returns {string} - returns the name of the Client
 */

module.exports = function(id) {
    
    validate.string(id, 'id')

    return(async()=>{
        const user=await User.findOne({ _id: id }, { _id: 0, password: 0 ,__v:0}).lean()
       
            if (!user) throw Error(`User with id ${id} does not exist.`)
            name=user.name

            return await name
 
    })()

}