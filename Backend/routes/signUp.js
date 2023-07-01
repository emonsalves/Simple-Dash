const { Router } = require('express')
const { jsonResponse } = require('../lib/jsonResponse')

const router = Router()

router
  .post('/', (req, res) => {
    const { userName, password, passwordConfirmation } = req.body

    if (!userName || !password || !passwordConfirmation) {
      return res.status(400)
        .json(jsonResponse(400, { message: 'Missing required fields' }))
    }

    //crear usuario en la data base 
    res
      .status(200)
      .json(jsonResponse(200, { message: 'User created' }))
  })

module.exports = router