import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { mongoConnection } from "../services/mongoConnection";
import { BaseChildCollection } from "./BaseChildCollection";
import { BaseHierarchyCollection } from "./BaseHierarchyCollection";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";
import { lessonCollection } from "./lessonCollection";
import { sectionCollection } from "./sectionCollection";

class TaskCollection extends BaseHierarchyCollection<LessonTask> {
    


    getCollectionName(): string {
        return 'task-collection'
    }

    getParentCollection() {
        return lessonCollection;
    }

    getParentFieldName() {
        return 'lessonId'
    }
    
    getByLessonId(lessonId: string) {
        return this.getByParentId(lessonId)
    }

    getChildFieldName() {
        return 'sections'
    }

    getChildCollection() {
        return sectionCollection;
    }

}

export const taskCollection = new TaskCollection();