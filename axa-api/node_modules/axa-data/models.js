const mongoose = require('mongoose')
const { user, policie} = require('./schemas')

module.exports = {
    User: mongoose.model('User', user),
    Policie: mongoose.model('Policie',policie)
}