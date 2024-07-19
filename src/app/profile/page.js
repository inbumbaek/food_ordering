"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const userImage = session.data.user.image;

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <form className="max-w-md mx-auto">
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-4 rounded-lg relative">
              <div className="relative">
                <Image
                  className="rounded-lg"
                  src={userImage}
                  layout={"fill"}
                  objectFit={"contain"}
                  alt={"avatar"}
                />
              </div>
              <button type="button">Change avatar</button>
            </div>
          </div>
          <div className="grow">
            <input type="text" placeholder="First and last name" />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}
