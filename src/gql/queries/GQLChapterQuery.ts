import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { SQuery } from "../SQuery"

class GQLChapterQuery implements SQuery {

    getGQLTypes() { return ``}
    
    getGQL() {
        return `

    chapters(courseId: ID!): [Chapter] 

        `
    }

    getProvider() {
        return {
            chapters: async ({courseId}) => {
                return await chapterCollection.getByCourseId(courseId)
            }
        }
    }
}

export const gqlChapterQuery = new GQLChapterQuery(); 

