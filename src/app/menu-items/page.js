"use client";
import Link from "next/link";
import UserTabs from "../../components/layout/UserTabs";
import { useProfile } from "../../components/UseProfile";

export default function MenuItemsPage() {

  const [menuItems, setMenuItems] = useState([]);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setMenuItems(menuItems);
      })
    })
  }, [])

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  return (
    <section className="mt-8 max-w-md mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link
          className="button flex"
          href={"/menu-items/new"}>
          <span>Create new menu item</span>
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-4">Edit menu item:</h2>
        {menuItems?.length > 0 && menuItems.map(item => (
          <button className="mb-1">
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
