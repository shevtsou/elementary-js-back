import { ObjectId } from "mongodb";
import { Model } from "../models/Model";
import { Chapter } from "./Chapter";
import { CourseType } from "./CourseType";



export class Course implements Model { 

    _id: ObjectId = undefined;
    name: string;
    description: string;
    type: CourseType;

    constructor() {}

}

