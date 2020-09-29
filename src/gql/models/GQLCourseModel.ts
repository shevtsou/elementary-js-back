import { SModel } from "./SModel";

class GQLCourseModel implements SModel {
    getGQL() {
        return `
            enum CourseType {
                COURSE
                PROJECT
            }

            type Course {
                _id: ID
                name: String
                description: String
                type: String
            }

            type FullCourse {
                _id: ID
                name: String
                description: String
                type: String
                chapters: [FullChapter]
            }
        `
    }
}
export const gqlCourseModel = new GQLCourseModel();
