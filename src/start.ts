import { MongoClient } from "mongodb";
import { courseCollection } from "./collections/courseCollection";
import { mongoConnection } from "./services/mongoConnection";
import  * as express from 'express'
import { courseRouter } from "./routers/courseRouter";
import { Course } from "./models/Course";
import * as bodyParser from 'body-parser'
import { graphqlHTTP } from 'express-graphql'
import * as cors from 'cors'
import { Schema } from "mongoose";
import { graphqlRootSchema } from "./services/graphqlRootSchema";
import { graphqlRootProvider } from "./services/graphqlRootProvider";

const PORT = 3000;


(async () => {



    await mongoConnection.init();
    await courseCollection.init();

    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    app.use('/course', courseRouter)

    app.use('/graphql', graphqlHTTP({
        schema: graphqlRootSchema,
        rootValue: graphqlRootProvider,
        graphiql: true,
    }))
    app.listen(PORT, () => {
        console.log(`EPXRESS JS STARTED ON ${PORT}`)
    })
})()

