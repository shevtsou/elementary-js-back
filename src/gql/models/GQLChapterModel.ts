import { SModel } from "./SModel";

class GQLChapterModel implements SModel {
    getGQL() {
        return `
            type Chapter {
                _id: ID!
                stepLabel: String!
                title: String!
                description: String!
            }
        `
    }
}
export const gqlChapterModel = new GQLChapterModel();
