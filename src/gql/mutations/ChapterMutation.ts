import { courseCollection } from "../../collections/courseCollection";
import { Chapter } from "../../models/Chapter";
import { Course } from "../../models/Course";
import { GQlMutation } from "./GQLMutation";

class ChapterMutation implements GQlMutation {

    getGQLTypes() {
        return `
            input ChapterInput {
                stepLabel: String!
                title: String!
                description: String!
            }
        `
    }

    getGQL() {
        return`

            createChapter(courseId: ID!, input: ChapterInput!): String
        `
    }

    getProvider() {
        return {
            createChapter: async ( {courseId, input}) => {
                console.log('course id', courseId)
                console.log('Chapter CreateInput', input)
                
                const courses: Course[] = await courseCollection.get(courseId);
                if (!courses?.length) {
                    return 'ERROR: Course not found'
                }

                const course = courses[0];
                
                const chapter: Chapter = new Chapter();
                chapter.stepLabel = input.stepLabel;
                chapter.title = input.title;
                chapter.description = input.description;

                // course.chapters.push(chapter);

                await courseCollection.sync(course)
                return 'Chapter created'

                // const course = new Course();
                // course.name = input.name;
                // course.description = input.description;
                // course.progress = 0;
                // course.type = input.type

                // courseCollection.sync(course)
                // return 'Course created'
            }
        }
    }
}

export const gqlChapterMutation = new ChapterMutation();