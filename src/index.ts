import express from 'express';
import categoriesRouter from './categories/categories.router';
import subcategoriesRouter from './subcategories/subcategories.router';
import globalErrors from './middlewares/errors.middleware';
import ApiErrors from './utils/apiErrors';
 

 declare module "express"{
    interface Request{
        filterData?:any;
    }
 }

const mountRoutes=(app:express.Application)=>{
    
    app.use('/api/v1/categories',categoriesRouter)
    app.use('/api/v1/subcategories',subcategoriesRouter);
    app.all ('*', (req : express.Request , res : express.Response , next : express.NextFunction) => {
        next( new ApiErrors('route "${req.originalUrl}"not found',400));

    });
    app.use (globalErrors);
}
export default mountRoutes;