import { chapterCollection } from "../../collections/chapterCollection";
import { contentBlockCollection } from "../../collections/contentBlockCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { sectionCollection } from "../../collections/sectionCollection";
import { taskCollection } from "../../collections/taskCollection";
import { SQuery } from "../SQuery"

class ContentBlockQuery implements SQuery {

    getGQLTypes() { return ``}
    
    getGQL() {
        return `

    contentBlocks(sectionId: ID!): [ContentBlock] 

        `
    }

    getProvider() {
        return {
            contentBlocks: async ({sectionId}) => {
                return await contentBlockCollection.getBySectionId(sectionId)
            }
        }
    }
}

export const contentBlockQuery = new ContentBlockQuery(); 

