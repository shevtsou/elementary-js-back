import { ObjectId } from "mongodb";
import { Model } from "mongoose";
import { LessonTask } from "./LessonTask";

export class Lesson { 

    _id: ObjectId = undefined;
    chapterId: ObjectId = undefined;
    title: string;
    tasks: LessonTask[] = undefined;

    constructor() {}

}
