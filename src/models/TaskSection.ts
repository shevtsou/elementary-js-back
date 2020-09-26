import { TaskSectionType } from "./TaskSectionType";

export enum SectionContentType {
    CODE = 'CODE',
    TEXT = 'text'
}

export class SectionContentBlock {
    type: SectionContentType;
    content: string;
}

export class TaskSection {// блок с заголовком
    _id: string;
    task_id: string;
    type: TaskSectionType;
    taskName: string;//'изучение'/'кодинг'
    lessonContent: SectionContentBlock[]
    
}