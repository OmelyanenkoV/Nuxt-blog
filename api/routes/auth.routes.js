const { Router } = require('express')
const router = Router()
const passport = require('passport')

const { login, createUser } = require('../controllers/auth.controller')

// http://localhost:3001/api/auth/admin/login
router.post('/admin/login', login)

// http://localhost:3001/api/auth/admin/create
router.post(
  '/admin/create',
  passport.authenticate('jwt', { session: false }),
  createUser
)

module.exports = router
