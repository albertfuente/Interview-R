const logic = require('../../logic')

module.exports = async(req, res)=> {

    const {params: { policieId} } = req
    debugger

    try {
        await logic.policie.retrievePolicieUser(policieId)
            .then((user) => res.status(201).json({ message: 'User policie successfully',user}))
    } catch({ message }) {
        res.status(400).json({ error: message })
    }
}