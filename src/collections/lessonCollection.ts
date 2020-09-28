import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { mongoConnection } from "../services/mongoConnection";
import { BaseChildCollection } from "./BaseChildCollection";
import { ChapterCollection, chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";

export class LessonCollection extends BaseChildCollection<Lesson>{

    getCollectionName(): string {
        return 'lesson-collection';
    }


    getParentCollection() {
        return chapterCollection
    }
    getParentFieldName(): string {
        return 'chapterId';
    }

    async getByChapterId(id: string | ObjectId) {
        return this.getByParentId(id)
    }
}

export const lessonCollection = new LessonCollection();