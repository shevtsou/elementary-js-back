import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { Chapter } from "../../models/Chapter";
import { Course } from "../../models/Course";
import { GQlMutation } from "./GQLMutation";

class ChapterMutation implements GQlMutation {


    getGQLTypes() {
        return `
            input ChapterInput {
                courseId: ID!
                title: String!
                stepLabel: String!
                description: String!
            }
        `
    }

    getGQL() {
        return`

            createChapter(input: ChapterInput!): String
        `
    }

    getProvider() {
        return {
            createChapter: async ( {input}) => {
                await chapterCollection.sync(input)
                return 'Chapter created'
            }
        }
    }
}

export const gqlChapterMutation = new ChapterMutation();