import { ObjectId } from "mongodb";

export const convertToObjectId = (value: any): ObjectId => {
    if (value instanceof ObjectId) {
        return value;
    } else {
        return new ObjectId(value)
    }
}