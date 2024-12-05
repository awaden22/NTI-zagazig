import express from 'express';
import dotenv from 'dotenv';

import dbConnection from "./src/config/database";
import subcategoriesRouter from './src/subcategories/subcategories.router';
 import categoriesRouter from './src/categories/categories.router';
 import mountRoutes  from "./src";


const app: express.Application = express();

app.use(express.json({ limit: '10kb' }));

dotenv.config();
dbConnection();



 app.use('/api/v1/categories',categoriesRouter)
 app.use('/api/v1/subcategories',subcategoriesRouter);
 mountRoutes(app); 

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});