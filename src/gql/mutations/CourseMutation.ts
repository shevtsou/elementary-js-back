import { GQlMutation } from "./GQLMutation";

class CourseMutation implements GQlMutation {
    getGQL() {
        return`
            input CourseInput {
                name: String
            }

            type Mutation {
                createCourse(input: CourseInput): String
            }
        `
    }

    getProvider() {
        return {
            createCourse: ( {input}) => {
                console.log('Course with data')
                console.log(input)
                console.log('must be created')
            }
        }
    }
}

export const gqlCourseMutation = new CourseMutation();