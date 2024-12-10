import mongoose from "mongoose";
import  {categories}  from "./categories.interface";
const categoriesSchema= new mongoose.Schema<categories>({
    name:{type:String ,unique:true,required:true,trim:true},
    image:{String}
}
    ,{timestamps:true}

);
export default mongoose.model<categories>('categories',categoriesSchema);