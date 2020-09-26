import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { mongoConnection } from "../services/mongoConnection";
import { courseCollection } from "./courseCollection";

class ChapterCollection {

    collection: Collection<Chapter>;

    async init() {
        this.collection = mongoConnection.db.collection('chapter-collection')
        console.log('CHAPTER COLLECTION CONNECTION ESTABLISHED')
    }

    async sync(chapter: Chapter) {
        console.log(`Syncing chapter with id: ${chapter._id}`)

        if (!(await courseCollection.get(chapter.course_id))) {
            throw new Error(`No course with ${chapter.course_id}`)
        }

        //@ts-ignore
        if (!(await this.collection.findOne({_id: new ObjectId(chapter._id)}))) {
            const result = await this.collection.insertOne(chapter)
            console.log(`Chapter with id ${chapter._id} has been added`)
        } else {
            await this.collection.updateOne({_id: chapter._id}, { $set: chapter })
            console.log(`Chapter with id ${chapter._id} has been updated`)
        }
    }

    async get(id?: string): Promise<Chapter[]> {
        let result = undefined;
        //@ts-ignore
        result = this.collection.find(id ? {_id: new ObjectId(id)} : {})
        return await result.toArray()
    }

    async delete(courseId: string) {
        await this.collection.deleteOne({_id: courseId})
    }
}

export const chapterCollection = new ChapterCollection();