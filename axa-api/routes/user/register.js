const logic = require('../../logic')

module.exports = async(req, res) =>{

    const { body: {id, name, email, role } } = req

    try {
        await logic.user.register(id, name, email, role)
            .then(() => res.status(201).json({ message: 'User registered successfully'}))
    } catch({ message }) {
        res.status(400).json({ error: message })
    }
}

