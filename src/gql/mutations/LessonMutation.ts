import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { Chapter } from "../../models/Chapter";
import { Course } from "../../models/Course";
import { GQlMutation } from "./GQLMutation";

class LessonMutation implements GQlMutation {


    getGQLTypes() {
        return `
            input LessonInput {
                chapterId: ID!
                title: String!
            }
        `
    }

    getGQL() {
        return`
            createLesson(input: LessonInput!): String
        `
    }

    getProvider() {
        return {
            createLesson: async ( {input}) => {
                await lessonCollection.sync(input)
                return 'Lesson created'
            }
        }
    }
}

export const gqlLessonMutation = new LessonMutation();