import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-4 mb-24 p-4 border rounded-2xl w-fit mx-auto mt-4 bg-transparent border-primary">
      <Link href="#about" className="text-lg font-semibold">
        About
      </Link>
      <Link href="#projects" className="text-lg font-semibold">
        Projects
      </Link>
      <Link href="contact" className="text-lg font-semibold">
        Contact me
      </Link>
    </nav>
  );
}
