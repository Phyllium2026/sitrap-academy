import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ModuleCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  time: string;
  level: string;
}

export default function ModuleCard({
  number,
  title,
  description,
  href,
  icon: Icon,
  time,
  level,
}: ModuleCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-700 hover:shadow-lg"
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
          <Icon size={24} />
        </div>

        <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-bold text-white">
          MÓDULO {number}
        </span>
      </div>

      <h2 className="mb-3 text-2xl font-black text-slate-900">
        {title}
      </h2>

      <p className="mb-5 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {time}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {level}
        </span>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          Disponible
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="font-semibold text-green-700">
          Comenzar
        </span>

        <ArrowRight
          size={20}
          className="text-green-700 transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}