import Link from "next/link";
import { GraduationCap, Home } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white shadow-sm">
            <GraduationCap size={22} />
          </div>

          <div>
            <div className="text-lg font-black tracking-tight text-slate-950">
              SITRAP Academy
            </div>
            <div className="text-xs font-bold text-green-700">
              Capacitación técnica operacional
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 hover:bg-green-50 hover:text-green-800"
          >
            <Home size={17} />
            Inicio
          </Link>

          <div className="ml-2 flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-black text-green-800">
            <GraduationCap size={17} />
            Academia
          </div>
        </nav>
      </div>
    </header>
  );
}