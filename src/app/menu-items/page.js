'use client'
import UserTabs from "../../components/layout/UserTabs";
import { useProfile } from "../../components/UseProfile";

export default function MenuItems() {

  const {lading, data} = useProfile();

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin.';
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <form className="mt-8">
        <div>
          <label>Menu item name</label>
          <input type="text"/>
        </div>
      </form>
    </section>
  );
}