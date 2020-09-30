const { Router } = require('express')
const router = Router()
const passport = require('passport')
const ctr = require('../controllers/post.controller')

// Admin
// http://localhost:3001/api/post/admin

router.post(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
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
  ctr.getAll
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

router.put('/:id', ctr.addView)

router.module.exports = router