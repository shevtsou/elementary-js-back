import { Model } from "../models/Model";

export class Lesson implements Model  {
    name: string;
    convertToMongoModel(): any {
        return {
            name: this.name,
        }
    }
}

export class Chapter implements Model  {
    name: string;
    lessons: Lesson[] = []
    convertToMongoModel(): any {
        return {
            name: this.name,
            lessons: this.lessons.map(c => c.convertToMongoModel())
        }
    }
}

export class Course implements Model { 

    id: string = undefined;
    name: string;
    chapters: Chapter[] = []

    constructor() {}

    convertToMongoModel(): any {
        return {
            name: this.name,
            chapters: this.chapters.map(c => c.convertToMongoModel())
        }
    }

}

