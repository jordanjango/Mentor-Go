import express from 'express'
import { Request, Response } from 'express'
import { registerUser } from '../controllers/userController'

const router = express.Router()

router.post('/', (req: Request, res: Response) => {
    registerUser(req, res)
})

export default router