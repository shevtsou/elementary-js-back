import { Model } from "mongoose";
import { Lesson } from "./Lesson";

export class Chapter { 

    _id: string = undefined;
    courseId: string = undefined;
    title: string;
    stepLabel: string;
    description: string;
    lessons: Lesson[] | undefined;

    constructor() {}

}
