import { Model } from "../models/Model";
import { CourseType } from "./CourseType";

export class Lesson implements Model  {
    name: string;
}

export class Chapter implements Model  {
    name: string;
    lessons: Lesson[] = []

}

export class Course implements Model { 

    _id: string = undefined;
    name: string;
    description: string;
    progress: number;
    type: CourseType;
    // chapters: Chapter[] = []

    constructor() {}

}

