import { SModel } from "./SModel";

class GQLTaskModel implements SModel {
    getGQL() {
        return `
            type Task {
                _id: ID!
                lessonId: ID!
                title: String!
            }

            type FullTask {
                _id: ID!
                lessonId: ID!
                title: String!
                sections: [FullSection]!
            }
        `
    }
}


export const gqlTaskModel = new GQLTaskModel();