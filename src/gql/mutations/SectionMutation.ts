import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { sectionCollection } from "../../collections/sectionCollection";
import { taskCollection } from "../../collections/taskCollection";
import { Chapter } from "../../models/Chapter";
import { Course } from "../../models/Course";
import { GQlMutation } from "./GQLMutation";

class SectionMutation implements GQlMutation {


    getGQLTypes() {
        return `
            input SectionInput {
                taskId: ID!
                type: TaskSectionType!
                taskName: String!
            }
        `
    }

    getGQL() {
        return`
            createSection(input: SectionInput!): String
        `
    }

    getProvider() {
        return {
            createSection: async ( {input}) => {
                await sectionCollection.sync(input)
                return 'Section created'
            }
        }
    }
}

export const sectionMutation = new SectionMutation();