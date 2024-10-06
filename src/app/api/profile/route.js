import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { UserInfo } from "../../../models/UserInfo";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

    await User.updateOne({email}, data);

  return Response.json(true);
}


export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return Response.json(null);
  }
  const user = await User.findOne({email});
  const UserInfo = await userInfo.findOne({email});
  return Response.json({...user, ...userInfo}
  )
}