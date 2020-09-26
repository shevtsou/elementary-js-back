import { MongoClient } from "mongodb";
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
import { SectionContentBlock, SectionContentType, TaskSection } from "./models/TaskSection";
import { TaskSectionType } from "./models/TaskSectionType";
import { lessonCollection } from "./collections/lessonCollection";

const PORT = 3000;


async function test(){
    const course = new Course();
    course.name = 'Тестовый курс'
    course.description = 'Это тестовый курс, он не предназначен для изучения'
    course.type = CourseType.COURSE;
    // await courseCollection.sync(course);
    // console.log(`course id: ${course._id}`)

    const COURSE_ID = '5f6f93de65b742b4712391a0'

    const courseChapter1 = new Chapter()
    courseChapter1.courseId = COURSE_ID;
    courseChapter1.stepLabel = 'Шаг 1.'
    courseChapter1.title = 'Тестовая глава'
    courseChapter1.description = 'В этой главе вы узнаете много полезных фич языка'
    
    // await chapterCollection.sync(courseChapter1);
    // console.log(`chapter id: ${courseChapter1._id}`)
    const CHAPTER_ID = '5f6f95211f1c07b7a471033c';

    // await chapterCollection.sync(courseChapter1)

    // console.log(`Chapter id: ${courseChapter1._id}`)

    
    const chapter1Lesson = new Lesson();
    chapter1Lesson.chapterId = CHAPTER_ID;
    chapter1Lesson.title = 'Урок 1 Изучение основ JS'
    // await lessonCollection.sync(chapter1Lesson);
    // console.log(`Lesson id: ${chapter1Lesson._id}`)
    
    
    const LESSON_ID = '5f6f96e4cb8acaba75ea61b0';
    
    const lessonTask = new LessonTask();
    lessonTask.lessonId = chapter1Lesson._id;
    lessonTask.title = 'Как обявить фукнцию'
    
    const lessonTask2 = new LessonTask();
    lessonTask.lessonId = chapter1Lesson._id;
    lessonTask.title = 'Как объявить стрелочную фукнцию'

    process.exit(0);
    const task1Section1 = new TaskSection();
    task1Section1.task_id = lessonTask._id;
    task1Section1.taskName = 'Изучение'
    task1Section1.type = TaskSectionType.LECTURE;

    const section1ContentBlock = new SectionContentBlock();
    section1ContentBlock.content = 'И так мы начинаем наш здоровенный курс'
    section1ContentBlock.type = SectionContentType.TEXT;
    task1Section1.lessonContent.push(section1ContentBlock)



}

(async () => {


    await mongoConnection.init();
    await courseCollection.init();
    await chapterCollection.init()
    await lessonCollection.init();

    await test()
    const chapter = new Chapter();

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

