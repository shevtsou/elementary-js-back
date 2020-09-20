import { Collection, Db, ObjectId } from "mongodb";
import { Course } from "../models/Course";
import { mongoConnection } from "../services/mongoConnection";

class CourseCollection {

    collection: Collection<Course>;

    async init() {
        this.collection = mongoConnection.db.collection('course-collection')
        console.log('COURSE COLLECTION CONNECTION ESTABLISHED')
    }

    async sync(course: Course) {
        console.log(`Syncing course with id: ${course.id}`)
        if (!(await this.collection.findOne({_id: new ObjectId(course.id)}))) {
            const toInsert = course.convertToMongoModel();
            const result = await this.collection.insertOne(toInsert)
            course.id = toInsert._id;
            console.log(`Couse with id ${course.id} has been added`)
        } else {
            await this.collection.updateOne({_id: course.id}, { $set: course })
            console.log(`Couse with id ${course.id} has been updated`)
        }
    }

    async delete(courseId: string) {
        await this.collection.deleteOne({_id: courseId})
    }




}

export const courseCollection = new CourseCollection();