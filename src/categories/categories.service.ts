import  {categories} from './categories.interface';
import categoriesSchema from "./categories.schema";
import refactorService from '../refactor.service';

class CategoriesService {

    getAll = refactorService.getAll<categories>(categoriesSchema);
    createOne = refactorService.createOne<categories>(categoriesSchema);
    getOne = refactorService.getOne<categories>(categoriesSchema);
    updateOne = refactorService.updateOne<categories>(categoriesSchema);
    deleteOne = refactorService.deleteOne<categories>(categoriesSchema);
}

const categoriesService = new CategoriesService();
export default categoriesService;
