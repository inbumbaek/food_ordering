'use client';
import UserTabs from "../../components/layout/UserTabs";
import {useEffect, useState} from 'react';
import { UseProfile } from "../../components/UseProfile";

export default function CategoriesPage() {
  
  const {loading, data} = useProfile();
  
  return(
    <section className="mt-8 max-w-lg mx-auto">
      
      <UserTabs isAdmin={true} />
      categories
    </section>
  )
}