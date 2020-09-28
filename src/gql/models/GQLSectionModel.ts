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
        `
    }
}



export const gqlSectionModel = new GQLSectionModel();