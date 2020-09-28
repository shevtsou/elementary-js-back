import { SModel } from "./SModel";

class GQLContentBlockModel implements SModel {
    getGQL() {
        return `
            enum ContentBlockType {
                CODE
                TEXT
            }
            type ContentBlock {
                _id: ID!
                sectionId: ID!
                type: ContentBlockType!
                content: String!
             
            }
        `
    }
}




export const gqlContentBlockModel = new GQLContentBlockModel();