import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { taskCollection } from "../../collections/taskCollection";
import { SQuery } from "../SQuery"

class GQLTaskQuery implements SQuery {

    getGQLTypes() { return ``}
    
    getGQL() {
        return `

    tasks(lessonId: ID!): [Task] 

        `
    }

    getProvider() {
        return {
            tasks: async ({lessonId}) => {
                return await taskCollection.getByLessonId(lessonId)
            }
        }
    }
}

export const gqlTaskQuery = new GQLTaskQuery(); 

