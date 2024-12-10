import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.DBLINK!)
        .then(() => {
            console.log("connected");
        })
        
};

export default dbConnection;
