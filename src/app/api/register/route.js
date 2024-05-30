import {User} from 
import mongoose from "mongoose";

export function POST(req) {
  const body = 
  mongoose.connect(process.env.MONGO_URL);
  await User
  return Response.json('ok');
}