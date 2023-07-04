import { Router } from 'express'
import { jsonResponse } from '../lib/jsonResponse.js'

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
  
export default router