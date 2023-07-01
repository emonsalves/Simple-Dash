const { Router } = require('express')

const router = Router()

router
  .get('/', (req, res) => {
    res.send('Refresh Token!')
    })

module.exports = router