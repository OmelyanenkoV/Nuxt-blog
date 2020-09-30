const { Router } = require('express')
const router = Router()

const { create } = require('../controllers/comment.controller')

// http://localhost:3001/api/comment
router.post('/', create)

module.exports = router
