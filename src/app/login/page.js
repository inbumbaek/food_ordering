'use client'
import {useState} from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section>
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto">
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={false}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={false}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
