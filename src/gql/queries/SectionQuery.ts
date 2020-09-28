import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { sectionCollection } from "../../collections/sectionCollection";
import { taskCollection } from "../../collections/taskCollection";
import { SQuery } from "../SQuery"

class SectionQuery implements SQuery {

    getGQLTypes() { return ``}
    
    getGQL() {
        return `

    sections(taskId: ID!): [Section] 

        `
    }

    getProvider() {
        return {
            sections: async ({taskId}) => {
                return await sectionCollection.getByTaskId(taskId)
            }
        }
    }
}

export const sectionQuery = new SectionQuery(); 

