import { ObjectId } from "mongodb";
import { TaskSectionType } from "./TaskSectionType";


export class TaskSection {// блок с заголовком
    _id: ObjectId;
    taskId: ObjectId;
    type: TaskSectionType;
    taskName: string;//'изучение'/'кодинг'
 
}