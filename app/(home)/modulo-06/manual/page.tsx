import Link from "next/link";
import Header from "@/components/Header";
import ManualStep from "@/components/ManualStep";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

export default function ManualModulo06Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8f5] px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/modulo-06"
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
          >
            <ArrowLeft size={16} />
            Volver al Módulo 06
          </Link>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-green-800 px-6 py-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                <BookOpen size={15} />
                MANUAL PASO A PASO
              </div>

              <h1 className="mt-3 text-3xl font-black">
                Módulo 06 — Impresión Ticket Despacho EECC
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-green-50">
                Guía operacional para generar e imprimir correctamente el ticket
                de despacho que acompañará la entrega de plantas a la Empresa
                Contratista.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_330px]">
              <div className="space-y-4">
                <ManualStep
                  numero="01"
                  titulo="Inicio del módulo"
                  imagen="/manual/modulo-06/modulo06-01-inicio (1).jpg"
                  descripcion="Ingresa al módulo de impresión de tickets."
                  consejo="Verifica que el despacho ya haya sido registrado previamente."
                  resultado="El sistema queda listo para buscar el ticket."
                />

                <ManualStep
                  numero="02"
                  titulo="Buscar ticket de despacho"
                  imagen="/manual/modulo-06/modulo06-02-ticket-despacho (1).jpg"
                  descripcion="Busca el despacho utilizando el lote o el ticket correspondiente."
                  consejo="Selecciona siempre el despacho correcto antes de continuar."
                />

                <ManualStep
                  numero="03"
                  titulo="Ticket creado"
                  imagen="/manual/modulo-06/modulo06-03-ticket-creado.jpg"
                  descripcion="Verifica que el sistema haya creado correctamente el ticket de despacho."
                  resultado="El ticket queda disponible para copiar, generar PDF o imprimir."
                />

                <ManualStep
                  numero="04"
                  titulo="Preparar impresión POS"
                  imagen="/manual/modulo-06/modulo06-04-pos-printer.jpg"
                  descripcion="Selecciona la opción de impresión disponible para enviar el ticket a la impresora térmica."
                  consejo="Antes de imprimir, confirma que la impresora esté conectada y con papel."
                />

                <ManualStep
                  numero="05"
                  titulo="Ticket impreso"
                  imagen="/manual/modulo-06/modulo06-05-ticket-impreso.jpg"
                  descripcion="Confirma que el ticket fue impreso correctamente."
                  resultado="El ticket queda listo para acompañar el despacho de plantas."
                />
              </div>

              <aside className="space-y-3">
                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-700" />
                    <h3 className="font-black text-slate-950">
                      Resultado esperado
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-slate-700">
                    El ticket queda correctamente generado e impreso para ser
                    entregado junto con las plantas despachadas.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-amber-600" />
                    <h3 className="font-black text-slate-950">
                      Errores frecuentes
                    </h3>
                  </div>

                  <ul className="space-y-1 text-sm leading-6 text-slate-700">
                    <li>• Seleccionar un despacho incorrecto.</li>
                    <li>• Imprimir un ticket desactualizado.</li>
                    <li>• No verificar la impresora antes de imprimir.</li>
                    <li>• Entregar plantas sin ticket.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-green-700" />
                    <h3 className="font-black text-slate-950">
                      Buenas prácticas
                    </h3>
                  </div>

                  <ul className="space-y-1 text-sm leading-6 text-slate-700">
                    <li>• Revisar el ticket antes de imprimir.</li>
                    <li>• Confirmar que la impresora tenga papel.</li>
                    <li>• Imprimir inmediatamente antes del despacho.</li>
                    <li>• Entregar siempre el ticket junto con las plantas.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}