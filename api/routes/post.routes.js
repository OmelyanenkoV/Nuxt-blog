const { Router } = require('express')
const router = Router()
const passport = require('passport')
const upload = require('../middleware/upload')
const ctr = require('../controllers/post.controller')

// Admin
// http://localhost:3001/api/post/admin

router.post(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  ctr.create
)

router.get(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  ctr.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.update
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.remove
)

// Base
// http://localhost:3001/api/post

router.get('/', ctr.getAll)

router.get('/:id', ctr.getById)

router.put('/add/view/:id', ctr.addView)

module.exports = router
