const {validate} = require('axa-utils')
const {models:{User} } = require('axa-data')

 /**
 * Registers a new user
 * 
 * @param {string} id - the id of the Client
 * @param {string} name - the name of the Client
 * @param {string} email - the email of the Client
 * @param {string} role - the role of the Client
 * 
 * @throws {Error} - if User already exists
 * 
 * @returns {Object} - returns the Client
 */

module.exports = function(id, name, email, role) {

    validate.string(id, 'id')
    validate.string(name, 'name')
    validate.string(email, 'username')
    validate.email(email, 'username')
    validate.string(role, 'role')

    return(async()=>{
        const user= await User.findOne({ email })

            if (user) throw Error(`user with e-mail ${email} already exists`)
            
            await User.create({id: id, name: name, email: email, role: role})
            return user
    })()
    

}




