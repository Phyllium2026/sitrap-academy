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
                Guía operacional para generar e imprimir el ticket de despacho
                asociado a una entrega de plantas a Empresa Contratista.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_330px]">
              <div className="space-y-4">
                <ManualStep
                  numero="01"
                  titulo="Ingresar al módulo"
                  imagen="/Manual/modulo-06/modulo06-01-inicio (1).jpg"
                  descripcion="Desde SITRAP, ingresa al módulo de impresión de ticket de despacho."
                  resultado="El sistema abre la pantalla para generar el ticket."
                />

                <ManualStep
                  numero="02"
                  titulo="Generar ticket de despacho"
                  imagen="/Manual/modulo-06/modulo06-02-ticket-despacho (1).jpg"
                  descripcion="Selecciona o confirma la información del despacho para generar el ticket correspondiente."
                  consejo="Verifica que el despacho corresponda a la EECC y contrato correcto."
                />

                <ManualStep
                  numero="03"
                  titulo="Ticket creado"
                  imagen="/Manual/modulo-06/modulo06-03-ticket-creado.jpg"
                  descripcion="Revisa la vista generada del ticket antes de imprimir."
                  advertencia="No imprimas si el contrato, EECC, lote o cantidad no corresponden."
                  resultado="El ticket queda listo para impresión."
                />

                <ManualStep
                  numero="04"
                  titulo="Enviar a POS Printer"
                  imagen="/Manual/modulo-06/modulo06-04-pos-printer.jpg"
                  descripcion="Copia o envía el contenido del ticket a la impresora POS configurada."
                  consejo="Verifica que la impresora térmica esté conectada antes de imprimir."
                />

                <ManualStep
                  numero="05"
                  titulo="Verificar ticket impreso"
                  imagen="/Manual/modulo-06/modulo06-05-ticket-impreso.jpg"
                  descripcion="Revisa que el ticket impreso sea legible y que contenga la información del despacho."
                  resultado="El despacho queda respaldado con su ticket físico."
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
                    El ticket de despacho queda generado e impreso correctamente,
                    respaldando la entrega de plantas a la Empresa Contratista.
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
                    <li>• Imprimir un ticket de un despacho incorrecto.</li>
                    <li>• No revisar EECC y contrato antes de imprimir.</li>
                    <li>• Imprimir con papel térmico mal instalado.</li>
                    <li>• Entregar plantas sin respaldo de ticket.</li>
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
                    <li>• Confirmar EECC, contrato y cantidad.</li>
                    <li>• Mantener copia o respaldo del despacho.</li>
                    <li>• Verificar legibilidad del ticket impreso.</li>
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
