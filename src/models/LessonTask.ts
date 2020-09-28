import { ObjectId } from "mongodb";

export class LessonTask { 
    _id: ObjectId;
    lessonId: ObjectId;
    title: string;
    
}