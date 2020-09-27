import { SModel } from "./SModel";

class GQLLessonModel implements SModel {
    getGQL() {
        return `
            type Lesson {
                _id: ID!
                chapterId: ID!
                title: String!
            }
        `
    }
}

export const gqlLessonModel = new GQLLessonModel();