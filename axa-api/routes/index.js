const { Router } = require('express')
const tokenMiddleware = require('../helpers/token-middleware')
const bodyParser = require('body-parser')

const { registerUser, authenticateUser, retrieveUser, retrieveUserId, retrieveUserName } = require('./user')
const {registerPolicie,retrieveList, retrievePolicieUser}=require('./policie')

const router = Router()
const jsonBodyParser = bodyParser.json()

/* USER */
router.post('/users', jsonBodyParser, registerUser)
router.post('/auth', jsonBodyParser, authenticateUser)
router.get('/users/:id', [tokenMiddleware, jsonBodyParser], retrieveUser)
router.get('/retrieve/:id', [tokenMiddleware, jsonBodyParser], retrieveUserId)
router.get('/retrieveName/:id', [tokenMiddleware, jsonBodyParser], retrieveUserName)

/* POLICIE */
router.post('/policies', jsonBodyParser, registerPolicie)
router.get('/retrieveList/:clientName', retrieveList)
router.get('/retrieveUser/:policieId', retrievePolicieUser)





module.exports = router