import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { taskCollection } from "../../collections/taskCollection";
import { Chapter } from "../../models/Chapter";
import { Course } from "../../models/Course";
import { GQlMutation } from "./GQLMutation";

class TaskMutation implements GQlMutation {


    getGQLTypes() {
        return `
            input TaskInput {
                lessonId: ID!
                title: String!
            }
        `
    }

    getGQL() {
        return`
            createTask(input: TaskInput!): String
        `
    }

    getProvider() {
        return {
            createTask: async ( {input}) => {
                await taskCollection.sync(input)
                return 'Task created'
            }
        }
    }
}

export const gqlTaskMutation = new TaskMutation();