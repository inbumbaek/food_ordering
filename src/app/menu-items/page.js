"use client";
import UserTabs from "../../components/layout/UserTabs";
import { useProfile } from "../../components/UseProfile";

export default function MenuItems() {
  const { lading, data } = useProfile();

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <form className="mt-8 max-w-md mx-auto">
        <div className="flex items-start gap-2">
          <div>
            image
          </div>
          <div className="grow">
            <label>Item name</label>
            <input type="text" />
            <label>Description</label>
            <input type="text" />
            <label>Base price</label>
            <input type="text" />
          </div>
        </div>
      </form>
    </section>
  );
}
