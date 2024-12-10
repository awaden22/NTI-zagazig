import { Document } from "mongoose";
import { categories } from "../categories/categories.interface";
export interface Subcategories extends Document{
    readonly name:string,
    readonly category: categories;
    image:string;
}