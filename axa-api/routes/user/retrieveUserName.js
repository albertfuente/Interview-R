const logic = require('../../logic')

module.exports = async(req, res) => {

    const { params: { id } } = req

    try {
       await logic.user.retrieveUserName(id)
            .then(userName => res.json({ message: 'user id retrieved correctly', userName }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }

} 

