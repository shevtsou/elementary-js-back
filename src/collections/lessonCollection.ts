import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { mongoConnection } from "../services/mongoConnection";
import { BaseChildCollection } from "./BaseChildCollection";
import { BaseHierarchyCollection } from "./BaseHierarchyCollection";
import { ChapterCollection, chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";
import { taskCollection } from "./taskCollection";

export class LessonCollection extends BaseHierarchyCollection<Lesson>{

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


    getChildFieldName() {
        return 'tasks'
    }

    getChildCollection() {
        return taskCollection;
    }

}

export const lessonCollection = new LessonCollection();