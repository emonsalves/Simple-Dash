const { Router } = require('express')
const { jsonResponse } = require('../lib/jsonResponse')

const router = Router()

router
  .get('/', (req, res) => {
    res.send('signOut')
  })

module.exports = router