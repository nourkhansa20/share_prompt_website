import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectToDB = async () => {
    mongoose
        .connect('mongodb+srv://nourkhansa7:1RXm9gw4gBOhiPgT@protopia.kurwnz6.mongodb.net/?retryWrites=true&w=majority&appName=protopia')
        .then(() => console.log("Connected to DB"))
        .catch((err) => console.log(err))
}