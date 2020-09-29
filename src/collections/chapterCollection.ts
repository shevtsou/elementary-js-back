import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { mongoConnection } from "../services/mongoConnection";
import { convertToObjectId } from "../utils/gqlUtils";
import { BaseChildCollection } from "./BaseChildCollection";
import { BaseHierarchyCollection } from "./BaseHierarchyCollection";
import { courseCollection, CourseCollection } from "./courseCollection";
import { lessonCollection } from "./lessonCollection";

export class ChapterCollection extends BaseHierarchyCollection<Chapter> {

    collection: Collection<Chapter>;


    getCollectionName() {
        return 'chapter-collection';
    }

    getParentFieldName() {
        return 'courseId'
    }

    getParentCollection() {
        return courseCollection;
    }

    async getByCourseId(id: string): Promise<Chapter[]> {
        return await this.getByParentId(id);
    }

    getChildFieldName() {
        return 'lessons';
    }

    getChildCollection() {
        return lessonCollection;
    }
}

export const chapterCollection = new ChapterCollection();