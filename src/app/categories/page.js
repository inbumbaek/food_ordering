'use client';
import UserTabs from "../../components/layout/UserTabs";
import {useEffect, useState} from 'react';

export default function CategoriesPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminInfoLoading, setAdminInfoLoading] = useState(true);
  useEffect(() => {
    setAdminInfoLoading(true);
    fetch('/api/profile').then(response => {
      response.json().then(data => {
        setIsAdmin(data.admin);
        setAdminInfoLoading(false);
      })
    })
  }, []);

  if (adminInfoLoading) {
    return 'Loading user info...';
  }
  
  if (!isAdmin) {
    return 'Not an admin';
  }
  
  return(
    <section className="mt-8 max-w-lg mx-auto">
      
      <UserTabs isAdmin={false} />
      categories
    </section>
  )
}