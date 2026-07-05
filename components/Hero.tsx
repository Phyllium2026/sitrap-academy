import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Layers,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.9fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-800 ring-1 ring-green-100">
            <GraduationCap size={17} />
            Programa de capacitación operacional
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 lg:text-5xl">
            Academia SITRAP
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Formación práctica para operar correctamente el sistema de
            inventario y trazabilidad de plantas: creación de lotes,
            identificación QR, movimientos, despachos y consultas.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/modulo-01"
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-green-800"
            >
              Comenzar capacitación
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <BookOpen size={18} />
              Ver manual técnico
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
            <Layers className="mb-3 text-green-700" />
            <p className="text-sm font-bold text-slate-500">Ruta formativa</p>
            <p className="mt-1 text-3xl font-black text-slate-950">6 módulos</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <ClipboardList className="mb-3 text-green-700" />
              <p className="text-sm font-bold text-slate-500">Procedimientos</p>
              <p className="mt-1 text-2xl font-black text-slate-950">Operativos</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <CheckCircle2 className="mb-3 text-green-700" />
              <p className="text-sm font-bold text-slate-500">Estado</p>
              <p className="mt-1 text-2xl font-black text-slate-950">v1.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}