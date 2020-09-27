import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { mongoConnection } from "../services/mongoConnection";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";

class LessonCollection {

    collection: Collection<Lesson>;

    async init() {
        this.collection = mongoConnection.db.collection('lesson-collection')
        console.log('LESSON COLLECTION CONNECTION ESTABLISHED')
    }

    async sync(lesson: Lesson) {
        console.log(`Syncing lesson with id: ${lesson._id}`)

        if (!(await chapterCollection.get(lesson.chapterId))) {
            throw new Error(`No chapter with ${lesson.chapterId}`)
        }

        //@ts-ignore
        if (!(await this.collection.findOne({_id: new ObjectId(lesson._id)}))) {
            const result = await this.collection.insertOne(lesson)
            console.log(`Lesson with id ${lesson._id} has been added`)
        } else {
            await this.collection.updateOne({_id: lesson._id}, { $set: lesson })
            console.log(`Lesson with id ${lesson._id} has been updated`)
        }
    }


    async getByChapterId(id: string): Promise<Lesson[]> {
        let result = undefined;
        //@ts-ignore
        result = this.collection.find({chapterId: new ObjectId(id)})
        return await result.toArray();
    }

    async get(id?: string): Promise<Chapter[]> {
        let result = undefined;
        //@ts-ignore
        result = this.collection.find(id ? {_id: new ObjectId(id)} : {})
        return await result.toArray()
    }

    async delete(lessonId: string) {
        await this.collection.deleteOne({_id: lessonId})
    }
}

export const lessonCollection = new LessonCollection();