import { Router } from "express";
import subcategoriesService from "./subcategories.service";
import subcategoriesValidation from "./subcategories.validation";
const subcategoriesRouter: Router = Router({mergeParams: true});
subcategoriesRouter.route('/')
.get(subcategoriesService.filterSubcategories,subcategoriesService.createOne)
.post(subcategoriesService.setCategoryID,subcategoriesService.createOne);

subcategoriesRouter.route('/:id')
.get(subcategoriesValidation.getOne,subcategoriesService.getOne)
.put(subcategoriesValidation.updateOne,subcategoriesService.updateOne)
.delete(subcategoriesValidation.deleteOne,subcategoriesService.deleteOne);
export default subcategoriesRouter;