import mongoose from "mongoose";

export async function mongoDBConnection() {
  const url = process.env.MONGODB_URL;
  await mongoose.connect(url);
}
