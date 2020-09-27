import { TaskSectionType } from "./TaskSectionType";


export class TaskSection {// блок с заголовком
    _id: string;
    taskId: string;
    type: TaskSectionType;
    taskName: string;//'изучение'/'кодинг'
 
}