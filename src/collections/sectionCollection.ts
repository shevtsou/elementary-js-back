import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { TaskSection } from "../models/TaskSection";
import { mongoConnection } from "../services/mongoConnection";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";

class SectionCollection {

    collection: Collection<TaskSection>;

    async init() {
        this.collection = mongoConnection.db.collection('section-collection')
        console.log('SECTION COLLECTION CONNECTION ESTABLISHED')
    }

    async sync(section: TaskSection) {
        console.log(`Syncing task section with id: ${section._id}`)

        if (!(await sectionCollection.get(section.taskId))) {
            throw new Error(`No task with ${section.taskId}`)
        }

        //@ts-ignore
        if (!(await this.collection.findOne({_id: new ObjectId(section._id)}))) {
            const result = await this.collection.insertOne(section)
            console.log(`Section with id ${section._id} has been added`)
        } else {
            await this.collection.updateOne({_id: section._id}, { $set: section })
            console.log(`Section with id ${section._id} has been updated`)
        }
    }

    async get(id?: string): Promise<TaskSection[]> {
        let result = undefined;
        //@ts-ignore
        result = this.collection.find(id ? {_id: new ObjectId(id)} : {})
        return await result.toArray()
    }

    async delete(lessonId: string) {
        await this.collection.deleteOne({_id: lessonId})
    }
}

export const sectionCollection = new SectionCollection();