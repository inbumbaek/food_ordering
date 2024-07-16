'use client'
import { useSession } from "next-auth/react"
import {redirect} from "next/navigation";

export default function ProfilePage() {
  const session = useSession();
  const {status} = session;

  if (status === 'loading') {
    return 'Loading...';
  }

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Profile
      </h1>
    </section>
  )
}