import { SModel } from "./SModel";

class GQLTaskModel implements SModel {
    getGQL() {
        return `
            type Task {
                _id: ID!
                lessonId: ID!
                title: String!
            }
        `
    }
}


export const gqlTaskModel = new GQLTaskModel();