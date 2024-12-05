import { Router } from "express";
import categoriesService from "./categories.service";

const categoriesRouter: Router = Router();

categoriesRouter.get('/', categoriesService.getAll);  
categoriesRouter.post('/', categoriesService.createOne); 
categoriesRouter.route('/:id')
    .get(categoriesService.getOne)
    .put(categoriesService.updataOne)  
    .delete(categoriesService.deleteOne)

export default categoriesRouter;
