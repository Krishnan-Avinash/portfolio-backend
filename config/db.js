import mongoose from "mongoose";

export const connectDb = async () => {
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => console.log("Db connected"));
};
