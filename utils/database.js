import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectToDB = async () => {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("Connected to DB"))
        .catch((err) => console.log(err))
}