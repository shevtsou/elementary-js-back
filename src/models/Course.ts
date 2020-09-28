import { ObjectId } from "mongodb";
import { BaseModel } from "./BaseModel";
import { Chapter } from "./Chapter";
import { CourseType } from "./CourseType";



export class Course implements BaseModel { 

    _id: ObjectId = undefined;
    name: string;
    description: string;
    type: CourseType;

    constructor() {}

}

