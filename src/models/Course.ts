import { Model } from "../models/Model";
import { Chapter } from "./Chapter";
import { CourseType } from "./CourseType";



export class Course implements Model { 

    _id: string = undefined;
    name: string;
    description: string;
    type: CourseType;

    constructor() {}

}

