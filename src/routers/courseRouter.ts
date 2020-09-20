
import { Router } from 'express'

const courseRouter = Router();

courseRouter.get('/', (req, res) => {
    res.send('Course route')
})

export { courseRouter }