import UserTabs from "../../components/layout/UserTabs";
import {useEffect} from 'react';

export default function CategoriesPage() {
  useEffect(() => {
    fetch('/api/profile').then(response => {
      response.json().then(data => {
        
      })
    })
  }, []);
  return(
    <section className="mt-8 max-w-lg mx-auto">
      <UserTabs isAdmin={true} />
      categories
    </section>
  )
}