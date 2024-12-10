import {Document} from "mongoose";

export interface categories extends Document {
    readonly name: string;
    image: string;
}