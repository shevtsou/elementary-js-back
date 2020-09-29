import { SModel } from "./SModel";

class GQLChapterModel implements SModel {
    getGQL() {
        return `
            type Chapter {
                _id: ID!
                courseId: ID!
                title: String!
                stepLabel: String!
                description: String!
            }

            type ChapterWithLessons {
                _id: ID!
                courseId: ID!
                title: String!
                stepLabel: String!
                description: String!
                lessons: [Lesson]
            }

            type FullChapter {
                _id: ID!
                courseId: ID!
                title: String!
                stepLabel: String!
                description: String!
                lessons: [FullLesson]
            }
        `
    }
}

export const gqlChapterModel = new GQLChapterModel();