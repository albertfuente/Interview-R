const logic = require('../../logic')

module.exports = async(req, res)=> {

    const {params: { clientName} } = req
    

    try {
        await logic.policie.retrieveList(clientName)
            .then((policieId) => res.status(201).json({ message: 'Policies retrieved successfully',policieId}))
    } catch({ message }) {
        res.status(400).json({ error: message })
    }
}