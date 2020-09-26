import { Model } from "mongoose";

export class Chapter { 

    _id: string = undefined;
    courseId: string = undefined;
    title: string;
    stepLabel: string;
    description: string;

    constructor() {}

}
