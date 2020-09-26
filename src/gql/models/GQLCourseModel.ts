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
        `
    }
}
export const gqlCourseModel = new GQLCourseModel();
