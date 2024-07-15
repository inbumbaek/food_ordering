'use client'
import { useSession } from "next-auth/react"

export default function ProfilePage() {
  const session = useSession();
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Profile
      </h1>
    </section>
  )
}