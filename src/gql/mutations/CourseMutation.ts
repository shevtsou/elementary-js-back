import { courseCollection } from "../../collections/courseCollection";
import { Course } from "../../models/Course";
import { GQlMutation } from "./GQLMutation";

class CourseMutation implements GQlMutation {
    getGQLTypes() {
        return`
        input CourseInput {
            name: String!
            description: String!
            type: CourseType!
        }
        `
    }

    getGQL() {
        return `

            createCourse(input: CourseInput!): String
        `
    }

    getProvider() {
        return {
            createCourse: ( {input}) => {
                const course = new Course();
                course.name = input.name;
                course.description = input.description;
                course.type = input.type

                courseCollection.sync(course)
                return 'Course created'
            }
        }
    }
}

export const gqlCourseMutation = new CourseMutation();