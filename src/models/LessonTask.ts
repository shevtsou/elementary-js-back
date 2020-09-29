import { ObjectId } from "mongodb";
import { BaseModel } from './BaseModel'
import { TaskSection } from "./TaskSection";

export class LessonTask implements BaseModel { 
    _id: ObjectId;
    lessonId: ObjectId;
    title: string;
    sections: TaskSection[];
    
}