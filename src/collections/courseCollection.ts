import { Db } from "mongodb";
import { mongoConnection } from "../services/mongoConnection";

class CourseCollection {

    db: Db;

    async init() {
        this.db = mongoConnection.client.db('course-db')
        console.log('COURSE COLLECTION CONNECTION ESTABLISHED')
    }
}

export const courseCollection = new CourseCollection();