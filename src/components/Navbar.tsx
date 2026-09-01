 
 import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg hover:text-slate-300 transition-colors">
          My App
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-slate-300 transition-colors">
            Home
          </Link>
          <Link href="/foods" className="hover:text-slate-300 transition-colors">
            Foods
          </Link>
          <Link href="/about" className="hover:text-slate-300 transition-colors">
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
}