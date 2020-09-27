import { MongoClient, ObjectId } from "mongodb";
import { courseCollection } from "./collections/courseCollection";
import { mongoConnection } from "./services/mongoConnection";
import  * as express from 'express'
import { courseRouter } from "./routers/courseRouter";
import { Course } from "./models/Course";
import * as bodyParser from 'body-parser'
import { graphqlHTTP } from 'express-graphql'
import * as cors from 'cors'
import { Collection, Schema } from "mongoose";
import { graphqlRootSchema } from "./services/graphqlRootSchema";
import { graphqlRootProvider } from "./services/graphqlRootProvider";
import { chapterCollection } from "./collections/chapterCollection";
import { Chapter } from "./models/Chapter";
import { CourseType } from "./models/CourseType";
import { Lesson } from "./models/Lesson";
import { LessonTask } from "./models/LessonTask";
import { TaskSectionType } from "./models/TaskSectionType";
import { lessonCollection } from "./collections/lessonCollection";
import { taskCollection } from "./collections/taskCollection";
import { sectionCollection } from "./collections/sectionCollection";
import { contentBlockCollection } from "./collections/contentBlockCollection";
import { TaskSection } from "./models/TaskSection";
import { SectionContentBlock, SectionContentType } from "./models/ContentBlock";

const PORT = 3000;


async function test(){
    const course = new Course();
    course.name = 'Тестовый курс'
    course.description = 'Это тестовый курс, он не предназначен для изучения'
    course.type = CourseType.COURSE;
    await courseCollection.sync(course);
    console.log(`course id: ${course._id}`)

    const courseChapter1 = new Chapter()
    courseChapter1.courseId = course._id;
    courseChapter1.stepLabel = 'Шаг 1.'
    courseChapter1.title = 'Тестовая глава'
    courseChapter1.description = 'В этой главе вы узнаете много полезных фич языка'
    
    await chapterCollection.sync(courseChapter1);
    console.log(`chapter id: ${courseChapter1._id}`)

    const chapter1Lesson = new Lesson();
    chapter1Lesson.chapterId = courseChapter1._id;
    chapter1Lesson.title = 'Урок 1 Изучение основ JS'
    await lessonCollection.sync(chapter1Lesson);
    console.log(`Lesson id: ${chapter1Lesson._id}`)
    
    
    
    const lessonTask = new LessonTask();
    lessonTask.lessonId = chapter1Lesson._id;
    lessonTask.title = 'Как обявить фукнцию'
    
    await taskCollection.sync(lessonTask)
    
    
    const task1Section1 = new TaskSection();
    task1Section1.taskId = lessonTask._id;
    task1Section1.taskName = 'Изучение'
    task1Section1.type = TaskSectionType.LECTURE;
    
    await sectionCollection.sync(task1Section1);
    console.log(task1Section1._id)
    
    const section1ContentBlock = new SectionContentBlock();
    section1ContentBlock.sectionId = task1Section1._id;
    section1ContentBlock.content = 'И так мы начинаем наш здоровенный курс'
    section1ContentBlock.type = SectionContentType.TEXT;
    await contentBlockCollection.sync(section1ContentBlock);
    console.log(`id: ${section1ContentBlock._id}`)


}

async function testQuery() {
    console.log(await chapterCollection.getByCourseId('5f6f93de65b742b4712391a0'))
}

(async () => {


    await mongoConnection.init();
    await courseCollection.init();
    await chapterCollection.init()
    await lessonCollection.init();
    await taskCollection.init();
    await sectionCollection.init();
    await contentBlockCollection.init();

    // await testQuery();
    // const chapter = new Chapter();

    // const course = new Course();
    // course.name = "Базовый Курс JS";
    // course.description = "Изучите основы JS";
    // course.progress = 30;
    // course.type = 'course';

    // courseCollection.sync(course)
//sudo rsync -aAXv --delete ~ /media/mshautsou/5bcce128-d403-4f77-a9e9-6a6594da25c8/mshautsou
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    app.use('/course', courseRouter)

    app.use('/graphql', graphqlHTTP({
        schema: graphqlRootSchema,
        rootValue: graphqlRootProvider,
        graphiql: true,
    }))
    app.listen(PORT, () => {
        console.log(`EPXRESS JS STARTED ON ${PORT}`)
    })
})()

