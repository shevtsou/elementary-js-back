import { Collection, Db, ObjectId } from "mongodb";
import { Chapter } from "../models/Chapter";
import { SectionContentBlock } from "../models/ContentBlock";
import { Course } from "../models/Course";
import { Lesson } from "../models/Lesson";
import { LessonTask } from "../models/LessonTask";
import { mongoConnection } from "../services/mongoConnection";
import { BaseChildCollection } from "./BaseChildCollection";
import { chapterCollection } from "./chapterCollection";
import { courseCollection } from "./courseCollection";
import { sectionCollection } from "./sectionCollection";

class ContentBlockCollection extends BaseChildCollection<SectionContentBlock> {
    getCollectionName() {
        return 'content-block-collection'
    }

    getParentCollection() {
        return sectionCollection;
    }

    getParentFieldName() {
        return 'sectionId';
    }

}

export const contentBlockCollection = new ContentBlockCollection();