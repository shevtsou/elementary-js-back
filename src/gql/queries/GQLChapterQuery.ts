import { chapterCollection } from "../../collections/chapterCollection";
import { courseCollection } from "../../collections/courseCollection";
import { lessonCollection } from "../../collections/lessonCollection";
import { Chapter } from "../../models/Chapter";
import { SQuery } from "../SQuery"

class GQLChapterQuery implements SQuery {

    getGQLTypes() { return ``}
    
    getGQL() {
        return `

    chapters(courseId: ID!): [Chapter] 
    chaptersWithLessons(courseId: ID!): [ChapterWithLessons]
        `
    }

    getProvider() {
        return {
            chapters: async ({courseId}) => {
                return await chapterCollection.getByCourseId(courseId)
            },
            chaptersWithLessons: async ({ courseId }) => {
                const chapters: Chapter[] =  await chapterCollection.getByCourseId(courseId)//TODO: REFACTOR WITH ONE QUERY
                for (const chapter of chapters) {
                    chapter.lessons = await lessonCollection.getByChapterId(chapter._id);
                }
                return chapters;

            }
        }
    }
}

export const gqlChapterQuery = new GQLChapterQuery(); 

