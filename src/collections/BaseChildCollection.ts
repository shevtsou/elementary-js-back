import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { SectionContentBlock } from "../models/ContentBlock";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { BaseModel } from "../models/BaseModel";
import { mongoConnection } from "../services/mongoConnection";
import { convertToObjectId } from "../utils/gqlUtils";
import { BaseCollection } from "./BaseCollection";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";
import { sectionCollection } from "./sectionCollection";

export abstract class BaseChildCollection<T extends BaseModel> extends BaseCollection<T>{

    collection: Collection<T>;

    abstract getCollectionName(): string;

    abstract getParentCollection(): BaseCollection<any>;

    abstract getParentFieldName(): string;

    async sync(entity: T) {
        console.log(`Syncing entity of ${this.getCollectionName()} with id: ${entity._id}`)

        if (!(await this.getParentCollection().get(entity[this.getParentFieldName()]))) {
            throw new Error(`No parent with ${entity[this.getParentFieldName()]}`)
        }

        entity[this.getParentFieldName()] = convertToObjectId(entity[this.getParentFieldName()]);


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

    async getByParentId(id: string | ObjectId): Promise<T[]> {
        id = convertToObjectId(id)
        let result = undefined;
        //@ts-ignore
        result = this.collection.find({[this.getParentFieldName()]: id})
        return await result.toArray();
    }

}