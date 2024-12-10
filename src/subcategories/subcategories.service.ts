import { Request, Response, NextFunction } from "express";
import subcategoriesSchema from "./subcategories.schema";
import { Subcategories } from "./subcategories.interface";
import refactorService from "../refactor.service";

class SubcategoriesService {
   
    setCategoryID(req: Request, res: Response, next: NextFunction) {
        if (req.params.categoryID && !req.body.category) {
            req.body.category = req.params.categoryID;
        }
        next();
    }


    filterSubcategories(req: Request, res: Response, next: NextFunction) {
        const filterData: any = {};
        if (req.params.categoryID) {
            filterData.category = req.params.categoryID;
        }
        req.filterData = filterData;
        next();
    }

    
    getAll = refactorService.getAll<Subcategories>(subcategoriesSchema);
    createOne = refactorService.createOne<Subcategories>(subcategoriesSchema);
    getOne = refactorService.getOne<Subcategories>(subcategoriesSchema);
    updateOne = refactorService.updateOne<Subcategories>(subcategoriesSchema);
    deleteOne = refactorService.deleteOne<Subcategories>(subcategoriesSchema);
}

const subcategoriesService = new SubcategoriesService();
export default subcategoriesService;
