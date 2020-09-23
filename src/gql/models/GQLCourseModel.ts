import { SModel } from "./SModel";

class GQLCourseModel implements SModel {
    getGQL() {
        return `
            type Course {
                _id: String
                name: String
                description: String
                progress: Float
                type: String
            }
        `
    }
}
export const gqlCourseModel = new GQLCourseModel();
