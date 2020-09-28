import { ObjectId } from "mongodb";
import { Model } from "mongoose";
import { Lesson } from "./Lesson";

export class Chapter { 

    _id: ObjectId = undefined;
    courseId: ObjectId = undefined;
    title: string;
    stepLabel: string;
    description: string;
    lessons: Lesson[] | undefined;

    constructor() {}

}
