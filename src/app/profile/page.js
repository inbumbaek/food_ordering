"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
  }

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
      <div className="max-w-md mx-auto">
        <h2 className="text-center bg-green-100 p-4 rounded-lg border-1 border-green-300">Profile saved!</h2>
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-4 rounded-lg relative">
              <Image
                className="rounded-lg w-full h-full mb-1"
                src={userImage}
                width={250}
                height={250}
                alt={"avatar"}
              />
              <button type="button">Edit</button>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
