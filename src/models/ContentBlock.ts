export enum SectionContentType {
    CODE = 'CODE',
    TEXT = 'text'
}



export class SectionContentBlock {
    _id: string;
    sectionId: string;
    type: SectionContentType;
    content: string;
}