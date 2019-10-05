const {validate} = require('axa-utils')
const {models:{User} } = require('axa-data')

 /**
 * Authenticates a user 
 * 
 * @param {*} id 
 * @param {*} email 
 *  
 * @throws {Error} - if user does not exists.
 * @throws {Error} - if password does not match.
 * 
 * @returns {String}
*/

module.exports = function(id, email) {
  
    validate.string(email, 'username')
    validate.email(email, 'username')
    validate.string(id, 'id')

    return(async()=>{
        const user=await User.findOne({ email })
            if (!user) throw Error('Wrong credentials.')
            
            return await user._id.toString()
    })()


}
