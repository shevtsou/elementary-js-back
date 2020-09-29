import { courseCollection } from "../../collections/courseCollection";
import { SQuery } from "../SQuery"

class GQLCourseQuery implements SQuery {

    getGQLTypes() { return ``}
    
    getGQL() {
        return `

    courses: [Course] 
    fullCourses: [FullCourse]
        `
    }

    getProvider() {
        return {
            courses: async () => {
                return await courseCollection.get()
            },
            fullCourses: async () => {
                return await courseCollection.getFullCourses();
            }
        }
    }
}

export const gqlCourseQuery = new GQLCourseQuery(); 

