"use client";
import UserTabs from "../../components/layout/UserTabs";
import { useEffect, useState } from "react";
import { useProfile } from "../../components/UseProfile";

export default function CategoriesPage() {
  const { loading: profileLoading, data: profileData } = useProfile();

  if (profileLoading) {
    return "Loading user info...";
  }

  if (!profileData.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8 max-w-md mx-auto">
      <UserTabs isAdmin={true} />
      <form className="mt-8">
        <div className="flex">
          <div>
            <label>New category name</label>
            <input type="text" />
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </div>
      </form>
    </section>
  );
}
