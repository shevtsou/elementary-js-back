import { ObjectId } from "mongodb";
import { BaseModel } from "../models/BaseModel";
import { BaseChildCollection } from "./BaseChildCollection";

export abstract class BaseHierarchyCollection<T extends BaseModel> extends BaseChildCollection<T>{


    abstract getChildFieldName(): string

    abstract getChildCollection(): BaseHierarchyCollection<any> | BaseChildCollection<any>;

    async getFullModel(id: string | ObjectId): Promise<T | undefined> {
        const response =  await this.get(id)
        
        if (response && response.length > 0) {
            const shallowModel = response[0];
            const children = await this.getChildCollection().getByParentId(id);
            if (this.getChildCollection() instanceof BaseHierarchyCollection) {
                shallowModel[this.getChildFieldName()] = [];
                for (const child of children) {
                    const childModel = await (this.getChildCollection() as BaseHierarchyCollection<any>).getFullModel(child._id);
                    shallowModel[this.getChildFieldName()].push(childModel)
                }
            } else if (this.getChildCollection() instanceof BaseChildCollection) {
                shallowModel[this.getChildFieldName()] = children;
            }
            return shallowModel;
        } else {
            return undefined;
        }
    }

}