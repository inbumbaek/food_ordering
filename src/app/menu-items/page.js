import UserTabs from "../../components/layout/UserTabs";

export default function MenuItems() {
  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
    </section>
  );
}