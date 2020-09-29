import { SModel } from "./SModel";

class GQLLessonModel implements SModel {
    getGQL() {
        return `
            type Lesson {
                _id: ID!
                chapterId: ID!
                title: String!
            }

            type FullLesson {
                _id: ID!
                chapterId: ID!
                title: String!
                tasks: [FullTask]!
            }
        `
    }
}

export const gqlLessonModel = new GQLLessonModel();