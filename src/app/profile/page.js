"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import InfoBox from "../../components/layout/InfoBox";
import SuccessBox from "../../components/layout/SuccessBox";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const [image, setIamge] = useState("");
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
      setIamge(session.data.user.image);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName,image }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
    }
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      toast('Uploading...');
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      toast('Upload complete!');
      const link = await response.json();
      setIamge(link);
    }
  }

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <div className="max-w-md mx-auto">
        {saved && (
          <SuccessBox>Profile saved!</SuccessBox>
        )}
        {isSaving && (
          <InfoBox>Saving...</InfoBox>
        )}
        
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-4 rounded-lg relative max-w-[120px]">
              {image && (
                <Image
                  className="rounded-lg w-full h-full mb-1"
                  src={image}
                  width={250}
                  height={250}
                  alt={"avatar"}
                />
              )}

              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
                  Edit
                </span>
              </label>
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
