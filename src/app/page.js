import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="">
          ST PIZZA
        </Link>
        <nav className="flex items-center gap-4 text-gray-400 font-semibold">
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={''} className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
        </nav>
      </header>
    </>
  );
}
