import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { mongoConnection } from "../services/mongoConnection";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";

class TaskCollection {

    collection: Collection<LessonTask>;

    async init() {
        this.collection = mongoConnection.db.collection('task-collection')
        console.log('TASK COLLECTION CONNECTION ESTABLISHED')
    }

    async sync(lesson: Lesson) {
        console.log(`Syncing lesson task with id: ${lesson._id}`)//

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