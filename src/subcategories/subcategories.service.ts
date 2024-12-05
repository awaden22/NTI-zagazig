import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import subcategoriesSchema from "./subcategories.schema";
import { Subcategories } from "./subcategories.interface";

class SubcategoriesService {
    setCategoryID(req: Request, res: Response,next: NextFunction){
        if (req.params.categoryID&& !req.params.category) req.body.category=req.params.category;
        next();
    }
    filterSubcategories(req: Request, res: Response, next: NextFunction){
         const filterData: any = {};
        if (req.params.categoryID) filterData.category = req.params.categoryID;
        req.filterData= filterData;
        next();

    }
    getAll = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        let filterData: any= {};
        if(req.filterData)filterData=req.filterData;
        
        const subcategories: Subcategories[] = await subcategoriesSchema.find(filterData);
        res.status(200).json({ data: subcategories });
    });

    createOne = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        if (req.params.categoryID && !req.body.ca) req.body.category = req.params.categoryID;
        const subcategory: Subcategories = await subcategoriesSchema.create(req.body);
        res.status(201).json({ data: subcategory });
    });

    getOne = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const subcategory: Subcategories | null = await subcategoriesSchema.findById(req.params.id);
        res.status(200).json({ data: subcategory });
    });

    updateOne = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const subcategory: Subcategories | null = await subcategoriesSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({ data: subcategory });
    });

    deleteOne = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const subcategory: Subcategories | null = await subcategoriesSchema.findByIdAndDelete(req.params.id);
        res.status(204).json();
    });
}

const subcategoriesService = new SubcategoriesService();
export default subcategoriesService;
