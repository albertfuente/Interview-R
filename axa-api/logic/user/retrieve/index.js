const {validate} = require('axa-utils')
const {models:{User} } = require('axa-data')

/**
 * Retreives one user
 * 
 * @param {*} id 
 * 
 * @throws {Error} - if user does not exists.
 * 
 * @returns {Object}
*/

module.exports = function(id) {
    
    validate.string(id, 'id')

    return(async()=>{
        const user=await User.findOne({ _id: id }, { __v:0}).lean()
       
            if (!user) throw Error(`User with id ${id} does not exist.`)
            
            return await user
 
    })()

}