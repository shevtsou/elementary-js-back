import { MongoClient } from "mongodb";
import { courseCollection } from "./collections/courseCollection";
import { mongoConnection } from "./services/mongoConnection";
import  * as express from 'express'
import { courseRouter } from "./routers/courseRouter";
const PORT = 3000;

(async () => {

    await mongoConnection.init();
    await courseCollection.init();

    const app = express()
    app.get('/', (req, res) => {
        res.send('Hello world!')
    })
    app.use('/course', courseRouter)

    app.listen(PORT, () => {
        console.log(`EPXRESS JS STARTED ON ${PORT}`)
    })
})()

