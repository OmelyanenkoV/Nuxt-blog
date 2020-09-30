const { Router } = require('express')
const router = Router()

const { login, createUser } = require('../controllers/auth.controller')

// http://localhost:3001/api/auth/admin/login
router.post('/admin/login', login)

// http://localhost:3001/api/auth/admin/create
router.post('/admin/create', createUser)

module.exports = router
