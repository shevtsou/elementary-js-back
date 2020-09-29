import { ObjectId } from "mongodb";
import { SectionContentBlock } from "./ContentBlock";
import { TaskSectionType } from "./TaskSectionType";


export class TaskSection {// блок с заголовком
    _id: ObjectId;
    taskId: ObjectId;
    type: TaskSectionType;
    taskName: string;//'изучение'/'кодинг'
    contentBlocks: SectionContentBlock[] = undefined;
 
}