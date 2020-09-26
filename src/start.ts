import { MongoClient } from "mongodb";
import { courseCollection } from "./collections/courseCollection";
import { mongoConnection } from "./services/mongoConnection";
import  * as express from 'express'
import { courseRouter } from "./routers/courseRouter";
import { Course } from "./models/Course";
import * as bodyParser from 'body-parser'
import { graphqlHTTP } from 'express-graphql'
import * as cors from 'cors'
import { Schema } from "mongoose";
import { graphqlRootSchema } from "./services/graphqlRootSchema";
import { graphqlRootProvider } from "./services/graphqlRootProvider";
import { chapterCollection } from "./collections/chapterCollection";
import { Chapter } from "./models/Chapter";
import { CourseType } from "./models/CourseType";
import { Lesson } from "./models/Lesson";
import { LessonTask } from "./models/LessonTask";
import { SectionContentBlock, SectionContentType, TaskSection } from "./models/TaskSection";
import { TaskSectionType } from "./models/TaskSectionType";

const PORT = 3000;


function generateTestCourse(){
    const course = new Course();
    course.name = 'Тестовый курс'
    course.description = 'Это тестовый курс, он не предназначен для изучения'
    course.type = CourseType.COURSE;

    const courseChapter1 = new Chapter()
    courseChapter1.courseId = course._id;
    courseChapter1.stepLabel = 'Шаг 1.'
    courseChapter1.title = 'Тестовая глава'
    courseChapter1.description = 'В этой главе вы узнаете много полезных фич языка'
    
    const chapter1Lesson = new Lesson();
    chapter1Lesson.chapter_id = courseChapter1._id;
    chapter1Lesson.title = 'Урок 1 Изучение основ JS'

    const lessonTask = new LessonTask();
    lessonTask.lessonId = chapter1Lesson._id;
    lessonTask.title = 'Как обявить фукнцию'
    
    const lessonTask2 = new LessonTask();
    lessonTask.lessonId = chapter1Lesson._id;
    lessonTask.title = 'Как объявить стрелочную фукнцию'

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

