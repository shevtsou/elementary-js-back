import { ObjectId } from "mongodb";

export enum SectionContentType {
    CODE = 'CODE',
    TEXT = 'text'
}



export class SectionContentBlock {
    _id: ObjectId;
    sectionId: string;
    type: SectionContentType;
    content: string;
}