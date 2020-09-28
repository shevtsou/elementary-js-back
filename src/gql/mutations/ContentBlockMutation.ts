import { chapterCollection } from "../../collections/chapterCollection";
import { contentBlockCollection } from "../../collections/contentBlockCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { sectionCollection } from "../../collections/sectionCollection";
import { taskCollection } from "../../collections/taskCollection";
import { Chapter } from "../../models/Chapter";
import { Course } from "../../models/Course";
import { GQlMutation } from "./GQLMutation";

class ContentBlockMutation implements GQlMutation {


    getGQLTypes() {
        return `
            input ContentBlockInput {
                sectionId: ID!
                type: ContentBlockType!
                content: String!
            }
        `
    }

    getGQL() {
        return`
            createContentBlock(input: ContentBlockInput!): String
        `
    }

    getProvider() {
        return {
            createContentBlock: async ( {input}) => {
                await contentBlockCollection.sync(input)
                return 'Content block created'
            }
        }
    }
}

export const contentBlockMutation = new ContentBlockMutation();