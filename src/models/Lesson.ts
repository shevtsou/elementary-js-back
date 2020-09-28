import { ObjectId } from "mongodb";
import { Model } from "mongoose";

export class Lesson { 

    _id: ObjectId = undefined;
    chapterId: ObjectId = undefined;
    title: string;

    constructor() {}

}
