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

    async getFullCourses(): Promise<Course[]> {
        const rawCourses = await this.get();
        const courses: Course[] = [];
        for (const rawCourse of rawCourses) {
            courses.push(await this.getFullCourse(rawCourse._id))
        }
        return courses;
    }

    async getFullCourse(courseId: string | ObjectId): Promise<Course> {
        const shallowCourse = (await this.get(courseId))[0];
        shallowCourse.chapters = [];

        courseId = convertToObjectId(courseId)
        const chapters = await chapterCollection.getByCourseId(courseId)
        for (const chapter of chapters) {
            shallowCourse.chapters.push(await chapterCollection.getFullModel(chapter._id));
        }
        return shallowCourse;

    }
}

export const courseCollection = new CourseCollection();