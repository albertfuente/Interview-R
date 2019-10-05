const logic = require('../../logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET } } = process

module.exports = async(req, res) => {

    const { body: { _id, email } } = req

    try {
        const id=await logic.user.authenticate(_id, email)
           
                const token = jwt.sign({ sub: id }, JWT_SECRET, { expiresIn: '1h' })
                res.json({message: 'User authenticated successfully', id, token})
          
    } catch({ message }) {
        res.status(401).json({ error: message })
    }
}