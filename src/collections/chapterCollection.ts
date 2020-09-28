import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { Course } from "../models/Course";
import { mongoConnection } from "../services/mongoConnection";
import { convertToObjectId } from "../utils/gqlUtils";
import { BaseChildCollection } from "./BaseChildCollection";
import { courseCollection, CourseCollection } from "./courseCollection";

export class ChapterCollection extends BaseChildCollection<Chapter> {

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
}

export const chapterCollection = new ChapterCollection();