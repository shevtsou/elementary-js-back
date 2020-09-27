import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { SQuery } from "../SQuery"

class GQLLessonQuery implements SQuery {

    getGQLTypes() { return ``}
    
    getGQL() {
        return `

    lessons(chapterId: ID!): [Lesson] 

        `
    }

    getProvider() {
        return {
            lessons: async ({chapterId}) => {
                return await lessonCollection.getByChapterId(chapterId)
            }
        }
    }
}

export const gqlLessonQuery = new GQLLessonQuery(); 

