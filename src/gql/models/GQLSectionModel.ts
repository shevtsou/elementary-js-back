import { SModel } from "./SModel";

class GQLSectionModel implements SModel {
    getGQL() {
        return `
            enum TaskSectionType {
                LECTURE
                PRACTICE
            }
            type Section {
                _id: ID!
                taskId: ID!
                type: TaskSectionType!
                taskName: String!
            }

            type FullSection {
                _id: ID!
                taskId: ID!
                type: TaskSectionType!
                taskName: String!
                contentBlocks: [ContentBlock]!
            }
        `
    }
}



export const gqlSectionModel = new GQLSectionModel();