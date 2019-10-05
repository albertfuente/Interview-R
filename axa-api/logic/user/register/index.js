const {validate} = require('axa-utils')
const {models:{User} } = require('axa-data')


/**
 * Registers a new user
 * 
 * @param {*} id 
 * @param {*} name 
 * @param {*} email 
 * @param {*} role
 * 
 * 
 * @throws {Error} - if email already exists.
 * 
 * @returns {Object} - user
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




