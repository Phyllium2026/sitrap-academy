import Link from "next/link";
import Header from "@/components/Header";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  FileText,
  Layers,
} from "lucide-react";

const modulos = [
  {
    numero: "01",
    titulo: "Crear nuevo lote",
    descripcion: "Manual paso a paso para registrar un nuevo lote en SITRAP.",
    href: "/modulo-01/manual",
  },
  {
    numero: "02",
    titulo: "Imprimir QR del lote",
    descripcion: "Manual para generar e imprimir la etiqueta QR oficial del lote.",
    href: "/modulo-02/manual",
  },
  {
    numero: "03",
    titulo: "Registro de Movimientos del Lote",
    descripcion: "Manual para registrar movimientos operacionales mediante QR.",
    href: "/modulo-03/manual",
  },
  {
    numero: "04",
    titulo: "Registro de Movimientos del Lote (Recepción)",
    descripcion: "Manual para registrar la recepción de plantas en vivero.",
    href: "/modulo-04/manual",
  },
  {
    numero: "05",
    titulo: "Registro de Movimientos del Lote (EECC)",
    descripcion: "Manual para registrar despachos de plantas hacia EECC.",
    href: "/modulo-05/manual",
  },
  {
    numero: "06",
    titulo: "Impresión Ticket Despacho EECC",
    descripcion: "Manual para generar e imprimir el ticket de despacho.",
    href: "/modulo-06/manual",
  },
];

export default function ManualGeneralPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8f5] px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-green-800 px-6 py-7 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                <BookOpen size={15} />
                MANUAL GENERAL SITRAP ACADEMY
              </div>

              <h1 className="mt-3 text-3xl font-black">
                Manual General de Capacitación SITRAP
              </h1>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-green-50">
                Selecciona el manual operativo del módulo que deseas revisar.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_330px]">
              <div className="grid gap-4 md:grid-cols-2">
                {modulos.map((modulo) => (
                  <Link
                    key={modulo.numero}
                    href={modulo.href}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-700 text-sm font-black text-white">
                          {modulo.numero}
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-wide text-green-700">
                            Módulo {modulo.numero}
                          </p>
                          <h2 className="text-base font-black text-slate-950">
                            {modulo.titulo}
                          </h2>
                        </div>
                      </div>

                      <FileText
                        size={20}
                        className="text-slate-400 group-hover:text-green-700"
                      />
                    </div>

                    <p className="text-sm leading-6 text-slate-600">
                      {modulo.descripcion}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-black text-green-700">
                      Ver manual paso a paso
                    </div>
                  </Link>
                ))}
              </div>

              <aside className="space-y-3">
                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-700" />
                    <h3 className="font-black text-slate-950">
                      Objetivo general
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-slate-700">
                    Reunir el acceso directo a todos los manuales operativos de
                    SITRAP Academy.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Layers size={18} className="text-green-700" />
                    <h3 className="font-black text-slate-950">
                      Flujo completo
                    </h3>
                  </div>

                  <ol className="space-y-1 text-sm leading-6 text-slate-700">
                    <li>1. Crear lote.</li>
                    <li>2. Imprimir QR.</li>
                    <li>3. Registrar movimientos.</li>
                    <li>4. Registrar recepción.</li>
                    <li>5. Registrar despacho a EECC.</li>
                    <li>6. Imprimir ticket.</li>
                  </ol>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}