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

export default function ManualModulo05Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8f5] px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/modulo-05"
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-900"
          >
            <ArrowLeft size={16} />
            Volver al Módulo 05
          </Link>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-green-800 px-6 py-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                <BookOpen size={15} />
                MANUAL PASO A PASO
              </div>

              <h1 className="mt-3 text-3xl font-black">
                Módulo 05 — Registro de Movimientos del Lote (EECC)
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-green-50">
                Guía operacional para registrar correctamente el despacho de
                plantas desde Vivero Monte Aranda hacia una Empresa Contratista.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_330px]">
              <div className="space-y-4">
                <ManualStep
                  numero="01"
                  titulo="Inicio del módulo"
                  imagen="/Manual/modulo-05/modulo05-01-inicio.jpg"
                  descripcion="Accede al módulo de Despacho a EECC para comenzar el registro del movimiento."
                  consejo="Verifica que el lote tenga su etiqueta QR disponible."
                  resultado="El sistema queda preparado para iniciar el despacho."
                />

                <ManualStep
                  numero="02"
                  titulo="Lote identificado"
                  imagen="/Manual/modulo-05/modulo05-02-lote-identificado.jpg"
                  descripcion="Escanea el código QR para identificar automáticamente el lote."
                  consejo="La lectura QR evita errores de digitación."
                  resultado="El lote queda cargado correctamente en SITRAP."
                />

                <ManualStep
                  numero="03"
                  titulo="Seleccionar Despacho a EECC"
                  imagen="/Manual/modulo-05/modulo05-03-despacho-eecc.jpg"
                  descripcion="Selecciona el tipo de movimiento 'Despacho a EECC'."
                  advertencia="No utilizar esta opción para traslados internos o recepciones."
                  resultado="El sistema reconoce el despacho hacia Empresa Contratista."
                />

                <ManualStep
                  numero="04"
                  titulo="Seleccionar vivero de origen"
                  imagen="/Manual/modulo-05/modulo05-04-origen-vivero.jpg"
                  descripcion="Selecciona el vivero desde donde salen las plantas."
                  consejo="Debe coincidir con el origen físico del despacho."
                />

                <ManualStep
                  numero="05"
                  titulo="Seleccionar Empresa Contratista"
                  imagen="/Manual/modulo-05/modulo05-05-destino-eecc.jpg"
                  descripcion="Selecciona la Empresa Contratista que recibirá las plantas."
                />

                <ManualStep
                  numero="06"
                  titulo="Seleccionar contrato"
                  imagen="/Manual/modulo-05/modulo05-06-contrato-destino.jpg"
                  descripcion="Selecciona el contrato asociado al despacho."
                  consejo="Verifica cuidadosamente el contrato antes de continuar."
                />

                <ManualStep
                  numero="07"
                  titulo="Registrar quién recibe"
                  imagen="/Manual/modulo-05/modulo05-07-quien-recibe.jpg"
                  descripcion="Ingresa el nombre de la persona responsable de recibir las plantas."
                />

                <ManualStep
                  numero="08"
                  titulo="Registrar transporte"
                  imagen="/Manual/modulo-05/modulo05-08-transporte.jpg"
                  descripcion="Registra los antecedentes del transporte utilizados para el despacho."
                />

                <ManualStep
                  numero="09"
                  titulo="Verificar efecto en el stock"
                  imagen="/Manual/modulo-05/modulo05-09-efecto-stock.jpg"
                  descripcion="Revisa el efecto del movimiento antes de confirmar el despacho."
                  resultado="El sistema descontará automáticamente el stock del vivero."
                />

                <ManualStep
                  numero="10"
                  titulo="Respaldo del ticket"
                  imagen="/Manual/modulo-05/modulo05-10-respaldo-ticket.jpg"
                  descripcion="Verifica la información necesaria para respaldar la emisión del ticket de despacho."
                />

                <ManualStep
                  numero="11"
                  titulo="Registro finalizado"
                  imagen="/Manual/modulo-05/modulo05-11-cierre-registro.jpg"
                  descripcion="Envía el formulario para registrar definitivamente el despacho."
                  resultado="El despacho queda registrado y el lote mantiene su trazabilidad completa."
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
                    El despacho queda registrado correctamente en SITRAP,
                    disminuyendo automáticamente el stock disponible del vivero
                    y manteniendo la trazabilidad completa del lote.
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
                    <li>• Seleccionar un contrato incorrecto.</li>
                    <li>• Elegir una Empresa Contratista equivocada.</li>
                    <li>• Registrar cantidades distintas al despacho físico.</li>
                    <li>• Omitir el respaldo del ticket.</li>
                    <li>• Confirmar el movimiento sin revisar los datos.</li>
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
                    <li>• Utilizar siempre lectura QR.</li>
                    <li>• Confirmar empresa y contrato antes de enviar.</li>
                    <li>• Registrar el despacho inmediatamente.</li>
                    <li>• Entregar el ticket junto con las plantas.</li>
                    <li>• Mantener respaldo físico del despacho.</li>
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
