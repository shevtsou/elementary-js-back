import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { SQuery } from "../SQuery"

class GQLLessonQuery implements SQuery {

    getGQLTypes() { return ``}
    
    getGQL() {
        return `

    lessons(chapterId: ID!): [Lesson] 
    fullLesson(id: ID!): FullLesson
        `
    }

    getProvider() {
        return {
            lessons: async ({chapterId}) => {
                return await lessonCollection.getByChapterId(chapterId)
            },
            fullLesson: async ({ id }) => {
                return await lessonCollection.getFullModel(id);
            }
        }
    }
}

export const gqlLessonQuery = new GQLLessonQuery(); 

