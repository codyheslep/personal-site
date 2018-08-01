const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    console.log(req)
  } catch (err) {
    next(err)
  }
})
