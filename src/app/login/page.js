'use client'

export default function LoginPage() {
  return (
    <section>
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </form>
    </section>
  );
}
