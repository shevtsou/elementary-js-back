import { SQuery } from "../SQuery"

class GQLCourseQuery implements SQuery {
    getGQL() {
        return `


type Query {
    courses: [Course] 
}

        `
    }

    getProvider() {
        return {
            courses: () => [{name: "This is first course"}]
        }
    }
}

export const gqlCourseQuery = new GQLCourseQuery(); 

