import { ObjectId } from "mongodb";
import { BaseModel } from './BaseModel'

export class LessonTask implements BaseModel { 
    _id: ObjectId;
    lessonId: ObjectId;
    title: string;
    
}