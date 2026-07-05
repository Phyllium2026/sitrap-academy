import Link from "next/link";
import Header from "@/components/Header";
import {
  ArrowRight,
  ClipboardList,
  PackageCheck,
  PackagePlus,
  Printer,
  QrCode,
  ScanLine,
  Truck,
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Crear nuevo lote",
    description: "Registro inicial de un lote mediante Formulario E1.",
    href: "/modulo-01",
    time: "8 min",
    level: "Básico",
    icon: PackagePlus,
  },
  {
    number: "02",
    title: "Imprimir QR del lote",
    description: "Generación e impresión de la etiqueta QR oficial del lote.",
    href: "/modulo-02",
    time: "5 min",
    level: "Básico",
    icon: QrCode,
  },
  {
    number: "03",
    title: "Registro de Movimientos del Lote",
    description: "Lectura QR y registro general de movimientos operacionales.",
    href: "/modulo-03",
    time: "6 min",
    level: "Básico",
    icon: ScanLine,
  },
  {
    number: "04",
    title: "Registro de Movimientos del Lote (Recepción)",
    description: "Recepción y registro de ingreso de plantas al vivero.",
    href: "/modulo-04",
    time: "7 min",
    level: "Básico",
    icon: Truck,
  },
  {
    number: "05",
    title: "Registro de Movimientos del Lote (EECC)",
    description: "Registro del despacho de plantas hacia Empresas Contratistas.",
    href: "/modulo-05",
    time: "8 min",
    level: "Intermedio",
    icon: PackageCheck,
  },
  {
    number: "06",
    title: "Impresión Ticket Despacho EECC",
    description: "Generación e impresión del ticket de despacho.",
    href: "/modulo-06",
    time: "5 min",
    level: "Básico",
    icon: Printer,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f2f8f3] to-[#edf4ef]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-3">
        <div className="mb-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800 ring-1 ring-green-100">
                <ClipboardList size={14} />
                Manual Técnico Operacional
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-950">
                Academia SITRAP
              </h1>

              <p className="mt-1 max-w-4xl text-sm leading-5 text-slate-600">
                Capacitación práctica para operar el sistema de inventario y
                trazabilidad de plantas: creación de lotes, impresión QR,
                movimientos, recepción, despachos a EECC e impresión de tickets.
              </p>
            </div>

            <div className="grid gap-2">
              <Link
                href="/modulo-01"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-800"
              >
                Comenzar capacitación
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/manual"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Ver manual
              </Link>
            </div>
          </div>

          <div className="mt-3 grid gap-2 border-t border-slate-100 pt-3 sm:grid-cols-3">
            <div className="rounded-xl bg-green-50 px-4 py-2">
              <p className="text-xs font-bold text-green-800">Ruta</p>
              <p className="text-lg font-black text-slate-950">
                6 módulos
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 px-4 py-2">
              <p className="text-xs font-bold text-slate-500">Modalidad</p>
              <p className="text-lg font-black text-slate-950">
                Práctica
              </p>
            </div>

            <div className="rounded-xl bg-green-50 px-4 py-2">
              <p className="text-xs font-bold text-green-800">Estado</p>
              <p className="text-lg font-black text-slate-950">
                Disponible
              </p>
            </div>
          </div>
        </div>

        <div className="mb-2 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black tracking-tight text-slate-950">
              Módulos de capacitación
            </h2>

            <p className="text-sm text-slate-600">
              Selecciona un módulo para iniciar.
            </p>
          </div>

          <div className="hidden rounded-full bg-white px-4 py-1.5 text-xs font-bold text-green-800 ring-1 ring-green-100 md:block">
            Tiempo total estimado: 39 min
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <Link
                key={module.number}
                href={module.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-green-300 hover:shadow-md"
              >
                <div className="flex gap-3 p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-black tracking-tight text-slate-950">
                        {module.title}
                      </h3>

                      <span className="shrink-0 rounded-full bg-green-700 px-2.5 py-0.5 text-[11px] font-black text-white">
                        {module.number}
                      </span>
                    </div>

                    <p className="mt-1 min-h-[34px] text-sm leading-5 text-slate-600">
                      {module.description}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
                        {module.time}
                      </span>

                      <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-bold text-green-700">
                        {module.level}
                      </span>

                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                        Disponible
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2 text-green-700">
                  <span className="text-sm font-black">
                    Comenzar
                  </span>

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}