import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { TaskSection } from "../models/TaskSection";
import { mongoConnection } from "../services/mongoConnection";
import { BaseChildCollection } from "./BaseChildCollection";
import { BaseHierarchyCollection } from "./BaseHierarchyCollection";
import { chapterCollection } from "./chapterCollection";
import { contentBlockCollection } from "./contentBlockCollection";
import { courseCollection } from "./courseCollection";

class SectionCollection extends BaseHierarchyCollection<TaskSection> {

    collection: Collection<TaskSection>;


    getCollectionName() {
        return 'section-collection'
    }

    getParentCollection() {
        return sectionCollection;
    }

    getParentFieldName() {
        return 'taskId'
    }

    getByTaskId(taskId: string | ObjectId) {
        return this.getByParentId(taskId);
    }

    getChildFieldName() {
        return 'contentBlocks'
    }

    getChildCollection() {
        return contentBlockCollection;
    }

}

export const sectionCollection = new SectionCollection();