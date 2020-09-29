import { ObjectId } from "mongodb";

export enum SectionContentType {
    CODE = 'CODE',
    TEXT = 'TEXT'
}



export class SectionContentBlock {
    _id: ObjectId;
    sectionId: ObjectId;
    type: SectionContentType;
    content: string;
}