"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabs({ isAdmin }) {
  const path = usePathname();
  return (
    <div className="flex mx-auto gap-2 tabs justify-center">
      <Link className={path === "/profile" ? "active" : ""} href={"/profile"}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link href={"/categories"} className={path === "/profile" ? "active" : ""}>Categories</Link>
          <Link href={"/menu-items"} className={path === "/profile" ? "active" : ""}>Menu Items</Link>
          <Link href={"/users"} className={path === "/profile" ? "active" : ""}>Users</Link>
        </>
      )}
    </div>
  );
}
