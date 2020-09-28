import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { SectionContentBlock } from "../models/ContentBlock";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { BaseModel } from "../models/BaseModel";
import { mongoConnection } from "../services/mongoConnection";
import { convertToObjectId } from "../utils/gqlUtils";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";
import { sectionCollection } from "./sectionCollection";

export abstract class BaseCollection<T extends BaseModel> {

    collection: Collection<T>;


    abstract getCollectionName(): string;

    async init() {
        this.collection = mongoConnection.db.collection(this.getCollectionName())
        console.log(`${this.getCollectionName()} COLLECTION CONNECTION ESTABLISHED`)
    }

    async sync(entity: T) {
        console.log(`Syncing entity of ${this.getCollectionName()} with id: ${entity._id}`)


        //@ts-ignore
        if (!(await this.collection.findOne({_id: convertToObjectId(entity._id)}))) {
            const result = await this.collection.insertOne(entity as any)
            console.log(`Entity with id ${entity._id} has been added`)
        } else {
            //@ts-ignore
            await this.collection.updateOne({_id: convertToObjectId(entity._id)}, { $set: entity })
            console.log(`Entity with id ${entity._id} has been updated`)
        }
    }

    async get(id?: string | ObjectId): Promise<T[]> {
        let result = undefined;
        //@ts-ignore
        result = this.collection.find(id ? {_id: convertToObjectId(id)} : {})
        return await result.toArray()
    }

    async delete(id: string | ObjectId) {
        id = convertToObjectId(id)
        await this.collection.deleteOne({_id: id as any})
    }
}