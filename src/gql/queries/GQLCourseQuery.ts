import { courseCollection } from "../../collections/courseCollection";
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
            courses: async () => {
                return await courseCollection.get()
            }
        }
    }
}

export const gqlCourseQuery = new GQLCourseQuery(); 

