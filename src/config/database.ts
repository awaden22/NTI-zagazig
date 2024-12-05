import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.DBLINK!)
        .then(() => {
            console.log("connected");
        })
        .catch((err) => {
            console.error("err");
        });
};

export default dbConnection;
