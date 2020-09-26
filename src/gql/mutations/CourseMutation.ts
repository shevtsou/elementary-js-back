import { courseCollection } from "../../collections/courseCollection";
import { Course } from "../../models/Course";
import { GQlMutation } from "./GQLMutation";

class CourseMutation implements GQlMutation {
    getGQL() {
        return`

            enum CourseType {
                COURSE
                PROJECT
            }

            input CourseInput {
                name: String!
                description: String!
                progress: Float!
                type: CourseType!
            }

            type Mutation {
                createCourse(input: CourseInput): String
            }
        `
    }

    getProvider() {
        return {
            createCourse: ( {input}) => {
                const course = new Course();
                course.name = input.name;
                course.description = input.description;
                course.progress = 0;
                course.type = input.type

                courseCollection.sync(course)
                return 'Course created'
            }
        }
    }
}

export const gqlCourseMutation = new CourseMutation();