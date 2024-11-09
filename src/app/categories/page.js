"use client";
import UserTabs from "../../components/layout/UserTabs";
import { useEffect, useState } from "react";
import { useProfile } from "../../components/UseProfile";

export default function CategoriesPage() {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const { loading: profileLoading, data: profileData } = useProfile();
  const [editecdCategory, setEditedCategory] = useState(null);

  useEffect(() => {
    fetchCategories()
  }, [])

  function fetchCategories() {
    fetch('/api/categories').then(res => {
      res.json().then(categories => {
        setCategories(categories);
      });
    });
  }

  async function handleNewCategorySubmit(ev) {
    ev.preventDefault();
    const creationPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName }),
      });
      setNewCategoryName('');
      fetchCategories();
      if (response.ok) 
        resolve() 
      else
        reject() ;
    });
    await toast.promise(creationPromise, {
      loading: 'Creating your new category...',
      success: 'Category created',
      error: 'Error, sorry...',
    });
  }

  if (profileLoading) {
    return "Loading user info...";
  }

  if (!profileData.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8 max-w-md mx-auto">
      <UserTabs isAdmin={true} />
      <form className="mt-8" onSubmit={handleNewCategorySubmit}>
        <div className="flex gap-2 items-end">
          <div className="grow">
            <label>New category name</label>
            <input
              type="text"
              value={newCategoryName}
              onChange={(ev) => setNewCategoryName(ev.target.value)}
            />
          </div>
          <div className="pb-2">
            <button className="border border-primary" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2 className="mt-8 text-sm text-gray-500">Edit category:</h2>
        {categories?.length > 0 && categories.map(c => (
          <button
            className="bg-gray-200 rounded-xl p-2 px-4 flex gap-1 cursor-pointer mb-1">
            <span>{c.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
