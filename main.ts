import { Server } from 'http';
import express from 'express';
import dotenv from 'dotenv';
import i18n from 'i18n';
import dbConnection from "./src/config/database";
import subcategoriesRouter from './src/subcategories/subcategories.router';
 import categoriesRouter from './src/categories/categories.router';
 import mountRoutes  from "./src";
import path from 'path';
 

const app: express.Application = express();

app.use(express.json({ limit: '10kb' }));
let server: Server;

dotenv.config();
i18n.configure({
    locales: ['en', 'er'],
    directory: path.join(__dirname,'locales'),
    defaultLocale: 'en',
    queryParameter:'lnag' 
});
app.use(i18n.init);
dbConnection();
mountRoutes(app);



 app.use('/api/v1/categories',categoriesRouter)
 app.use('/api/v1/subcategories',subcategoriesRouter);

 mountRoutes(app); 

server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
process.on('unhandledRejection', (err: Error) => {
    console.error(`unhandledRejection ${err.name} | ${err.message}`);
    server.close(() => {
        console.error('shutting the application down');
        process.exit(1);
    });
});