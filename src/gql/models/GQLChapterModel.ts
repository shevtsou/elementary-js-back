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
        `
    }
}

export const gqlChapterModel = new GQLChapterModel();