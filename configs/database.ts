import mongoose from "mongoose";
const MONGODB = process.env.MONGODB || "";
console.log("MONGODB", process.env.MONGODB);

const optionConfig = {};

export const connectMongooDB = async () => {
  try {
    await mongoose.connect(MONGODB, optionConfig);
    console.log("Connect MongooDB Successfully!");
  } catch (error) {
    console.log("Connect MongooDB Fail!", error);
    process.exit(1);
  }
};
