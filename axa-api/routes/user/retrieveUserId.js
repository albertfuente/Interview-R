const logic = require('../../logic')

module.exports = async(req, res) => {

    const { params: { id } } = req

    try {
       await logic.user.retrieveUserId(id)
            .then(userId => res.json({ message: 'user id retrieved correctly', userId }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }

} 

