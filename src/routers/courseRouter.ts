
import { Router } from 'express'
import { Course } from '../models/Course';
import { validateCourse } from '../validators/courseValidator';

const courseRouter = Router();

courseRouter.get('/', (req, res) => {
    res.send('Course route')
})

courseRouter.post('/', (req, res) => {
    const body = req.body;
    const result = validateCourse(body);
    if (result === 'valid') {
        res.sendStatus(201)
    } else {
        res.sendStatus(400)
    }
})

export { courseRouter }