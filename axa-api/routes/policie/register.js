const logic = require('../../logic')

module.exports = async(req, res) =>{

    const { body: {id,amountInsured,email,inceptionDate,installmentPayment }, params:{clientId} } = req
    try {
        debugger
        await logic.policie.register(id,amountInsured,email,inceptionDate,installmentPayment,clientId)
            .then(() => res.status(201).json({ message: 'Policie registered successfully'}))
    } catch({ message }) {
        res.status(400).json({ error: message })
    }
}

