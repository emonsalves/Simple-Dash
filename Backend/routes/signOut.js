const { Router } = require('express')

const router = Router()

router
  .get('/', (req, res) => {
    res.send('signOut')
    })

module.exports = router