import { Collection, Db, ObjectId } from "mongodb";
import { convertToObject } from "typescript";
import { Course } from "../models/Course";
import { mongoConnection } from "../services/mongoConnection";
import { convertToObjectId } from "../utils/gqlUtils";
import { BaseCollection } from "./BaseCollection";
import { chapterCollection } from "./chapterCollection";

export class CourseCollection extends BaseCollection<Course> {

    collection: Collection<Course>;

    getCollectionName() {
        return 'course-collection'
    }
}

export const courseCollection = new CourseCollection();