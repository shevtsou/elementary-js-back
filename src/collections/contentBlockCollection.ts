import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { SectionContentBlock } from "../models/ContentBlock";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { mongoConnection } from "../services/mongoConnection";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";
import { sectionCollection } from "./sectionCollection";

class ContentBlockCollection {

    collection: Collection<SectionContentBlock>;

    async init() {
        this.collection = mongoConnection.db.collection('content-block-collection')
        console.log('CONTENT BLOCK COLLECTION CONNECTION ESTABLISHED')
    }

    async sync(contentBlock: SectionContentBlock) {
        console.log(`Syncing content block with id: ${contentBlock._id}`)

        if (!(await sectionCollection.get(contentBlock.sectionId))) {
            throw new Error(`No section with ${contentBlock.sectionId}`)
        }

        //@ts-ignore
        if (!(await this.collection.findOne({_id: new ObjectId(contentBlock._id)}))) {
            const result = await this.collection.insertOne(contentBlock)
            console.log(`Content block with id ${contentBlock._id} has been added`)
        } else {
            await this.collection.updateOne({_id: contentBlock._id}, { $set: contentBlock })
            console.log(`Content block with id ${contentBlock._id} has been updated`)
        }
    }

    async get(id?: string | ObjectId): Promise<SectionContentBlock[]> {
        let result = undefined;
        //@ts-ignore
        result = this.collection.find(id ? {_id: new ObjectId(id)} : {})
        return await result.toArray()
    }

    async delete(contentBlockId: string) {
        await this.collection.deleteOne({_id: contentBlockId})
    }
}

export const contentBlockCollection = new ContentBlockCollection();