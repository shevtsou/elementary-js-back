import { SModel } from "./SModel";

class GQLCourseModel implements SModel {
    getGQL() {
        return `
            type Course {
                name: String
            }
        `
    }
}
export const gqlCourseModel = new GQLCourseModel();
