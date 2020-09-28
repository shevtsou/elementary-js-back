import { Collection, Db, ObjectId } from "mongodb";
import { convertToObject } from "typescript";
import { Course } from "../models/Course";
import { mongoConnection } from "../services/mongoConnection";
import { convertToObjectId } from "../utils/gqlUtils";
import { chapterCollection } from "./chapterCollection";

class CourseCollection {

    collection: Collection<Course>;

    async init() {
        this.collection = mongoConnection.db.collection('course-collection')
        console.log('COURSE COLLECTION CONNECTION ESTABLISHED')
    }

    async sync(course: Course) {
        console.log(`Syncing course with id: ${course._id}`)
        //@ts-ignore
        if (!(await this.collection.findOne({_id: new ObjectId(course._id)}))) {
            const result = await this.collection.insertOne(course)
            console.log(`Couse with id ${course._id} has been added`)
        } else {
            await this.collection.updateOne({_id: course._id}, { $set: course })
            console.log(`Couse with id ${course._id} has been updated`)
        }
    }

    async get(id?: string | ObjectId): Promise<Course[]> {
        let result = undefined;
        //@ts-ignore
        result = this.collection.find(id ? {_id: new ObjectId(id)} : {})
        return await result.toArray()
    }

    async delete(courseId: string | ObjectId) {
        await this.collection.deleteOne({_id: convertToObjectId(courseId)})
    }
}

export const courseCollection = new CourseCollection();