import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { mongoConnection } from "../services/mongoConnection";
import { BaseChildCollection } from "./BaseChildCollection";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";
import { lessonCollection } from "./lessonCollection";

class TaskCollection extends BaseChildCollection<LessonTask> {
    


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

}

export const taskCollection = new TaskCollection();