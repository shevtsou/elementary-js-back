import { ObjectId } from "mongodb";

export const convertToObjectId = (value: any): ObjectId => {
    if (typeof value === 'string') {
        return new ObjectId(value)
    } else {
        return value;
    }
}