import { Router } from "express";
import subcategoriesService from "./subcategories.service";
const subcategoriesRouter: Router = Router({mergeParams: true});
subcategoriesRouter.route('/')
.get(subcategoriesService.filterSubcategories,subcategoriesService.createOne)
.post(subcategoriesService.setCategoryID,subcategoriesService.createOne);

subcategoriesRouter.route('/:id')
.get(subcategoriesService.getOne)
.put(subcategoriesService.updateOne)
.delete(subcategoriesService.deleteOne);
export default subcategoriesRouter;